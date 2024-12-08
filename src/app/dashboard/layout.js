'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default function DashboardLayout({ children }) {
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
    <div className="flex min-h-screen bg-neutral">
      <aside className="w-64 bg-secondary text-white p-6">
        <div className="mt-20">
          <h2 className="text-lg font-semibold">Welcome, {session.user.name}</h2>
        </div>
        <nav className="space-y-4 mt-5">
          <Link href="/dashboard" className="block py-2 px-4 hover:bg-primary hover:text-secondary rounded-lg">
            Dashboard
          </Link>
          <Link href="/dashboard/saved" className="block py-2 px-4 hover:bg-primary hover:text-secondary rounded-lg">
            Saved Properties
          </Link>
          <Link href="/dashboard/messages" className="block py-2 px-4 hover:bg-primary hover:text-secondary rounded-lg">
            Messages
          </Link>
          <Link href="/dashboard/appointments" className="block py-2 px-4 hover:bg-primary hover:text-secondary rounded-lg">
            Appointments
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
