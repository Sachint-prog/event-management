import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ShieldCheck, 
  Database, 
  Activity, 
  CheckCircle, 
  XCircle, 
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip 
} from 'recharts';
import Sidebar from './Sidebar';

const AdminPanel = () => {
  const stats = [
    { label: 'Total Students', value: '4,280', growth: '+12%', icon: <Users size={20} /> },
    { label: 'Active Events', value: '84', growth: '+5%', icon: <Activity size={20} /> },
    { label: 'Pending Approvals', value: '12', growth: '-2%', icon: <Clock size={20} /> },
    { label: 'System Health', value: '99.9%', growth: 'Stable', icon: <ShieldCheck size={20} /> },
  ];

  const categoryData = [
    { name: 'Tech', value: 400 },
    { name: 'Cultural', value: 300 },
    { name: 'Sports', value: 200 },
    { name: 'Others', value: 100 },
  ];
  const COLORS = ['#6366f1', '#a855f7', '#ec4899', '#f97316'];

  const pendingEvents = [
    { id: 1, title: 'Annual Tech Fest', organizer: 'CS Club', date: 'Oct 30' },
    { id: 2, title: 'Music Night', organizer: 'Arts Society', date: 'Nov 05' },
    { id: 3, title: 'Debate Championship', organizer: 'Literary Club', date: 'Nov 12' },
  ];

  return (
    <div className="flex min-h-screen bg-[#030712] text-white">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <header className="mb-10 flex justify-between items-center">
           <div>
              <h1 className="text-3xl font-bold tracking-tight mb-1 font-display uppercase italic">System Administration</h1>
              <p className="text-gray-400 text-sm font-medium">Platform-wide overview and management for College Administrators.</p>
           </div>
           <div className="flex gap-4">
              <div className="px-4 py-2 glass-panel border-green-500/20 bg-green-500/5 flex items-center gap-2">
                 <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                 <span className="text-xs font-bold text-green-500 uppercase tracking-widest">Server: Operational</span>
              </div>
           </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
           {stats.map((stat, i) => (
             <div key={i} className="glass-panel p-6 hover:bg-white/5 transition-all">
                <div className="flex justify-between items-start mb-4">
                   <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                      {stat.icon}
                   </div>
                   <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                     stat.growth.startsWith('+') ? 'text-green-400 bg-green-400/10' : 
                     stat.growth === 'Stable' ? 'text-blue-400 bg-blue-400/10' : 'text-red-400 bg-red-400/10'
                   }`}>
                     {stat.growth}
                   </span>
                </div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-2xl font-black">{stat.value}</p>
             </div>
           ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
           {/* Event Approval Table */}
           <div className="lg:col-span-2 glass-panel p-6">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2 uppercase tracking-tight italic">
                 <Database className="text-indigo-400" size={20} /> Event Approval Queue
              </h3>
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="border-b border-white/5 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                          <th className="pb-4 pt-2">Event Title</th>
                          <th className="pb-4 pt-2">Organizer</th>
                          <th className="pb-4 pt-2">Date</th>
                          <th className="pb-4 pt-2 text-right">Actions</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                       {pendingEvents.map(event => (
                         <tr key={event.id} className="group hover:bg-white/[0.02] transition-colors">
                            <td className="py-4 font-bold text-sm">{event.title}</td>
                            <td className="py-4 text-sm text-gray-400">{event.organizer}</td>
                            <td className="py-4 text-sm text-gray-500">{event.date}</td>
                            <td className="py-4">
                               <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <button className="p-2 bg-green-500/10 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-all"><CheckCircle size={16}/></button>
                                  <button className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all"><XCircle size={16}/></button>
                               </div>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
              <button className="w-full mt-6 py-2 text-xs font-bold text-gray-400 hover:text-white transition-colors">View All Pending Requests</button>
           </div>

           {/* Distribution Pie Chart */}
           <div className="glass-panel p-6 flex flex-col">
              <h3 className="text-lg font-bold mb-8 uppercase tracking-tight italic">Event Distribution</h3>
              <div className="h-[200px] w-full flex-1">
                 <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                       <Pie
                          data={categoryData}
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                       >
                          {categoryData.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                       </Pie>
                       <Tooltip 
                          contentStyle={{ backgroundColor: '#070b14', border: 'none', borderRadius: '8px' }}
                          itemStyle={{ color: '#fff' }}
                       />
                    </PieChart>
                 </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                 {categoryData.map((item, idx) => (
                    <div key={item.name} className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[idx] }}></div>
                       <span className="text-[10px] font-bold text-gray-500 uppercase">{item.name}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* System Logs / Recent Activity */}
        <div className="mt-8 glass-panel p-6 bg-gradient-to-t from-indigo-600/5 to-transparent">
           <h3 className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-widest flex items-center justify-between">
              Recent System Logs 
              <ArrowUpRight size={16} className="opacity-40" />
           </h3>
           <div className="space-y-4 font-mono">
              {[
                { time: '14:20:05', msg: 'New Event Request: "Annual Sports Meet"', level: 'INFO' },
                { time: '13:55:12', msg: 'User login failed for admin@college.edu', level: 'WARN' },
                { time: '12:10:45', msg: 'Weekly Report generated: report_wk15.pdf', level: 'INFO' },
              ].map((log, i) => (
                <div key={i} className="flex items-center gap-4 text-xs">
                   <span className="text-gray-600">[{log.time}]</span>
                   <span className={log.level === 'WARN' ? 'text-orange-400' : 'text-indigo-400'}>[{log.level}]</span>
                   <span className="text-gray-400">{log.msg}</span>
                </div>
              ))}
           </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
