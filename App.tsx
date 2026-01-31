
import React, { useState, useEffect } from 'react';
import DigitalDustBackground from './components/SpaceBackground';
import PortalCard from './components/Planet';
import AstroAssistant from './components/AstroAssistant';
import CustomCursor from './components/CustomCursor';
import { Project } from './types';
import { ArrowDown, Users, Sparkles } from 'lucide-react';

const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'Batch Builder',
    description: 'Autonomous tool for custom educational architecture.',
    url: 'https://make-your-own-batch.web.app/',
    color: '#fff',
    type: 'planet',
    coordinates: { x: 0, y: 0, z: 0 }
  },
  {
    id: '02',
    title: 'JEE Tracker',
    description: 'Predictive analytics and progress monitoring.',
    url: 'https://jee-tracker-e60aa.web.app/',
    color: '#fff',
    type: 'planet',
    coordinates: { x: 0, y: 0, z: 0 }
  },
  {
    id: '03',
    title: 'BatchWise Hub',
    description: 'The neural network of the community hub.',
    url: 'https://t.me/BatchWise',
    color: '#fff',
    type: 'planet',
    coordinates: { x: 0, y: 0, z: 0 }
  }
];

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full min-h-screen selection:bg-white/20">
      <CustomCursor />
      <DigitalDustBackground />
      
      {/* UI layer */}
      <div className="relative z-20 pointer-events-none">
        <nav className="fixed top-0 left-0 w-full px-8 py-10 z-[100] flex justify-between items-center mix-blend-difference">
          <div className="pointer-events-auto">
            <h1 className="text-xl font-brand font-bold tracking-[0.2em] text-white">QUASAR.TECH</h1>
          </div>
          <div className="hidden md:flex gap-12 text-[10px] font-brand font-medium tracking-[0.4em] uppercase text-white/40 pointer-events-auto">
            <button onClick={() => scrollToSection('products')} className="hover:text-white transition-colors">Ecosystem</button>
            <button onClick={() => scrollToSection('philosophy')} className="hover:text-white transition-colors">Philosophy</button>
            <a href="https://t.me/BatchWise" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Connect</a>
          </div>
        </nav>
      </div>

      {/* Main Content Scrollable Layer */}
      <main className="relative z-10 pt-32 pb-20 px-6 md:px-20 max-w-[1400px] mx-auto">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 md:mb-52 min-h-[70vh] items-center">
           <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-6xl md:text-[110px] font-brand font-bold tracking-tighter leading-[0.9] text-white mb-8">
                 Don't study in a <br />
                 <span className="opacity-40">vacuum.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/40 font-light max-w-lg leading-relaxed mb-10">
                 The "Screen" isn't enough. We bridge the gap between isolated study and collaborative mastery. Engineered to kill the isolation.
              </p>
              <div className="flex items-center gap-4 text-[10px] uppercase font-brand tracking-[0.5em] text-white/20">
                 <ArrowDown className="w-4 h-4 animate-bounce" />
                 <span>Initialize System Scan</span>
              </div>
           </div>

           <div id="products" className="lg:col-span-5 flex flex-col pt-4 lg:pt-0">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-[10px] uppercase font-brand tracking-[0.6em] text-white/30">Active Components</h2>
                <div className="w-12 h-px bg-white/10" />
              </div>
              <div className="space-y-4">
                {mounted && PROJECTS.map((project) => (
                   <PortalCard key={project.id} project={project} />
                ))}
              </div>
           </div>
        </section>

        <section id="philosophy" className="mb-40 grid grid-cols-1 md:grid-cols-2 gap-6 scroll-mt-32">
          <div className="glass p-10 md:p-14 rounded-3xl group border border-white/5 hover:border-white/20 transition-all duration-500">
            <div className="w-12 h-12 mb-8 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-brand font-bold text-white mb-4">Tired of teachers that don't "click"?</h3>
            <p className="text-white/40 mb-10 leading-relaxed font-light">
              Access resources from creators who actually make sense to you. We curate paths that resonate with your individual learning frequency.
            </p>
            <a href="https://t.me/BatchWise" target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 text-[10px] uppercase font-brand tracking-widest text-white group-hover:translate-x-2 transition-transform">
              Find your style here <div className="w-8 h-px bg-white/20 group-hover:bg-white group-hover:w-12 transition-all" />
            </a>
          </div>

          <div className="glass p-10 md:p-14 rounded-3xl group border border-white/5 hover:border-white/20 transition-all duration-500">
            <div className="w-12 h-12 mb-8 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-brand font-bold text-white mb-4">Tired of studying alone?</h3>
            <p className="text-white/40 mb-10 leading-relaxed font-light">
              Studying alone is a ghost town. Join a community where you can see others working, share notes, and stop feeling like you're on an island.
            </p>
            <a href="https://jee-tracker-e60aa.web.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 text-[10px] uppercase font-brand tracking-widest text-white group-hover:translate-x-2 transition-transform">
              Join the community <div className="w-8 h-px bg-white/20 group-hover:bg-white group-hover:w-12 transition-all" />
            </a>
          </div>
        </section>

        <footer className="w-full py-20 border-t border-white/5 bg-black/50 backdrop-blur-md rounded-t-[3rem] -mx-6 md:-mx-20 px-6 md:px-20">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
             <div>
                <div className="text-5xl font-brand font-bold text-white mb-4">quasar.</div>
                <div className="text-[10px] font-brand tracking-[0.5em] text-white/20 uppercase">Digital Education Infrastructure</div>
             </div>
             
             <div className="flex flex-col gap-6">
                <div className="text-[10px] font-brand tracking-[0.3em] text-white/40 uppercase">Global Communication</div>
                <a href="mailto:yashwinka8@gmail.com" className="text-2xl font-brand text-white hover:text-white/60 transition-colors">
                   yashwinka8@gmail.com
                </a>
                <div className="text-[10px] font-brand tracking-[0.2em] text-white/20 mt-4">
                   © 2026 QUASAR TECH HUB. DESIGNED TO KILL THE ISOLATION.
                </div>
             </div>
          </div>
        </footer>
      </main>

      <AstroAssistant />
      
      {/* Decorative light wrap */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.4)_100%)] z-30" />
    </div>
  );
};

export default App;
