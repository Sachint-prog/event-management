import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, MessageCircle, Sparkles, Brain, Award, Star } from 'lucide-react';
import Sidebar from './Sidebar';

const Networking = () => {
  const suggestedPeers = [
    {
      id: 1,
      name: "Rahul Sharma",
      major: "Computer Science",
      badge: "AI Enthusiast",
      matchScore: 98,
      reason: "Both registered for 'Generative AI Workshop'",
      interests: ["Machine Learning", "Python", "Cloud"]
    },
    {
      id: 2,
      name: "Ananya Iyer",
      major: "Information Tech",
      badge: "Hackathon Master",
      matchScore: 92,
      reason: "Shared interest in 'Blockchain' and 'Web3'",
      interests: ["React", "Solidity", "Design"]
    },
    {
      id: 3,
      name: "Vikram Malhotra",
      major: "Mechanical Eng",
      badge: "Robotics Lead",
      matchScore: 85,
      reason: "Attended 3 similar tech seminars",
      interests: ["IoT", "Robotics", "Startups"]
    }
  ];

  return (
    <div className="flex min-h-screen bg-[#030712] text-white">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-2">
             <div className="p-2 bg-purple-500/10 rounded-lg">
                <Brain className="text-purple-400" size={24} />
             </div>
             <h1 className="text-3xl font-bold italic tracking-tight">AI Networking Hub</h1>
          </div>
          <p className="text-gray-400">Connect with like-minded peers across the campus using our talent-match AI.</p>
        </header>

        {/* AI Insight Card */}
        <div className="glass-panel p-6 mb-12 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-transparent border-indigo-500/20">
           <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 animate-pulse">
                 <Sparkles className="text-indigo-400" size={24} />
              </div>
              <div>
                 <h2 className="text-lg font-bold mb-1">Your Network Potential is High!</h2>
                 <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
                    Based on your registration for <strong>Hackathon 4.0</strong>, we've found 15 new students with complementary skills (Full Stack, UI/UX) that could help you form a winning team.
                 </p>
              </div>
           </div>
        </div>

        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
           <Star className="text-yellow-400 fill-yellow-400" size={20} /> AI Matches For You
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {suggestedPeers.map((peer, idx) => (
             <motion.div 
               key={peer.id}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               className="glass-panel p-6 hover:bg-white/5 transition-all group"
             >
                <div className="flex items-center justify-between mb-6">
                   <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-xl">
                      {peer.name[0]}
                   </div>
                   <div className="text-right">
                      <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">Match Score</div>
                      <div className="text-2xl font-black text-white italic">{peer.matchScore}%</div>
                   </div>
                </div>

                <div className="mb-6">
                   <h4 className="text-lg font-bold text-white mb-1">{peer.name}</h4>
                   <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-3">{peer.major}</p>
                   <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400">
                      <Award size={10} className="text-yellow-500" /> {peer.badge}
                   </span>
                </div>

                <div className="p-3 rounded-xl bg-indigo-500/5 border border-indigo-500/10 mb-6">
                   <p className="text-[10px] text-indigo-300 italic">✨ {peer.reason}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                   {peer.interests.map(interest => (
                     <span key={interest} className="text-[9px] font-bold py-1 px-2 rounded bg-white/5 text-gray-500">{interest}</span>
                   ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                   <button className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-bold transition-all">
                      <UserPlus size={14} /> Connect
                   </button>
                   <button className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/10 hover:bg-white/5 text-xs font-bold transition-all">
                      <MessageCircle size={14} /> Message
                   </button>
                </div>
             </motion.div>
           ))}
        </div>
      </main>
    </div>
  );
};

export default Networking;
