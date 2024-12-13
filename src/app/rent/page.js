'use client';
import Image from "next/image";
import { useState } from "react";

export default function RentPage() {
  return (
    <main className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <h1 className="text-3xl font-bold text-secondary mb-4">Find Your Perfect Rental</h1>
        <p className="text-gray-600 mb-8">Fill out the below form and we will try to find you the perfect rental to fit your needs</p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-secondary mb-2">
              Enter the amount of people that you would be living with
            </label>
            <input 
              type="number" 
              id="people" 
              name="people" 
              placeholder="0"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
              min="0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary mb-2">
              Enter the amount that you are willing to spend monthly
            </label>
            <input 
              type="number" 
              id="budget" 
              name="budget" 
              placeholder="0"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
              min="0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary mb-2">
              Enter the size of the home you wish to rent (sq ft)
            </label>
            <input 
              type="number" 
              id="size" 
              name="size" 
              placeholder="0"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
              min="0"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-2 px-4 bg-primary text-secondary rounded-lg hover:bg-accent transition-colors"
          >
            Find Your Rental
          </button>
        </form>
      </div>
    </main>
  );
}