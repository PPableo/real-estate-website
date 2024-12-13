"use client";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { HeartIcon } from "@heroicons/react/24/outline";

const properties = [
  {
    id: 1,
    image: "/house1.jpeg",
    price: 2095,
    name: "Palm Harbor",
    address: "2699 Green Valley, Highland Lake, FL",
    beds: 3,
    baths: 2,
    size: "5x7 m²",
    isPopular: true,
  },
  {
    id: 2,
    image: "/house2.jpeg",
    price: 2700,
    name: "Beverly Springfield",
    address: "2821 Lake Sevilla, Palm Harbor, TX",
    beds: 4,
    baths: 2,
    size: "6x7.5 m²",
    isPopular: true,
  },
  {
    id: 3,
    image: "/house3.jpeg",
    price: 4550,
    name: "Faulkner Ave",
    address: "909 Woodland St, Michigan, IN",
    beds: 4,
    baths: 3,
    size: "8x10 m²",
    isPopular: true,
  },
  {
    id: 4,
    image: "/house4.jpeg",
    price: 2400,
    name: "St. Crystal",
    address: "210 US Highway, Highland Lake, FL",
    beds: 4,
    baths: 2,
    size: "6x8 m²",
  },
  {
    id: 5,
    image: "/house5.jpeg",
    price: 1500,
    name: "Cove Red",
    address: "243 Curlew Road, Palm Harbor, TX",
    beds: 2,
    baths: 1,
    size: "5x7.5 m²",
  },
  {
    id: 6,
    image: "/house6.jpeg",
    price: 1600,
    name: "Tarpon Bay",
    address: "103 Lake Shores, Michigan, IN",
    beds: 3,
    baths: 1,
    size: "5x7 m²",
  },
];

export default function PropertySection() {
  const [activeFilter, setActiveFilter] = useState("Rent");
  const [searchQuery, setSearchQuery] = useState("");
  const { data: session } = useSession();

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const handleSaveProperty = async (propertyId) => {
    if (!session) return;
    try {
      const response = await fetch("/api/saved-properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ propertyId }),
      });
      if (response.ok) {
        // Handle successful save
      }
    } catch (error) {
      console.error("Error saving property:", error);
    }
  };

  return (
    <section id="properties" className="py-24 bg-white id">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-2">
          Based on your location
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Some of our picked properties near you location.
        </p>

        {/* Filter and Search Bar */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-2">
            {["Rent", "Buy", "Sell"].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-lg ${
                  activeFilter === filter
                    ? "bg-primary text-secondary"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by location or property name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg w-full max-w-[300px] md:w-[300px] focus:ring-2 focus:ring-primary"
            />

            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-[200px]">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover"
                />
                {property.isPopular && (
                  <span className="absolute top-4 left-4 bg-primary text-secondary px-3 py-1 rounded-full text-sm">
                    POPULAR
                  </span>
                )}
                <button
                  onClick={() => handleSaveProperty(property.id)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-primary hover:text-secondary transition-colors"
                >
                  <HeartIcon className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-primary text-xl font-bold">
                    ${property.price}
                  </span>
                  <span className="text-gray-500">/month</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{property.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{property.address}</p>
                <div className="flex justify-between text-gray-500 text-sm">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Bathrooms</span>
                  <span>{property.size}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse More Button */}
        <div className="text-center mt-12">
          <button className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-accent">
            Browse more properties
          </button>
        </div>
      </div>
    </section>
  );
}
