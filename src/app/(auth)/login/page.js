// src/app/(auth)/login/page.js
'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: true,
        callbackUrl: '/dashboard'
      });
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-secondary">Welcome Back</h1>
        <p className="text-gray-600 mt-2">Sign in to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
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

        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary text-secondary rounded-lg hover:bg-accent transition-colors"
        >
          Sign In
        </button>
      </form>

      <p className="text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <Link href="/register" className="text-primary hover:text-accent">
          Register here
        </Link>
      </p>
    </div>
  );
}