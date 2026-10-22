import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Globe, Heart, Zap, History } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <main className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-8">
        <section className="text-center mb-24">
           <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
              <h1 className="text-7xl font-black italic tracking-tighter uppercase mb-6 leading-none">Redefining Campus Life.</h1>
              <p className="text-gray-400 max-w-2xl mx-auto text-xl font-medium">We built EventFlow.ai to bridge the gap between students and the vibrant pulse of college activities using state-of-the-art Intelligence.</p>
           </motion.div>
        </section>

        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
           <div>
              <h2 className="text-4xl font-bold mb-8 uppercase italic border-l-8 border-indigo-600 pl-6">The Problem</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Most colleges still rely on notice boards, scatter-brained social media posts, and word-of-mouth for event promotion. Important hackathons, seminars, and fests are often missed by those who would benefit from them most.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Students feel overwhelmed by noise, while organizers struggle with empty chairs. We saw this mismatch and decided to build a solution that doesn't just "list" events, but <strong>understands</strong> people.
              </p>
           </div>
           <div className="glass-panel p-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
              <div className="relative z-10 flex flex-col gap-8">
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-600 rounded-xl"><Sparkles size={24} /></div>
                    <p className="font-bold text-lg">AI-First Recommendation</p>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-600 rounded-xl"><Globe size={24} /></div>
                    <p className="font-bold text-lg">Campus-Wide Connectivity</p>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-500 rounded-xl"><Shield size={24} /></div>
                    <p className="font-bold text-lg">Secure & Seamless Access</p>
                 </div>
              </div>
           </div>
        </div>

        <section className="mb-24">
           <h2 className="text-center text-4xl font-bold mb-16 uppercase italic">Our Core Pillars</h2>
           <div className="grid md:grid-cols-3 gap-8">
              <PillarCard 
                icon={<Zap className="text-yellow-400" size={32} />} 
                title="Innovation" 
                desc="Constantly pushing the boundaries of what's possible in campus event management." 
              />
              <PillarCard 
                icon={<Heart className="text-red-400" size={32} />} 
                title="Community" 
                desc="Building a platform that fosters real connections and lifelong memories." 
              />
              <PillarCard 
                icon={<History className="text-indigo-400" size={32} />} 
                title="Reliability" 
                desc="A robust, enterprise-grade architecture that colleges can depend on for every major fest." 
              />
           </div>
        </section>

        {/* Team / Stats */}
        <div className="glass-panel p-12 text-center border-indigo-500/10">
           <h3 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-6">Current Scale</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <StatItem val="15k+" label="Active Students" />
              <StatItem val="450+" label="Clubs" />
              <StatItem val="1.2k+" label="Events Monthly" />
              <StatItem val="98%" label="Satisfaction" />
           </div>
        </div>
      </main>
    </div>
  );
};

const PillarCard = ({ icon, title, desc }) => (
  <div className="glass-panel p-8 hover:bg-white/5 transition-all text-center">
     <div className="mb-6 flex justify-center">{icon}</div>
     <h4 className="text-xl font-bold mb-4 uppercase">{title}</h4>
     <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const StatItem = ({ val, label }) => (
  <div>
     <p className="text-4xl font-black mb-2 italic">{val}</p>
     <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{label}</p>
  </div>
);

export default About;
