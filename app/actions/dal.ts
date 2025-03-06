import 'server-only';

import prisma from '@/lib/prisma';
import { cache } from 'react';
import { verifySession } from '@/app/actions/database-session';

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const data = await prisma.user.findUnique({
      where: { id: session.userId },
      select: { id: true, name: true, email: true },
    });

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
});
