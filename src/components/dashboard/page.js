'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function ProtectedPage() {
    const { data: session, status } = useSession({
      required: true,
      onUnauthenticated() {
        redirect('/login');
      },
    });
  
    if (status === "loading") {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        Protected Content for {session.user.email}
      </div>
    );
  }
  

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-secondary">Welcome, {session?.user?.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-secondary mb-2">Saved Properties</h2>
          <p className="text-gray-600">View and manage your saved properties</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-secondary mb-2">Messages</h2>
          <p className="text-gray-600">Check your messages and inquiries</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-secondary mb-2">Appointments</h2>
          <p className="text-gray-600">Manage your property viewings</p>
        </div>
      </div>
    </div>
  );
}