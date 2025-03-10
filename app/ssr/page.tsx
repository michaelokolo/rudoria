'use server';

import { auth } from '@clerk/nextjs/server';
import { createClient } from '@supabase/supabase-js';
import AddTaskForm from '@/app/ssr/AddTaskForm';

export default async function Page() {
  const { getToken } = await auth();
  const clerkToken = await getToken({ template: 'supabase' });

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        headers: {
          Authorization: `Bearer ${clerkToken}`,
        },
      },
    }
  );

  const { data: tasks, error } = await supabase.from('tasks').select();

  if (error) throw error;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      <div className="mb-6">
        {tasks?.map((task) => (
          <p key={task.id} className="py-1">
            {task.name}
          </p>
        ))}
      </div>
      <AddTaskForm />
    </div>
  );
}
