import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="hero" className="relative flex min-h-[88vh] w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.18),transparent_60%),radial-gradient(ellipse_at_center,rgba(6,182,212,0.14),transparent_55%),radial-gradient(ellipse_at_center,rgba(249,115,22,0.1),transparent_50%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance bg-gradient-to-br from-white via-white to-violet-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
            Futuristic Motion. Minimal Feel.
          </h1>
          <p className="mt-5 text-pretty text-slate-300 sm:text-lg">
            A sleek animation experience inspired by modern creative tooling. Explore an interactive 3D aura with silky gradients and delightful micro-interactions.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-xl shadow-white/10 transition hover:translate-y-[-1px] hover:shadow-2xl"
            >
              Explore Features
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white/15 hover:ring-white/25"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
