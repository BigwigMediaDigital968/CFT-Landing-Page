"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "./components/Sidebar";

export default function AdminLayout({ children }: any) {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");

    if (!auth) {
      router.push("/login-admin");
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-[var(--cft-bg-dark)] text-white">
      <Sidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
