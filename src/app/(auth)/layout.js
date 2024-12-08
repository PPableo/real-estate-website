// src/app/(auth)/layout.js
export default function AuthLayout({ children }) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral">
        <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-lg">
          {children}
        </div>
      </div>
    );
  }