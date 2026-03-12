"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e: any) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin123") {
      // Save login token
      localStorage.setItem("adminAuth", "true");

      router.push("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");

    if (auth) {
      router.push("/admin/dashboard");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--cft-bg-dark)]">
      <form
        onSubmit={login}
        className="bg-[var(--cft-bg-card)] border border-[var(--cft-border)] p-8 rounded-xl w-[350px] space-y-5"
      >
        <h2 className="text-2xl font-bold text-center">
          Close Friends Traders
        </h2>
        <h4 className="font-bold text-center">Admin Login</h4>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-md bg-[var(--cft-bg-surface)] border border-[var(--cft-border)]"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-md bg-[var(--cft-bg-surface)] border border-[var(--cft-border)]"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-full bg-[var(--cft-primary)] hover:bg-[var(--cft-primary-hover)]"
        >
          Login
        </button>
      </form>
    </div>
  );
}
