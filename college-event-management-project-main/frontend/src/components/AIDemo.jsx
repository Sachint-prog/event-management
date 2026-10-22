import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Brain, Code, Music, Palette, Trophy, Loader2, ArrowRight } from 'lucide-react';

const AIDemo = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recommendations, setRecommendations] = useState(null);

  const interestOptions = [
    { name: 'Coding', icon: <Code size={20} /> },
    { name: 'Music', icon: <Music size={20} /> },
    { name: 'Design', icon: <Palette size={20} /> },
    { name: 'Sports', icon: <Trophy size={20} /> },
    { name: 'AI/ML', icon: <Brain size={20} /> },
  ];

  const handleToggleInterest = (name) => {
    if (selectedInterests.includes(name)) {
      setSelectedInterests(selectedInterests.filter(i => i !== name));
    } else {
      setSelectedInterests([...selectedInterests, name]);
    }
  };

  const runDemo = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      // Mock logic
      setRecommendations([
        { title: 'Tech Innovation Expo', match: 98, reason: 'Strong match with coding & AI interests' },
        { title: 'Annual Cultural Fest', match: 72, reason: 'High popularity among designers' }
      ]);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <main className="pt-32 pb-20 max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
           <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(79,70,229,0.4)]">
              <Sparkles className="text-white" size={32} />
           </div>
           <h1 className="text-5xl font-black italic tracking-tighter uppercase mb-4 leading-tight">Test the EventFlow AI</h1>
           <p className="text-gray-400 text-lg mb-12 font-medium">Select your interests below to see how our engine would curate campus life for you.</p>
        </motion.div>

        <div className="glass-panel p-10 mb-12">
           <div className="flex flex-wrap justify-center gap-4 mb-10">
              {interestOptions.map(opt => (
                <button 
                  key={opt.name}
                  onClick={() => handleToggleInterest(opt.name)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-2xl border transition-all ${
                    selectedInterests.includes(opt.name) 
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg' 
                      : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  {opt.icon} <span className="font-bold text-sm">{opt.name}</span>
                </button>
              ))}
           </div>

           <button 
             onClick={runDemo}
             disabled={selectedInterests.length === 0 || isAnalyzing}
             className="w-full py-5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl hover:shadow-indigo-500/30 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
           >
             {isAnalyzing ? <><Loader2 size={24} className="animate-spin" /> AI Analyzing Interests...</> : <><Brain size={24} /> Run Recommendation Demo</>}
           </button>
        </div>

        <AnimatePresence>
           {recommendations && (
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="space-y-6"
             >
                <div className="flex items-center gap-3 justify-center mb-8">
                   <div className="h-px bg-white/10 flex-1"></div>
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">Analysis Complete</span>
                   <div className="h-px bg-white/10 flex-1"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                   {recommendations.map((rec, i) => (
                     <div key={i} className="glass-panel p-6 text-left relative overflow-hidden group border-indigo-500/20">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-600/5 blur-xl -z-10 group-hover:bg-indigo-600/20 transition-colors"></div>
                        <div className="flex justify-between items-start mb-4">
                           <h4 className="text-xl font-bold text-white uppercase italic">{rec.title}</h4>
                           <div className="text-right">
                              <p className="text-[9px] font-black text-indigo-400">MATCH</p>
                              <p className="text-2xl font-black text-white italic">{rec.match}%</p>
                           </div>
                        </div>
                        <p className="text-xs text-gray-500 font-medium italic mb-6">" {rec.reason} "</p>
                        <div className="flex gap-2">
                           <span className="w-full h-1.5 bg-indigo-600 rounded-full"></span>
                           <span className="w-full h-1.5 bg-white/5 rounded-full"></span>
                           <span className="w-full h-1.5 bg-white/5 rounded-full"></span>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="pt-10">
                   <p className="text-gray-500 text-sm mb-6">This is just a preview. Join thousands of students to get real-time recommendations.</p>
                   <button className="flex items-center gap-2 mx-auto text-indigo-400 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors">
                      Claim Your Personalized Dashboard <ArrowRight size={16} />
                   </button>
                </div>
             </motion.div>
           )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AIDemo;
