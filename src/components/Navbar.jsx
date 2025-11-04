import React from 'react';
import { Rocket, Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="group inline-flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 text-white shadow-lg shadow-fuchsia-500/20 transition-transform group-hover:scale-105">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight">Auralite</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            <a href="#features" className="text-sm text-slate-300 hover:text-white">Features</a>
            <a href="#hero" className="text-sm text-slate-300 hover:text-white">Demo</a>
            <a href="#contact" className="text-sm text-slate-300 hover:text-white">Contact</a>
          </nav>
          <button className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white/15 hover:ring-white/25">
            <Rocket className="h-4 w-4" />
            Launch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
