'use client';

import { login } from '@/app/actions/auth';
import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function LoginForm() {
  const [state, action] = useActionState(login, undefined);

  return (
    <form action={action} className="max-w-md mx-auto bg-white px-8 pt-6 mb-4">
      {/* Displaying the message at the top */}
      {state?.message && (
        <p className="text-red-500 text-center mb-6 text-sm italic">
          {state.message}
        </p>
      )}

      <div className="mb-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Email</Label>
          <Input type="email" id="email" name="email" placeholder="m@example" />
        </div>

        {state?.errors?.email && (
          <p className="text-red-500 text-xs italic">{state.errors.email}</p>
        )}
      </div>

      <div className="mb-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Password</Label>
          <Input type="password" id="password" name="password" />
        </div>

        {state?.errors?.password && (
          <p className="text-red-500 text-xs italic">{state.errors.password}</p>
        )}
      </div>

      <LoginButton />
    </form>
  );
}

export function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      aria-disabled={pending}
      type="submit"
      className="mt-2 w-full cursor-pointer"
    >
      {pending ? 'Submitting...' : 'Login'}
    </Button>
  );
}
