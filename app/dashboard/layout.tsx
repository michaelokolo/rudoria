'use client';

import { SideBar } from '@/components/dashboard/side-bar';
import { NavBar } from '@/components/dashboard/nav-bar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col bg-gray-50">
        {/* Navbar */}
        <NavBar />

        {/* Children Content */}
        <main className="flex-1 p-4 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
