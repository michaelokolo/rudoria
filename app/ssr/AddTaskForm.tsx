'use client';
import { useFormStatus } from 'react-dom';
import { addTask } from '@/app/ssr/actions';

export default function AddTaskForm() {
  const { pending } = useFormStatus();

  return (
    <form action={addTask} className="flex gap-2">
      <input
        autoFocus
        type="text"
        name="name"
        placeholder="Enter new task"
        className="px-2 py-1 border rounded"
        required
      />
      <button
        type="submit"
        disabled={pending}
        className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {pending ? 'Adding...' : 'Add'}
      </button>
    </form>
  );
}
