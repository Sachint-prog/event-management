import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Calendar, 
  MapPin, 
  Tag, 
  Brain, 
  Sparkles, 
  Loader2, 
  TrendingUp, 
  Users, 
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';
import Sidebar from './Sidebar';

const OrganizerDashboard = () => {
  const [eventData, setEventData] = useState({ title: '', category: 'Workshop', date: '', venue: '', description: '' });
  const [isGenerating, setIsGenerating] = useState(false);

  const attendanceData = [
    { name: 'Mon', internal: 40, external: 240 },
    { name: 'Tue', internal: 30, external: 139 },
    { name: 'Wed', internal: 20, external: 980 },
    { name: 'Thu', internal: 27, external: 390 },
    { name: 'Fri', internal: 18, external: 480 },
  ];

  const participationTrend = [
    { name: 'Jan', count: 400 },
    { name: 'Feb', count: 300 },
    { name: 'Mar', count: 600 },
    { name: 'Apr', count: 800 },
    { name: 'May', count: 1200 },
  ];

  const handleGenerateDescription = async () => {
    if (!eventData.title) return;
    setIsGenerating(true);
    setTimeout(() => {
      const mockDesc = `Get ready for an incredible ${eventData.title}! This ${eventData.category} will focus on breakthrough innovations, providing participants with exclusive networking and career insights. Hosted at ${eventData.venue || 'Campus Central'}, this is an event you cannot miss.`;
      setEventData({...eventData, description: mockDesc});
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-[#030712] text-white">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-1">Organizer Hub</h1>
            <p className="text-gray-400 text-sm">Manage events and leverage AI insights for maximum engagement.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="glass-panel px-4 py-2 flex items-center gap-2 border-indigo-500/30">
                <Sparkles size={16} className="text-indigo-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">AI Engine Active</span>
             </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
           {/* New Event Form */}
           <div className="lg:col-span-2">
              <div className="glass-panel p-8">
                 <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
                    <Plus className="text-indigo-400" size={20} /> Create Smart Event
                 </h2>
                 
                 <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-2">
                       <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Event Title</label>
                       <input 
                         type="text" 
                         className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500/50"
                         placeholder="Event name..."
                         onChange={(e) => setEventData({...eventData, title: e.target.value})}
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Category</label>
                       <select 
                         className="w-full bg-[#0d1117] border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500/50 appearance-none"
                         onChange={(e) => setEventData({...eventData, category: e.target.value})}
                       >
                         <option>Workshop</option>
                         <option>Hackathon</option>
                         <option>Seminars</option>
                       </select>
                    </div>
                 </div>

                 <div className="space-y-2 mb-8">
                    <div className="flex justify-between items-center px-1">
                       <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Description</label>
                       <button 
                         onClick={handleGenerateDescription}
                         disabled={isGenerating}
                         className="text-[10px] font-bold text-indigo-400 flex items-center gap-1.5 hover:text-indigo-300 transition-colors"
                       >
                         {isGenerating ? <Loader2 size={12} className="animate-spin" /> : <Sparkles size={12} />}
                         AI AUTO-WRITE
                       </button>
                    </div>
                    <textarea 
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500/50 resize-none"
                      value={eventData.description}
                      onChange={(e) => setEventData({...eventData, description: e.target.value})}
                    ></textarea>
                 </div>

                 <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 font-bold rounded-xl shadow-lg shadow-indigo-600/20 transition-all uppercase tracking-widest">
                    Launch Event
                 </button>
              </div>
           </div>

           {/* AI Predictors Sidebar */}
           <div className="space-y-6">
              <div className="glass-panel p-6 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 border-indigo-500/20">
                 <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Brain className="text-indigo-400" size={20} /> Success Prediction
                 </h3>
                 <div className="flex items-center justify-center p-6 border-2 border-dashed border-white/5 rounded-2xl mb-4 bg-black/20">
                    <div className="text-center">
                       <p className="text-4xl font-black text-white italic">87%</p>
                       <p className="text-[10px] text-indigo-400 font-black uppercase tracking-tighter">Likely to Succeed</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-2 text-green-400 text-[10px] font-bold bg-green-400/5 p-2 rounded-lg border border-green-400/10">
                    <CheckCircle size={14} /> High engagement for this category
                 </div>
              </div>

              <div className="glass-panel p-6">
                 <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                    <TrendingUp className="text-purple-400" size={20} /> Attendance Forecast
                 </h3>
                 <div className="h-[150px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <BarChart data={attendanceData}>
                          <Bar dataKey="internal" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="external" fill="#9333ea" radius={[4, 4, 0, 0]} />
                       </BarChart>
                    </ResponsiveContainer>
                 </div>
                 <div className="mt-4 flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 bg-indigo-600 rounded-sm"></span> Internal</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 bg-purple-600 rounded-sm"></span> External</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Big Analytics Section */}
        <div className="grid lg:grid-cols-2 gap-8">
           <div className="glass-panel p-6">
              <h3 className="text-lg font-bold mb-6 flex justify-between items-center">
                 <span>Student Participation Growth</span>
                 <span className="text-xs text-green-400">+24% this month</span>
              </h3>
              <div className="h-[250px] w-full">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={participationTrend}>
                       <defs>
                          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                             <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                          </linearGradient>
                       </defs>
                       <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                       <XAxis dataKey="name" stroke="#6b7280" fontSize={10} axisLine={false} tickLine={false} />
                       <YAxis stroke="#6b7280" fontSize={10} axisLine={false} tickLine={false} />
                       <Tooltip 
                          contentStyle={{ backgroundColor: '#070b14', border: '1px solid #ffffff10', borderRadius: '8px' }}
                          itemStyle={{ color: '#fff', fontSize: '12px' }}
                       />
                       <Area type="monotone" dataKey="count" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorCount)" />
                    </AreaChart>
                 </ResponsiveContainer>
              </div>
           </div>

           <div className="glass-panel p-6 flex flex-col justify-between">
              <div>
                 <h3 className="text-lg font-bold mb-6">Real-time Insights</h3>
                 <div className="space-y-4">
                    <InsightItem icon={<AlertTriangle className="text-orange-400" size={16} />} title="Potential Clash Detected" desc="Another popular hackathon is scheduled at the same time." />
                    <InsightItem icon={<Sparkles className="text-indigo-400" size={16} />} title="Optimal Pricing Found" desc="Suggested registration fee: Free (to maximize reach)." />
                    <InsightItem icon={<Users className="text-purple-400" size={16} />} title="Target Audience" desc="65% of interested students are from IT department." />
                 </div>
              </div>
              <div className="mt-8 p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold">
                       A
                    </div>
                    <div>
                       <p className="text-xs font-bold text-white uppercase tracking-tight">AI Advisor Pro</p>
                       <p className="text-[10px] text-indigo-300 italic">"I recommend adding 'Design' as a sub-topic."</p>
                    </div>
                 </div>
                 <button className="text-xs font-bold text-indigo-400 hover:underline">Apply Fix</button>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
};

const InsightItem = ({ icon, title, desc }) => (
  <div className="flex items-start gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors">
     <div className="mt-0.5">{icon}</div>
     <div>
        <p className="text-sm font-bold text-white mb-0.5 leading-none">{title}</p>
        <p className="text-[11px] text-gray-500 leading-tight">{desc}</p>
     </div>
  </div>
);

export default OrganizerDashboard;
