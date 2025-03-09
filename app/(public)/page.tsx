import Link from 'next/link';
import Features from '@/components/ui/landing/features';

export default function Page() {
  return (
    <div className="container grid items-center text-center sm:text-left gap-4 px-4 md:px-6 lg:gap-10">
      {/* Hero Section */}
      <div className="flex flex-wrap sm:flex-nowrap items-center space-y-3">
        <div className="sm:flex-1 flex flex-col gap-4 w-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
            Read Smarter, Track Better: Achieve Your Reading Goals
          </h1>
          <p className="mx-auto text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl max-w-[650px] text-gray-700 leading-relaxed">
            Set personalized goals, effortlessly track your reading progress,
            and connect with a community of book lovers—all in one intuitive
            platform to help you achieve your literary aspirations.
          </p>

          <div className="flex flex-col justify-center sm:justify-start gap-2 min-[400px]:flex-row">
            <Link
              className="inline-flex h-10 items-center text-purple-900 justify-center rounded-md border bg-[#edd9f1] border-gray-400 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#d8c3e0] hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50"
              href="/signup"
            >
              Sign Up for Free
            </Link>
          </div>
        </div>
        <div className="flex sm:flex-1 w-full">
          <img src="/booklover.gif" alt="storyset of a woman reading" />
        </div>
      </div>
      {/* Features Section */}
      <Features />
    </div>
  );
}
