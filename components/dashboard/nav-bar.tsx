import { BellIcon } from '@heroicons/react/24/outline';
import { UserButton, useUser } from '@clerk/nextjs';

export function NavBar() {
  const { user } = useUser();

  return (
    <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200">
      {/* Search Input */}
      <div className="flex items-center w-full max-w-md">
        <input
          type="search"
          placeholder="Search"
          className="w-full px-4 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        {/* Notification Icon */}
        <BellIcon className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer" />

        {/* User Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <UserButton />
          <p className="font-medium text-gray-900">
            {user?.firstName} {user?.lastName}
          </p>
        </div>
      </div>
    </header>
  );
}
