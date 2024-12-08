'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function DashboardLayout({ children }) {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>;
  }

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="flex min-h-screen bg-neutral">
      <aside className="w-64 bg-secondary text-white p-6">
        <nav className="space-y-4">
          <a href="/dashboard" className="block hover:text-primary">Dashboard</a>
          <a href="/dashboard/saved" className="block hover:text-primary">Saved Properties</a>
          <a href="/dashboard/messages" className="block hover:text-primary">Messages</a>
          <a href="/dashboard/appointments" className="block hover:text-primary">Appointments</a>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}