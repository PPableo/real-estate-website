// components/PropertySection.js
import Image from 'next/image';

const properties = [
  {
    id: 1,
    image: '/house1.jpeg',
    price: 2095,
    name: 'Palm Harbor',
    address: '2699 Green Valley, Highland Lake, FL',
    beds: 3,
    baths: 2,
    size: '5x7 m²',
    isPopular: true
  },
  {
    id: 2,
    image: '/house2.jpeg',
    price: 2700,
    name: 'Beverly Springfield',
    address: '2821 Lake Sevilla, Palm Harbor, TX',
    beds: 4,
    baths: 2,
    size: '6x7.5 m²',
    isPopular: true
  },
  {
    id: 3,
    image: '/house3.jpeg',
    price: 4550,
    name: 'Faulkner Ave',
    address: '909 Woodland St, Michigan, IN',
    beds: 4,
    baths: 3,
    size: '8x10 m²',
    isPopular: true
  },
  {
    id: 4,
    image: '/house4.jpeg',
    price: 2400,
    name: 'St. Crystal',
    address: '210 US Highway, Highland Lake, FL',
    beds: 4,
    baths: 2,
    size: '6x8 m²'
  },
  {
    id: 5,
    image: '/house5.jpeg',
    price: 1500,
    name: 'Cove Red',
    address: '243 Curlew Road, Palm Harbor, TX',
    beds: 2,
    baths: 1,
    size: '5x7.5 m²'
  },
  {
    id: 6,
    image: '/house6.jpeg',
    price: 1600,
    name: 'Tarpon Bay',
    address: '103 Lake Shores, Michigan, IN',
    beds: 3,
    baths: 1,
    size: '5x7 m²'
  }
];

export default function PropertySection() {
  return (
    <section className="property py-24 bg-[#F7F7FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#1E1B4B] text-3xl font-bold text-center mb-2">Based on your location</h2>
        <p className="text-gray-600 text-center mb-12">Some of our picked properties near you location.</p>

        {/* Filter and Search */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex gap-4">
            <button className="bg-primary text-white px-6 py-2.5 rounded-lg flex items-center gap-2 transition-all hover:bg-[#5B54C0]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
              Rent
            </button>
            <button className="text-gray-600 px-6 py-2.5 rounded-lg flex items-center gap-2 transition-all hover:bg-white hover:shadow-sm">
              Buy
            </button>
            <button className="text-gray-600 px-6 py-2.5 rounded-lg flex items-center gap-2 transition-all hover:bg-white hover:shadow-sm">
              Sell
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-[auto] pl-12 pr-4 py-2.5 rounded-lg border-0 bg-white focus:ring-2 focus:ring-primary transition-all"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-[240px]">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {property.isPopular && (
                  <span className="absolute top-4 left-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    POPULAR
                  </span>
                )}
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full transition-all hover:bg-primary hover:text-white group">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary text-2xl font-bold">${property.price}</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <h3 className="text-xl font-bold text-[#1E1B4B] mb-2">{property.name}</h3>
                <p className="text-gray-500 mb-6">{property.address}</p>
                <div className="flex justify-between text-gray-500">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {property.beds} Beds
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    {property.baths} Bathrooms
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    {property.size}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse More Button */}
        <div className="text-center mt-12">
          <button className="bg-secondary text-white px-8 py-3 rounded-lg transition-all hover:bg-primary">
            Browse more properties
          </button>
        </div>
      </div>
    </section>
  );
}