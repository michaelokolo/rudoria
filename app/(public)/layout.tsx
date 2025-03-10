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
      {/* Main Content */}
      <main className="container mx-auto mt-10 max-w-7xl px-4 sm:px-3 lg:px-8">
        <div className=" bg-white ">
          <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
      </main>
    </>
  );
}
