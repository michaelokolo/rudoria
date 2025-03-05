'use server';

import { SignupFormSchema, FormState } from '@/lib/definitions';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { createSession } from '@/app/actions/database-session';
import { redirect } from 'next/navigation';

export async function signup(state: FormState, formData: FormData) {
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
    select: { id: true, name: true, email: true },
  });

  if (!data) {
    return {
      message: 'An error occurred while creating your account.',
    };
  }

  const userId = data.id;
  await createSession(userId);

  
}


