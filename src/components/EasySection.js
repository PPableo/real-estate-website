import { 
    VideoCameraIcon, // For virtual tour
    HomeIcon, // For best deal
    CheckBadgeIcon // For satisfaction guarantee
  } from '@heroicons/react/24/solid';

export default function EasySection() {
    const features = [
        {
          icon: <VideoCameraIcon className="w-5 h-5 text-white" />,
          title: "Virtual home tour",
          description: "You can communicate directly with landlords and we provide you with virtual tour before you buy or rent the property."
        },
        {
          icon: <HomeIcon className="w-5 h-5 text-white" />,
          title: "Find the best deal",
          description: "Browse thousands of properties, save your favorites and set up search alerts so you don't miss the best home deal!"
        },
        {
          icon: <CheckBadgeIcon className="w-5 h-5 text-white" />,
          title: "Guaranteed satisfaction",
          description: "Find exactly what you need with our robust system..."
        }
      ];

  const stats = [
    { value: "7.4%", label: "Property Return Rate" },
    { value: "3,856", label: "Property in Sell & Rent" },
    { value: "2,540", label: "Daily Completed Transactions" }
  ];

  return (
    <section className="easy bg-[#1E1B4B] py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-4xl font-bold mb-4">
            We make it easy for{' '}
            <span className="text-[#7065F0]">tenants</span> and{' '}
            <span className="text-[#7065F0]">landlords</span>.
          </h2>
          <p className="text-gray-300">
            Whether it&apos;s selling your current home, getting financing, or buying a new home, 
            we make it easy and efficient. The best part? You&apos;ll save a bunch of money 
            and time with our services.
          </p>
        </div>

        {/* Scrollable Features */}
        <div className="relative">
        <div className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide">
        {features.map((feature, index) => (
          <div key={index} className="flex-none w-[400px] bg-[#2A2750] p-8 rounded-xl hover:bg-[#312E62] transition-all">
            <div className="bg-[#1E1B4B] w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <div className="bg-[#7065F0] w-8 h-8 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-8 mt-16 border-t border-gray-700 pt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}