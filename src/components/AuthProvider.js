"use client";
import { SessionProvider } from "next-auth/react";

export function AuthProvider({ children }) {
  return <SessionProvider refetchInterval={0}>{children}</SessionProvider>;
}
