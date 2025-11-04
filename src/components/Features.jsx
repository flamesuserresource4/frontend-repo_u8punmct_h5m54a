import React from 'react';
import { Zap, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Sparkles,
    title: 'Spline-powered hero',
    desc: 'Immersive 3D scene with a responsive, high-performance canvas and gradient auras.',
    color: 'from-fuchsia-500/30 to-violet-500/30',
  },
  {
    icon: Zap,
    title: 'Micro-animations',
    desc: 'Framer Motion powered transitions that feel crisp, fast, and delightful.',
    color: 'from-cyan-400/30 to-sky-500/30',
  },
  {
    icon: Shield,
    title: 'Accessible & responsive',
    desc: 'Thoughtful semantics, keyboard-friendly, and beautiful on every screen.',
    color: 'from-orange-400/30 to-amber-500/30',
  },
];

const FeatureCard = ({ icon: Icon, title, desc, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: '-50px' }}
    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur"
  >
    <div className={`absolute inset-px rounded-2xl bg-gradient-to-br ${color} opacity-20`} />
    <div className="relative z-10">
      <div className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-white ring-1 ring-white/15">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{desc}</p>
    </div>
  </motion.div>
);

const Features = () => {
  return (
    <section id="features" className="relative isolate py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.15),transparent_60%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">Designed for motion</h2>
          <p className="mt-3 text-pretty text-slate-300">
            Clean composition, elegant gradients, and fluid animations come together for a polished feel.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
