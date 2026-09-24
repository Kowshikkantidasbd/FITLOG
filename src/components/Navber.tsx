"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { usePlan } from '@/context/PlanContext';


const Logo = () => (
  <span className="text-xl font-bold text-primary">FitLog</span>
);

const Navber = () => {

  const { plan, saved, setTab } = usePlan();
  const [current, setPending] = useState<string | null>(null);

  const link = (href: string, label: string, active: boolean, onclick?: () => void) => (
    <Link 
    href={href}
    
    onClick={onclick}
    
    className={`btn btn-sm rounded-full ${active ? 'btn-primary': 'btn-ghost hover:text-primary'}`}>

      {label}
    </Link>
  );
  return (
    <header className="relative z-30 border-b border-base-300 bg-base-100">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3">
        <Link href="/" aria-label="Fitlog home"><Logo /></Link>

        <div className="flex gap-1">

          {link ("/", "Workout", current ==="/my-plan", () => { setTab("plan"); setPending("/my-plan");})}
          {link("/my-plan", "My Plan", current === "/my-plan", () => {setTab("plan"); setPending("/my-plan");})}


        </div>

        <div className="flex-2">
          <Link href="/my-plan" onClick={() => { setTab ("plan"); setPending("/my-plan");}} className="inline-flex h-8 cursor-pointer items-center gap-1 rounded-full bg-primary px-3 text-xs font-semibold text-primary-content transition hover:brightness-90">Plan <b>{plan.length}</b></Link>
          <Link href="/my-plan" onClick={() => { setTab("plan"); setPending("/my-plan"); }} className="inline-flex h-8 cursor-pointer items-center gap-1 rounded-full bg-primary px-3 text-xs font-semibold text-primary-content transition hover:brightness-90">Saved <b>{saved.length}</b></Link>
        </div>



      </nav>



    </header>

  );
};

export default Navber;