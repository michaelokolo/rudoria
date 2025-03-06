import 'server-only';
import { cookies } from 'next/headers';
import prisma from '@/lib/prisma';
import { SignJWT, jwtVerify } from 'jose';
import type { SessionPayload } from '@/lib/definitions';
import { redirect } from 'next/navigation';

const secretKey = process.env.SECRET;

if (!secretKey) {
  throw new Error('SECRET environment variable is missing.');
}
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
    console.error(error);
    return null; // consider changing this section.
  }
}

export async function createSession(id: string) {
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

  await prisma.session.deleteMany({
    where: { userId: id },
  });

  const data = await prisma.session.create({
    data: {
      userId: id as string,
      expiresAt,
    },
    select: { id: true },
  });

  const session = await encrypt({ userId: data.id, expiresAt });

  const cookiesStore = await cookies();
  cookiesStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });

  await prisma.session.deleteMany({
    where: {
      expiresAt: {
        lt: new Date(),
      },
    },
  });

  redirect('/dashboard');
}

export async function verifySession() {
  await prisma.session.deleteMany({
    where: { expiresAt: { lt: new Date() } },
  });
  const cookiesStore = await cookies();
  const sessionToken = cookiesStore.get('session')?.value;
  const payload = await decrypt(sessionToken);

  if (!payload?.userId) {
    redirect('/login');
  }

  const session = await prisma.session.findFirst({
    where: {
      userId: payload.userId,
      expiresAt: { gte: new Date() },
    },
  });

  if (!session) {
    cookiesStore.delete('session');
    redirect('/login');
  }

  return { isAuth: true, userId: payload.userId };
}

export async function updateSession() {
  const cookiesStore = await cookies();
  const session = cookiesStore.get('session')?.value;
  const payload = await decrypt(session);

  if (!session || !payload?.userId) {
    return null;
  }

  const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

  await prisma.session.updateMany({
    where: { userId: payload.userId },
    data: { expiresAt },
  });

  const newSessionToken = await encrypt({
    userId: payload.userId as string,
    expiresAt,
  });

  cookiesStore.set('session', newSessionToken, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });
}

export async function deleteSession() {
  const cookiesStore = await cookies();
  const session = cookiesStore.get('session')?.value;

  if (!session) {
    redirect('/login');
  }

  const payload = await decrypt(session);

  if (payload?.userId) {
    await prisma.session.deleteMany({
      where: { userId: payload.userId },
    });
  }
  cookiesStore.delete('session');
  redirect('/login');
}
