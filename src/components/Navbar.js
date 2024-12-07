"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Rent", href: "/rent", current: true },
    { name: "Buy", href: "/buy", current: false },
    { name: "Sell", href: "/sell", current: false },
    { name: "About", href: "/about", current: false },
    { name: "Contact", href: "/contact", current: false },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="py-2 flex items-center">
            <Image
              src="/logo.svg"
              alt="Golden Hour Homes Logo"
              width={32}
              height={32}
            />
            <span className="text-primary text-2xl font-bold">
              Golden Hour Homes
            </span>
          </Link>

          <div className="hidden md:flex md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${
                  link.current
                    ? "text-primary"
                    : "text-gray-500 hover:text-gray-900"
                } px-3 py-2 text-sm font-medium`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-secondary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
