'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default function DashboardPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    },
  });

  if (status === "loading") {
    return <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl mt-20 font-bold text-secondary">My Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-secondary mb-4">Saved Properties</h2>
          <p className="text-gray-600 mb-4">View and manage your favorite listings</p>
          <Link href="/dashboard/saved" className="text-primary hover:text-accent">
            View Saved →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-secondary mb-4">Messages</h2>
          <p className="text-gray-600 mb-4">Check your conversations with agents</p>
          <Link href="/dashboard/messages" className="text-primary hover:text-accent">
            View Messages →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-secondary mb-4">Appointments</h2>
          <p className="text-gray-600 mb-4">Manage your property viewings</p>
          <Link href="/dashboard/appointments" className="text-primary hover:text-accent">
            View Schedule →
          </Link>
        </div>
      </div>
    </div>
  );
}