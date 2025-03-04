'use client';

import { signup } from '@/app/actions/auth';
import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function SignupForm() {
  const [state, action] = useActionState(signup, undefined);

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
          <Label htmlFor="name">Name</Label>
          <Input type="name" id="name" name="name" placeholder="John Doe" />
        </div>

        {state?.errors?.name && (
          <p className="text-red-500 text-xs italic">{state.errors.name}</p>
        )}
      </div>

      <div className="mb-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="John@example.com"
          />
        </div>

        {state?.errors?.email && (
          <p className="text-red-500 text-xs italic">{state.errors.email}</p>
        )}
      </div>

      <div className="mb-6">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" name="password" />
        </div>

        {state?.errors?.password && (
          <div className="text-red-500 text-xs italic">
            <p>Password must:</p>
            <ul className="list-disc pl-5">
              {state.errors.password.map((error: string) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <SignupButton />
    </form>
  );
}

export function SignupButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      aria-disabled={pending}
      type="submit"
      className="mt-2 w-full cursor-pointer"
    >
      {pending ? 'Submitting...' : 'Signup'}
    </Button>
  );
}
