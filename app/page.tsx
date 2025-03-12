import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import Features from '@/components/ui/landing/features';

export default function Page() {
  return (
    <main>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/" className="flex items-center">
                <div className="relative w-8 h-8 grid grid-cols-2 grid-rows-2 gap-0.5 mr-2">
                  <div className="bg-indigo-600 rounded-sm"></div>
                  <div className="bg-pink-800 rounded-sm"></div>
                  <div className="bg-pink-500 rounded-sm"></div>
                  <div className="bg-indigo-600 rounded-sm"></div>
                </div>
                <span className="text-2xl font-bold leading-7 bg-gradient-to-r from-indigo-900 to-pink-500 text-transparent bg-clip-text">
                  Rudoria
                </span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-10">
              <Link
                href="/features"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                About
              </Link>
            </nav>
            <div className="flex items-center justify-end md:flex-1 lg:w-0">
              <SignedOut>
                <SignInButton>
                  <button className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                    Sign in
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </header>
      <div className="container pt-16 grid items-center text-center sm:text-left gap-4 px-4 md:px-6 lg:gap-10 mx-auto mt-10 max-w-7xl sm:px-3 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-wrap sm:flex-nowrap items-center space-y-3">
          <div className="sm:flex-1 flex flex-col gap-4 w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
              Read Smarter, Track Better: Achieve Your Reading Goals
            </h1>
            <p className="mx-auto text-base leading-7 text-gray-600 max-w-[650px]">
              Set personalized goals, effortlessly track your reading progress,
              and connect with a community of book lovers—all in one intuitive
              platform to help you achieve your literary aspirations.
            </p>

            <div className="flex flex-col justify-center sm:justify-start gap-2 min-[400px]:flex-row">
              <SignedIn>
                <Link
                  className="inline-flex h-10 items-center text-white justify-center rounded-md border bg-indigo-600 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-indigo-500 cursor-pointer focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50"
                  href="/dashboard"
                >
                  Dashboard
                </Link>
              </SignedIn>
              <SignedOut>
                <SignInButton>
                  <button className="inline-flex h-10 items-center text-white justify-center rounded-md border bg-indigo-600  px-8 text-sm font-medium shadow-sm transition-colors hover:bg-indigo-600 cursor-pointer focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50">
                    Get started
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
          <div className="flex sm:flex-1 w-full">
            <img src="/booklover1.png" alt="storyset of a woman reading" />
          </div>
        </div>

        {/* Features Section */}
        <Features />
      </div>
    </main>
  );
}
