// src/app/buy/page.js
'use client';
import { useState } from "react";
import Image from "next/image";

const properties = [
  {
    id: 1,
    image: '/house1.jpeg',
    price: 2095,
    name: 'Palm Harbor',
    address: '2699 Green Valley, Highland Lake, FL',
    beds: 3,
    baths: 2,
    size: '5x7',
    isPopular: true,
    type: 'rent',
    monthlyPrice: 2095,
    salePrice: null
  },
  {
    id: 2,
    image: '/house2.jpeg',
    price: 450000,
    name: 'Beverly Springfield',
    address: '2821 Lake Sevilla, Palm Harbor, TX',
    beds: 4,
    baths: 2,
    size: '6x7.5',
    isPopular: true,
    type: 'buy',
    monthlyPrice: null,
    salePrice: 450000
  },
  {
    id: 3,
    image: '/house3.jpeg',
    price: 675000,
    name: 'Faulkner Ave',
    address: '909 Woodland St, Michigan, IN',
    beds: 4,
    baths: 3,
    size: '8x10',
    isPopular: true,
    type: 'buy',
    monthlyPrice: null,
    salePrice: 675000
  }
];

export default function BuyPage() {
  const [formData, setFormData] = useState({
    people: '',
    budget: '',
    size: ''
  });
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = properties.filter(property => {
      const propertySize = parseInt(property.size.split('x')[0]) * parseInt(property.size.split('x')[1]);
      return (
        property.type === 'buy' &&
        property.salePrice <= parseInt(formData.budget) &&
        property.beds >= parseInt(formData.people) &&
        propertySize >= parseInt(formData.size)
      );
    });
    setFilteredProperties(filtered);
    setShowResults(true);
  };

  return (
    <main className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
        <h1 className="text-3xl font-bold text-secondary mb-4">Find Your Perfect Home</h1>
        <p className="text-gray-600 mb-8">Fill out the form below and we will find the perfect home to fit your needs</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-secondary mb-2">
              Number of Occupants
            </label>
            <input 
              type="number" 
              value={formData.people}
              onChange={(e) => setFormData({...formData, people: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
              min="1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary mb-2">
              Maximum Budget ($)
            </label>
            <input 
              type="number" 
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
              min="0"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary mb-2">
              Minimum Size (sq ft)
            </label>
            <input 
              type="number" 
              value={formData.size}
              onChange={(e) => setFormData({...formData, size: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
              min="0"
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full py-2 px-4 bg-primary text-secondary rounded-lg hover:bg-accent transition-colors"
          >
            Find Properties
          </button>
        </form>
      </div>

      {showResults && (
        <div>
          <h2 className="text-2xl font-bold text-secondary mb-6">Available Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <div key={property.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <div className="relative h-[200px]">
                    <Image
                      src={property.image}
                      alt={property.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-primary text-xl font-bold">${property.salePrice.toLocaleString()}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{property.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">{property.address}</p>
                    <div className="flex justify-between text-gray-500 text-sm">
                      <span>{property.beds} Beds</span>
                      <span>{property.baths} Bathrooms</span>
                      <span>{property.size} m²</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-3 text-center text-gray-500">No properties found matching your criteria.</p>
            )}
          </div>
        </div>
      )}
    </main>
  );
}