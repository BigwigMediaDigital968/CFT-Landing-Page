"use client";

import { useEffect, useState } from "react";
import StatsCard from "../components/StatsCard";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function Dashboard() {
  const [stats, setStats] = useState({
    total: 0,
    demoShared: 0,
    inProcess: 0,
    idCreated: 0,
  });

  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      const res = await fetch(`${API}/api/leads`);
      const data = await res.json();

      const leads = data.leads || [];

      const total = leads.length;

      const demoShared = leads.filter(
        (l: any) => l.accountStatus === "Demo Shared",
      ).length;

      const idCreated = leads.filter(
        (l: any) => l.accountStatus === "ID Created",
      ).length;

      const inProcess = leads.filter(
        (l: any) => l.accountStatus === "In Process",
      ).length;

      setStats({
        total,
        demoShared,
        inProcess,
        idCreated,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-28 rounded-xl animate-pulse bg-[var(--cft-bg-surface)]"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid md:grid-cols-4 gap-6">
        <StatsCard title="Total Leads" value={stats.total} />

        <StatsCard title="In Process" value={stats.inProcess} />

        <StatsCard title="Demo Shared" value={stats.demoShared} />

        <StatsCard title="ID Created" value={stats.idCreated} />
      </div>
    </div>
  );
}
