import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-white/10">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Auralite. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-300">
            <a className="hover:text-white" href="#">Privacy</a>
            <span className="opacity-30">•</span>
            <a className="hover:text-white" href="#">Terms</a>
            <span className="opacity-30">•</span>
            <a className="hover:text-white" href="mailto:hello@example.com">hello@example.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
