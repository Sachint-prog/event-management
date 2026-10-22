import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Calendar, 
  Search, 
  MessageSquare, 
  Users,
  Trophy,
  Settings, 
  LogOut, 
  User,
  BrainCircuit,
  Bell
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <Search size={20} />, label: 'Explore Events', path: '/explore' },
    { icon: <Users size={20} />, label: 'AI Networking', path: '/networking' },
    { icon: <Trophy size={20} />, label: 'Leaderboard', path: '/leaderboard' },
    { icon: <MessageSquare size={20} />, label: 'AI Assistant', path: '/chat' },
  ];

  const bottomItems = [
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
    { icon: <LogOut size={20} />, label: 'Logout', path: '/login' },
  ];

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-[#070b14] border-r border-white/5 flex flex-col z-40">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <BrainCircuit className="text-white" size={24} />
        </div>
        <span className="text-xl font-bold tracking-tight text-white">EventFlow<span className="text-indigo-500">.ai</span></span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
              location.pathname === item.path 
                ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <span className={`${location.pathname === item.path ? 'text-indigo-400' : 'group-hover:text-indigo-400'}`}>
              {item.icon}
            </span>
            <span className="font-medium text-sm">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 mt-auto border-t border-white/5 space-y-2">
        {bottomItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-all group"
          >
            {item.icon}
            <span className="font-medium text-sm">{item.label}</span>
          </Link>
        ))}
        
        <div className="mt-4 p-4 glass-panel bg-indigo-600/5 border-indigo-500/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
              <User size={16} className="text-indigo-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Student Pro</p>
              <p className="text-[10px] text-gray-500">Parth Sarthi</p>
            </div>
          </div>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
             <div className="h-full bg-indigo-500 w-3/4"></div>
          </div>
          <p className="text-[9px] text-gray-500 mt-2">75% Profile Complete</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
