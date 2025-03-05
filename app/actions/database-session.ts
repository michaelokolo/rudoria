import 'server-only';
import { cookies } from 'next/headers';
import prisma from '@/lib/prisma';
import { SignJWT, jwtVerify } from 'jose';
import type { SessionPayload } from '@/lib/definitions';
import { redirect } from 'next/navigation';

const secretKey = process.env.SECRET;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1hr')
    .sign(key);
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    return null;
  }
}

export async function createSession(id: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  await prisma.session.create({
    data: {
      userId: id as string,
      expiresAt,
    },
    select: { id: true },
  });

  const session = await encrypt({ userId: id, expiresAt });

  const cookiesStore = await cookies();
  cookiesStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });

  redirect('/dashboard');
}
