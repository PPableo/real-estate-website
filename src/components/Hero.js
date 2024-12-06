import Image from "next/image";
import {
  UserGroupIcon,
  BuildingOffice2Icon
} from "@heroicons/react/24/outline"


export default function Hero() {
  return (
    <div className="hero min-h-100 bg-[#F7F7FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Buy, rent, or sell your property easily
            </h1>
            <p className="text-lg text-gray-600">
              A great platform to buy, sell, or even rent your properties
              without any commissions.
            </p>

            {/* Action Buttons */}
            <div className="inline-flex p-1 bg-white rounded-lg shadow-sm">
              <button className="px-8 py-2 bg-primary text-white rounded-md">
                Rent
              </button>
              <button className="px-8 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
                Buy
              </button>
              <button className="px-8 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
                Sell
              </button>
            </div>

            {/* Search Form */}
            <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    defaultValue="Barcelona, Spain"
                    className="w-full p-2 border border-gray-200 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">
                    When
                  </label>
                  <input
                    type="text"
                    placeholder="Select Move-in Date"
                    className="w-full p-2 border border-gray-200 rounded-md"
                  />
                </div>
              </div>
              <button className="w-full bg-primary text-white py-3 rounded-md hover:bg-[#5B54C0]">
                Browse Properties
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <div className="bg-[#F7F7FD] p-3 rounded-full">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <UserGroupIcon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-primary text-xl font-bold">
                    50k+ renters
                  </p>
                  <p className="text-gray-600">believe in our service</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <BuildingOffice2Icon className="w-5 h-5 text-white" />
                  </div>
                <div>
                  <p className="text-primary text-xl font-bold">
                    10k+ properties
                  </p>
                  <p className="text-gray-600">ready for occupancy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="relative h-[600px] w-full overflow-hidden">
              <Image
                src="/heroBG.png"
                alt="House"
                fill
                className="object-cover square-lg"
                priority
              />
            </div>
            {/* Testimonial Card */}
            <div className="absolute top-5 left-5 bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-center mb-4">
                <Image
                  src="/personPic.jpeg"
                  alt="Manuel Villa"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-medium">Manuel Villa</h3>
                  <p className="text-sm text-gray-500">Renter</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
              &quot;I loved how smooth the move was, and finally got the house we
                wanted.&quot;
              </p>
              <div className="flex justify-between text-sm">
                <div>
                  <p className="font-bold">$1,500</p>
                  <p className="text-gray-500">Saved up to</p>
                </div>
                <div>
                  <p className="font-bold">~24 hrs</p>
                  <p className="text-gray-500">Process time</p>
                </div>
              </div>
            </div>
            {/* Rating Card */}
            <div className="absolute bottom-8 right-8 bg-[#0B090A] text-white p-4 rounded-lg">
              <div className="flex items-center space-x-1">
                <span className="text-lg font-bold">Excellent</span>
                <div className="flex text-yellow-400">★★★★★</div>
              </div>
              <p className="text-sm text-gray-400">From 3,264 reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
