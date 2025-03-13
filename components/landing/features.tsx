import {
  BookOpenIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  DeviceTabletIcon,
} from '@heroicons/react/24/outline'; // Or .solid, if preferred

const features = [
  {
    name: 'Set and Achieve Reading Goals',
    description:
      'Define your reading goals based on time, pages, or books. Our smart tracking system keeps you motivated and on track.',
    icon: ChartBarIcon, // A target icon with a book in the center is difficult to represent with existing heroicons, so ChartBarIcon is a close alternative.  You'd replace this with a custom icon if you had one.
  },
  {
    name: 'Track Your Reading Journey',
    description:
      'Effortlessly log your reading activity, see your progress over time, and earn achievements as you reach new heights.',
    icon: BookOpenIcon, // Progress chart can be represented with BookOpenIcon or consider a simple line graph icon
  },
  {
    name: 'Discover New Books and Connect with Readers',
    description:
      'Explore personalized recommendations, join book clubs, and share your thoughts with a vibrant community of fellow bookworms.',
    icon: MagnifyingGlassIcon, // Book icon with speech bubbles can be represented with a magnifying glass.
  },
  {
    name: 'Works with Physical and Digital Books',
    description:
      'Easily log both physical and digital books, track your progress, and stay motivated on your reading journey.',
    icon: DeviceTabletIcon, // An icon showing a physical book next to a digital device represented by a DeviceTabletIcon.
  },
];

export default function FeaturesSection() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-800">
            Boost Your Reading
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Track, Achieve, and Connect
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Unlock the power of intentional reading. Set goals, track progress,
            and connect with fellow book lovers on our intuitive platform.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="grid grid-cols-1 sm:grid-cols-[48px_1fr] gap-4"
                >
                  <div className="flex items-center justify-center sm:items-start sm:justify-start">
                    <div className="flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-lg text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600 ">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
