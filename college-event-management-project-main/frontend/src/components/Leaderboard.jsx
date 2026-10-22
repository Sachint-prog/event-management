import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Crown, Target, Zap, ChevronUp } from 'lucide-react';
import Sidebar from './Sidebar';

const Leaderboard = () => {
  const topStudents = [
    { rank: 1, name: "Parth Sarthi", points: 2450, events: 12, level: 24, trend: 'up' },
    { rank: 2, name: "Sneha Kapur", points: 2100, events: 10, level: 21, trend: 'up' },
    { rank: 3, name: "Amit Verma", points: 1950, events: 9, level: 19, trend: 'down' },
    { rank: 4, name: "Ishita Raj", points: 1800, events: 8, level: 18, trend: 'static' },
    { rank: 5, name: "Karan Johar", points: 1650, events: 7, level: 16, trend: 'up' },
  ];

  return (
    <div className="flex min-h-screen bg-[#030712] text-white">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <header className="mb-12 flex justify-between items-end">
           <div>
              <div className="flex items-center gap-3 mb-2">
                 <Trophy className="text-yellow-400" size={32} />
                 <h1 className="text-4xl font-black italic tracking-tighter uppercase">Campus Leaderboard</h1>
              </div>
              <p className="text-gray-400 font-medium">Top contributors and participants of the semester.</p>
           </div>
           <div className="flex gap-4">
              <div className="glass-panel px-6 py-3 flex flex-col items-center">
                 <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Your Rank</span>
                 <span className="text-2xl font-black text-indigo-400">#01</span>
              </div>
              <div className="glass-panel px-6 py-3 flex flex-col items-center border-indigo-500/30 bg-indigo-500/5">
                 <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Total Points</span>
                 <span className="text-2xl font-black text-white">2,450 XP</span>
              </div>
           </div>
        </header>

        {/* Podium */}
        <div className="grid grid-cols-3 gap-8 mb-16 items-end max-w-4xl mx-auto px-4">
           {/* 2nd Place */}
           <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-slate-400/20 border-2 border-slate-400 flex items-center justify-center mb-4 overflow-hidden">
                 <Medal className="text-slate-400" size={32} />
              </div>
              <div className="h-32 bg-slate-400/10 border border-slate-400/20 rounded-t-2xl p-4 flex flex-col justify-center">
                 <p className="font-bold text-white mb-1 truncate">{topStudents[1].name}</p>
                 <p className="text-xl font-black text-slate-400">2nd</p>
              </div>
           </div>

           {/* 1st Place */}
           <div className="text-center">
              <Crown className="text-yellow-400 mx-auto mb-2 animate-bounce" size={40} />
              <div className="w-28 h-28 mx-auto rounded-full bg-yellow-400/20 border-4 border-yellow-400 flex items-center justify-center mb-4 overflow-hidden shadow-[0_0_50px_rgba(250,204,21,0.2)]">
                 <div className="text-4xl font-black text-yellow-400">P</div>
              </div>
              <div className="h-44 bg-yellow-400/10 border border-yellow-400/20 rounded-t-2xl p-4 flex flex-col justify-center">
                 <p className="font-bold text-white mb-1 truncate">You (Parth)</p>
                 <p className="text-3xl font-black text-yellow-400 tracking-tighter">1st</p>
              </div>
           </div>

           {/* 3rd Place */}
           <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-orange-600/20 border-2 border-orange-600 flex items-center justify-center mb-4 overflow-hidden">
                 <Medal className="text-orange-600" size={32} />
              </div>
              <div className="h-24 bg-orange-600/10 border border-orange-600/20 rounded-t-2xl p-4 flex flex-col justify-center">
                 <p className="font-bold text-white mb-1 truncate">{topStudents[2].name}</p>
                 <p className="text-xl font-black text-orange-600">3rd</p>
              </div>
           </div>
        </div>

        {/* List */}
        <div className="max-w-4xl mx-auto space-y-4">
           {topStudents.map((s, i) => (
             <motion.div 
               key={s.rank}
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: i * 0.1 }}
               className={`glass-panel p-5 flex items-center justify-between group hover:bg-white/5 transition-all ${i === 0 ? 'border-yellow-400/30' : ''}`}
             >
                <div className="flex items-center gap-6">
                   <span className={`text-xl font-black w-8 ${i === 0 ? 'text-yellow-400' : 'text-gray-500'}`}>0{s.rank}</span>
                   <div className="w- w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center font-bold">
                      {s.name[0]}
                   </div>
                   <div>
                      <h4 className="font-bold text-white group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{s.name}</h4>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{s.events} Events Attended</p>
                   </div>
                </div>

                <div className="flex items-center gap-12">
                   <div className="text-right">
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Level</p>
                      <div className="flex items-center gap-2">
                         <div className="w-20 h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-500" style={{ width: '70%' }}></div>
                         </div>
                         <span className="text-sm font-bold">{s.level}</span>
                      </div>
                   </div>
                   <div className="w-24 text-right">
                      <span className="text-lg font-black italic">{s.points.toLocaleString()}</span>
                      <span className="text-[10px] text-gray-500 ml-1 font-bold">XP</span>
                   </div>
                   <div className="w-10 flex justify-center">
                      <ChevronUp size={20} className={s.trend === 'up' ? 'text-green-500' : s.trend === 'down' ? 'text-red-500' : 'text-gray-600'} />
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </main>
    </div>
  );
};

export default Leaderboard;
