// src/app/(auth)/register/page.js
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        window.location.href = '/login';
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-secondary">Create Account</h1>
        <p className="text-gray-600 mt-2">Join Golden Hour Homes today</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-secondary">Full Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary">Confirm Password</label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary text-secondary rounded-lg hover:bg-accent transition-colors"
        >
          Create Account
        </button>
      </form>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link href="/login" className="text-primary hover:text-accent">
          Sign in here
        </Link>
      </p>
    </div>
  );
}