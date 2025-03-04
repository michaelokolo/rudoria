'use server';
import { SignupFormSchema, FormState } from '@/app/lib/definitions';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

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

  try {
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

    return {
      message: 'Signup successful',
      user: {
        id: data.id,
        name: data.name as string,
        email: data.email,
      },
    };
  } catch (error) {
    console.error('Error during signup:', error);
    return { message: 'An error occurred while processing your request.' };
  }
}
