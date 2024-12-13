'use client';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';

export default function SavedPropertiesPage() {
  const [properties, setProperties] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/properties');
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching saved properties:', error);
      }
    };

    if (session) {
      fetchProperties();
    }
  }, [session]);

  return (
    (session.user.agent ? 
      <div className="space-y-6 mt-20">
      <h1 className="text-3xl font-bold text-secondary">Listings:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((saved) => (
          <div key={saved._id} className="bg-white rounded-xl shadow-sm">
            {/* Property card content */}
          </div>
        ))}
      </div>
    </div>
    : 
    <div className="space-y-6 mt-20">
      <h1>404 | This page could not be found</h1>
    </div>)
  );
}
