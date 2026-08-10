import { DollarSign, Target, Trophy, Users, CheckSquare, Truck, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

const kpis = [
  { label: "Total Inspections", value: "7", trend: "On record", icon: Trophy },
  { label: "Open Deficiencies", value: "2", trend: "Needs correction", icon: Target },
  { label: "Right-On Score", value: "100%", trend: "Across vendors", icon: Users },
  { label: "Monthly Earning", value: "$900", trend: "+3.6% vs yesterday", icon: DollarSign },
];


const mainModules = [
  {
    link: "/inspections",
    title: "Right-On Inspections",
    desc: "Phase checklists with pass, deficiency, N/A, photos, and locked reports.",
    icon: CheckSquare,
  },
  {
    link: "/vendor-performance",
    title: "Vendor Performance",
    desc: "Track installed correctly, deficiencies, close time, and right-on scores by vendor.",
    icon: Truck,
  },
  {
    link: "/open-deficiencies",
    title: "Open Deficiencies",
    desc: "Submit corrections, verify, close, or send back for rework.",
    icon: AlertTriangle,
  },
];


export default function ProjectManagerDashboard() {
  return (
    <div className="min-h-screen bg-[#F7F4EF] p-4 sm:p-6 lg:p-8 text-[#111111]">
      <div className="space-y-6">
        {/* Top Header Tracker Line */}
        <header>
          <h1 className="font-bebas text-xs font-medium uppercase tracking-wider text-[#00000099] sm:text-sm">
            Open forms, overdue deficiencies, recent inspections, and project quality snapshot.
          </h1>
        </header>

        {/* KPIs Matrix Grid */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
              <div key={idx} className="rounded bg-white p-6 shadow-sm border border-[#0000000a]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00000080]">
                    {kpi.label}
                  </span>
                  <Icon className="h-4 w-4 text-[#888888]" />
                </div>
                <div className="text-4xl font-medium tracking-tight text-[#111111]">
                  {kpi.value}
                </div>
                <div className="mt-1 text-[10px] font-medium uppercase tracking-wider text-[#00000080]">
                  {kpi.trend}
                </div>
              </div>
            );
          })}
        </section>

        {/* Main Modules Grid */}
        <section className="space-y-4">
          <h2 className="font-bebas text-xl font-normal leading-7 uppercase tracking-wider text-[#141414]">
            Main Modules
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mainModules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div key={idx} className="flex flex-col justify-between rounded bg-white p-6 min-h-55 shadow-sm border border-[#0000000a]">
                  <div>
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-[#1A1A1A] text-[#F2C94C]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bebas text-[18px] font-normal uppercase leading-7 tracking-wide text-[#141414] mb-2">
                      {mod.title}
                    </h3>
                    <p className="font-bebas text-base uppercase leading-5  text-[#00000099]">
                      {mod.desc}
                    </p>
                  </div>
                  <Link href={mod.link} className="font-bebas mt-4 inline-flex items-center gap-1.5 text-[14px] font-bold uppercase tracking-wider text-[#B8890F] hover:underline">
                    Open <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* Active Deficiencies Feed Panel */}
        <section className="rounded bg-white p-6 shadow-sm border border-[#0000000a] space-y-6">
          <div className="flex items-center justify-between border-b border-[#F0F0F0] pb-4">
            <h2 className="font-bebas text-xl font-medium leading-7 uppercase tracking-wider text-[#141414]">
              Open Deficiencies
            </h2>
            <span className="rounded-sm bg-[#B91C1C] px-2.5 py-0.5 text-xs font-bold text-white">
              1
            </span>
          </div>

          <div className="flex flex-col justify-between gap-4 border-b border-[#F0F0F0] pb-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-bebas text-base font-medium leading-6 uppercase tracking-wide text-[#141414] mb-1">
                Vapor Barrier and Slab Prep Documented
              </h3>
              <p className="font-bebas text-[12px] font-medium leading-4 uppercase tracking-wider text-[#00000080]">
                PB-26-0002-FOUNDATI-002-001 · 7201 Wesley · Foundation
              </p>
            </div>
            <button className="w-full rounded-sm bg-[#F5F1E8] border border-[#00000026] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#EB5757] transition hover:bg-[#EB5757]/5 sm:w-auto">
              Open
            </button>
          </div>

          {/* Bottom Action Elements */}
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <button className="w-full rounded-sm bg-[#F5F1E8] border border-[#00000026] px-5 py-2.5 transition hover:bg-[#EAEAEA] sm:w-auto font-bebas text-base font-medium leading-6 uppercase tracking-wide text-[#141414]">
              Open Deficiencies
            </button>
            <button className="w-full rounded-sm bg-[#F5F1E8] border border-[#00000026] px-5 py-2.5 transition hover:bg-[#EAEAEA] sm:w-auto font-bebas text-base font-medium leading-6 uppercase tracking-wide text-[#141414]">
              Inspection History
            </button>
            <button className="w-full rounded-sm bg-[#F5F1E8] border border-[#00000026] px-5 py-2.5 transition hover:bg-[#EAEAEA] sm:w-auto font-bebas text-base font-medium leading-6 uppercase tracking-wide text-[#141414]">
              Refresh Reports
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
