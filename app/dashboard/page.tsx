// import { AppSidebar } from '@/components/ui/dashboard/app-sidebar';
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from '@/components/ui/dashboard/breadcrumb';
// import { Separator } from '@/components/ui/dashboard/separator';
// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from '@/components/ui/dashboard/sidebar';

// import { auth } from '@clerk/nextjs/server';
// import { createClient } from '@supabase/supabase-js';
// import AddTaskForm from '@/components/ui/dashboard/AddTaskForm';

// export default async function Page() {
//   const { getToken } = await auth();
//   const clerkToken = await getToken({ template: 'supabase' });

//   const supabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       global: {
//         headers: {
//           Authorization: `Bearer ${clerkToken}`,
//         },
//       },
//     }
//   );

//   const { data: tasks, error } = await supabase.from('tasks').select();

//   if (error) throw error;
//   return (
//     <SidebarProvider>
//       <AppSidebar />
//       <SidebarInset>
//         <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
//           <div className="flex items-center gap-2 px-4">
//             <SidebarTrigger className="-ml-1" />
//             <Separator orientation="vertical" className="mr-2 h-4" />
//             <Breadcrumb>
//               <BreadcrumbList>
//                 <BreadcrumbItem className="hidden md:block">
//                   <BreadcrumbLink href="#">
//                     Building Your Application
//                   </BreadcrumbLink>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator className="hidden md:block" />
//                 <BreadcrumbItem>
//                   <BreadcrumbPage>Data Fetching</BreadcrumbPage>
//                 </BreadcrumbItem>
//               </BreadcrumbList>
//             </Breadcrumb>
//           </div>
//         </header>
//         <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
//           <div className="grid auto-rows-min gap-4 md:grid-cols-3">
//             <div className="aspect-video rounded-xl bg-muted/50" />
//             <div className="aspect-video rounded-xl bg-muted/50" />
//             <div className="aspect-video rounded-xl bg-muted/50" />
//           </div>
//           <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
//         </div>
//         <div className="max-w-2xl mx-auto p-4">
//           <h1 className="text-2xl font-bold mb-4">Tasks</h1>
//           <div className="mb-6">
//             {tasks?.map((task) => (
//               <p key={task.id} className="py-1">
//                 {task.name}
//               </p>
//             ))}
//           </div>
//           <AddTaskForm />
//         </div>
//       </SidebarInset>
//     </SidebarProvider>
//   );
// }

// app/page.tsx
// app/page.tsx
'use client';
export default function Page() {
  return (
    <main className="p-6">
      <div className="bg-white rounded-md p-4 shadow-md">
        {/* Your main content goes here */}
        <p>Dashboard content goes here.</p>
      </div>
    </main>
  );
}
