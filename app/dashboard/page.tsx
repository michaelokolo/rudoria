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
import React, { useState } from 'react';
import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  DocumentIcon,
  ChartBarIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: HomeIcon },
    { name: 'Team', icon: UsersIcon },
    { name: 'Projects', icon: FolderIcon },
    { name: 'Calendar', icon: CalendarIcon },
    { name: 'Documents', icon: DocumentIcon },
    { name: 'Reports', icon: ChartBarIcon },
  ];

  const teamItems = [
    { name: 'Heroicons' },
    { name: 'Tailwind Labs' },
    { name: 'Workcation' },
  ];

  const settingsItem = [{ name: 'Settings', icon: CogIcon }];

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  return (
    <div className="flex flex-col h-screen w-64 bg-indigo-600 text-white">
      {/* App Logo */}
      <div className="flex items-center justify-start h-16 px-4 border-b border-indigo-700">
        <span className="text-lg font-bold">BookApp</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map((item) => (
          <div
            key={item.name}
            className={`flex items-center px-4 py-2 rounded-md text-base font-medium hover:bg-indigo-700 hover:bg-opacity-75 cursor-pointer
              ${activeItem === item.name ? 'bg-indigo-700' : 'text-white'}
            `}
            onClick={() => handleItemClick(item.name)}
          >
            <item.icon className="h-6 w-6 mr-2" />
            {item.name}
          </div>
        ))}
      </nav>

      {/* Your Teams Section */}
      <div>
        <h3 className="px-4 py-2 text-sm font-semibold text-white uppercase">
          Your teams
        </h3>
        <nav className="flex-1 px-2 py-2 space-y-1">
          {teamItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center px-4 py-2 rounded-md text-base font-medium hover:bg-indigo-700 hover:bg-opacity-75 cursor-pointer
              ${activeItem === item.name ? 'bg-indigo-700' : 'text-white'}
            `}
              onClick={() => handleItemClick(item.name)}
            >
              {item.name}
            </div>
          ))}
        </nav>
      </div>

      {/* Settings */}
      <nav className="px-2 py-4 space-y-1">
        {settingsItem.map((item) => (
          <div
            key={item.name}
            className={`flex items-center px-4 py-2 rounded-md text-base font-medium hover:bg-indigo-700 hover:bg-opacity-75 cursor-pointer
              ${activeItem === item.name ? 'bg-indigo-700' : 'text-white'}
            `}
            onClick={() => handleItemClick(item.name)}
          >
            <CogIcon className="h-6 w-6 mr-2" />
            {item.name}
          </div>
        ))}
      </nav>
    </div>
  );
};

const DashboardContent = () => {
  return (
    <div className="flex flex-col flex-1 bg-gray-50 overflow-y-auto">
      {/* Header */}
      <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200">
        <div className="flex items-center">
          <input
            type="search"
            placeholder="Search"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600">
            Notifications
          </button>
          <div className="relative inline-block text-left">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              id="menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              Tom Cook
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="bg-white rounded-md p-4 shadow-md">
          {/* Your main content goes here */}
          <p>Dashboard content goes here.</p>
        </div>
      </main>
    </div>
  );
};

export default function Page() {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <DashboardContent />
    </div>
  );
}
