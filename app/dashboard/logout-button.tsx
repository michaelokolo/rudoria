// app/components/LogoutButton.tsx
'use client';

import { logout } from '@/app/actions/auth';

export default function LogoutButton() {
  return (
    <form action={logout}>
      <button type="submit">Log out</button>
    </form>
  );
}
