import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/20/solid';

const links = [
  { href: '#', title: 'Home' },
  { href: '#', title: 'About' },
  { href: '#', title: 'Services' },
  { href: '#', title: 'Contact' },
];

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto flex max-w-7xl items-center justify-between p-4 md:px-6">
          {/* Mobile Menu Button (Hidden on larger screens) */}
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Nav Links (Hidden on smaller screens) */}
          <nav className="hidden space-x-4 text-sm font-medium md:flex">
            {links.map((link) => (
              <Link
                className="text-gray-700 hover:text-gray-900"
                href={link.href}
                key={link.title}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Login Button */}
          <div className="flex items-center space-x-4">
            <Link
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              href="#"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className=" bg-white ">
          <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
      </main>
    </>
  );
}
