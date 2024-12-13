import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheckIcon, // For insurance
  CurrencyDollarIcon, // For best price
  CalculatorIcon, // For commission
  HomeModernIcon, // For overall control
} from "@heroicons/react/24/solid";

// components/AboutSection.js
export default function AboutSection() {
  return (
    <section className="about py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Card */}
        <div className="bg-[#F8F8FF] rounded-3xl p-12 mb-16 relative">
          <div className="max-w-md">
            <h2 className="text-secondary text-4xl font-bold leading-tight mb-4">
              The new way to find
              <br />
              your new home
            </h2>
            <p className="text-gray-600 mb-8">
              Find your dream place to live in with
              <br />
              more than 10k+ properties listed.
            </p>
            <Link href="/#properties" scroll={false}>
              <button className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-primary">
                Browse Properties
              </button>
            </Link>
          </div>
          <div className="absolute bottom-0 right-0 w-1/2 h-full flex items-end">
            <Image
              src="/house-illustration.png"
              alt="House Illustration"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Property Insurance */}
          <div className="space-y-4">
            <div className="w-16 h-16 bg-[#F7F7FD] rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <ShieldCheckIcon className="w-5 h-5 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-secondary">
              Property Insurance
            </h3>
            <p className="text-gray-600">
              We offer our customer property protection of liability coverage
              and insurance for their better life.
            </p>
          </div>

          {/* Best Price */}
          <div className="space-y-4">
            <div className="w-16 h-16 bg-[#F7F7FD] rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <CurrencyDollarIcon className="w-5 h-5 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-secondary">Best Price</h3>
            <p className="text-gray-600">
              Not sure what you should be charging for your property? No need to
              worry, let us do the numbers for you.
            </p>
          </div>

          {/* Lowest Commission */}
          <div className="space-y-4">
            <div className="w-16 h-16 bg-[#F7F7FD] rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <CalculatorIcon className="w-5 h-5 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-secondary">
              Lowest Commission
            </h3>
            <p className="text-gray-600">
              You no longer have to negotiate commissions and haggle with other
              agents it only cost 2%!
            </p>
          </div>

          {/* Overall Control */}
          <div className="space-y-4">
            <div className="w-16 h-16 bg-[#F7F7FD] rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <HomeModernIcon className="w-5 h-5 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-secondary">
              Overall Control
            </h3>
            <p className="text-gray-600">
              Get a virtual tour, and schedule visits before you rent or buy any
              properties. You get overall control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
