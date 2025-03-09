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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-900">
            Boost Your Reading
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Track, Achieve, and Connect
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Unlock the power of intentional reading. Set goals, track progress,
            and connect with fellow book lovers on our intuitive platform.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#edd9f1] text-purple-800">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
