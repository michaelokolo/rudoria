'use server';

import {
  SignupFormSchema,
  LoginFormSchema,
  FormState,
} from '@/lib/definitions';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { createSession, deleteSession } from '@/app/actions/database-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function signup(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;

  const existingUser = await prisma.user.findUnique({
    where: { email: email as string },
  });

  if (existingUser) {
    return {
      message: 'Signup failed. Please try again.',
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const data = await prisma.user.create({
    data: {
      name: name as string,
      email: email as string,
      password: hashedPassword,
    },
    select: { id: true },
  });

  if (!data || !data.id) {
    return {
      message: 'An error occurred while creating your account.',
    };
  }

  const userId = data.id;
  await createSession(userId);
}

export async function login(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  const errorMessage = { message: 'Invalid login credentials.' };

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const user = await prisma.user.findUnique({
    where: { email: validatedFields.data.email as string },
  });

  if (!user) {
    return errorMessage;
  }

  const passwordMatch = await bcrypt.compare(
    validatedFields.data.password as string,
    user.password
  );

  if (!passwordMatch) {
    return errorMessage;
  }

  const userId = user.id;
  await createSession(userId);
}

export async function logout() {
  //deleteSession();
  const cookieStore = await cookies();
  cookieStore.delete('session');
  redirect('/login');
}
