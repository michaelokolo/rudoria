import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  DocumentIcon,
  ChartBarIcon,
  CogIcon,
  BellIcon,
} from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import Link from 'next/link';

export function SideBar() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon }, // Central hub for user progress and quick actions
    { name: 'Library', href: '/dashboard/library', icon: FolderIcon }, // User's personal book collection
    { name: 'Goals', href: '/dashboard/goals', icon: ChartBarIcon }, // Reading goals and progress tracking
    { name: 'Calendar', href: '/dashboard/calendar', icon: CalendarIcon }, // Scheduled reading sessions or reminders
    {
      name: 'Recommendations',
      href: '/dashboard/recommendations',
      icon: DocumentIcon,
    }, // Personalized book suggestions
    { name: 'Community', href: '/dashboard/community', icon: UsersIcon }, // Social features like book clubs or reading groups
  ];

  const settingsItem = [{ name: 'Settings', icon: CogIcon }];

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  return (
    <div className="flex flex-col h-screen w-64 bg-indigo-600 text-white">
      {/* App Logo */}
      <div className="flex items-center justify-start h-16 px-4 border-b border-indigo-700">
        <span className="text-lg font-bold">Rudoria</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center px-4 py-2 rounded-md text-base font-medium hover:bg-indigo-700 hover:bg-opacity-75 cursor-pointer
                ${activeItem === item.name ? 'bg-indigo-700' : 'text-white'}
              `}
            onClick={() => handleItemClick(item.name)}
          >
            <item.icon className="h-6 w-6 mr-2" />
            {item.name}
          </Link>
        ))}
      </nav>

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
}
