'use server';
import { auth } from '@clerk/nextjs/server';
import { createClient } from '@supabase/supabase-js';

export async function addTask(formData: FormData) {
  try {
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

    const name = formData.get('name') as string;
    const { error } = await supabase.from('tasks').insert({ name });

    if (error) throw error;
    console.log('Task successfully added!');
  } catch (error: any) {
    console.error('Error adding task:', error.message);
    throw new Error('Failed to add task');
  }
}
