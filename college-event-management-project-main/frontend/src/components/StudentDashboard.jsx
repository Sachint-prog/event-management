import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Users, 
  ChevronRight,
  TrendingUp,
  Award,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const StudentDashboard = () => {
  const recommendedEvents = [
    {
      id: 1,
      title: "Generative AI Workshop",
      category: "Technology",
      date: "Oct 24, 2024",
      venue: "Main Auditorium",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      attendees: 128,
      aiReason: "Based on your interest in Machine Learning"
    },
    {
      id: 2,
      title: "Campus Hackathon 4.0",
      category: "Coding",
      date: "Nov 12, 2024",
      venue: "IT Block Lobby",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
      attendees: 340,
      aiReason: "You attended 2 hackathons last semester"
    }
  ];

  return (
    <div className="flex min-h-screen bg-[#030712]">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Parth! 👋</h1>
            <p className="text-gray-400">Discover what's happening around your campus today.</p>
          </div>
          <div className="flex gap-4">
             <button className="relative w-10 h-10 glass-panel flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full border-2 border-[#030712]"></span>
             </button>
             <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600"></div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard icon={<TrendingUp size={24} />} label="Events Formally Registered" value="08" color="indigo" />
          <StatCard icon={<Award size={24} />} label="Certificates Earned" value="03" color="purple" />
          <StatCard icon={<Zap size={24} />} label="AI Recommendations" value="12" color="pink" />
        </div>

        {/* AI Recommendations Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
             <div className="flex items-center gap-3">
               <div className="p-2 bg-indigo-500/10 rounded-lg">
                  <Sparkles className="text-indigo-400" size={24} />
               </div>
               <h2 className="text-2xl font-bold text-white">AI For You</h2>
             </div>
             <button className="text-sm text-indigo-400 font-semibold flex items-center gap-1 hover:text-indigo-300 transition-colors">
                View all <ChevronRight size={16} />
             </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recommendedEvents.map((event) => (
              <Link to={`/event/${event.id}`} key={event.id}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="glass-panel overflow-hidden group cursor-pointer border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300 h-full"
                >
                  <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-48 h-48 md:h-auto relative overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 px-2 py-1 bg-black/40 backdrop-blur-md rounded-lg text-[10px] font-bold text-white uppercase tracking-wider">
                      {event.category}
                    </div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <div className="mb-3">
                         <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-400 uppercase tracking-tight">
                           <Sparkles size={10} /> AI Recommended
                         </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{event.title}</h3>
                      <p className="text-xs text-indigo-300/60 mb-4 italic">✨ {event.aiReason}</p>
                      <div className="flex gap-4 text-gray-400 text-xs">
                        <div className="flex items-center gap-1.5"><Calendar size={14} /> {event.date}</div>
                        <div className="flex items-center gap-1.5"><MapPin size={14} /> {event.venue}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center gap-2">
                         <div className="flex -space-x-2">
                           {[1,2,3].map(i => (
                             <div key={i} className="w-6 h-6 rounded-full border-2 border-[#070b14] bg-gray-800"></div>
                           ))}
                         </div>
                         <span className="text-[10px] text-gray-500 font-medium">+{event.attendees} attending</span>
                      </div>
                      <button className="p-2 bg-white/5 hover:bg-indigo-600 rounded-lg text-white transition-all group-hover:shadow-[0_0_15px_rgba(79,70,229,0.3)]">
                         <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        {/* Regular Events Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8">Happening Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[1,2,3,4].map(i => (
               <div key={i} className="glass-panel p-5 hover:bg-white/5 transition-all group">
                  <div className="h-40 rounded-xl bg-white/5 mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center">
                       <Calendar size={32} className="text-gray-700" />
                    </div>
                  </div>
                  <h4 className="text-white font-bold mb-2">Event Title {i}</h4>
                  <p className="text-xs text-gray-500 mb-4 line-clamp-2">Brief description of the upcoming college event and what to expect...</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">Workshop</span>
                    <button className="text-xs text-white bg-indigo-600/20 hover:bg-indigo-600 px-3 py-1 rounded-lg transition-colors">Register</button>
                  </div>
               </div>
             ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const StatCard = ({ icon, label, value, color }) => {
  const colors = {
    indigo: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    pink: "text-pink-400 bg-pink-500/10 border-pink-500/20"
  };
  
  return (
    <div className={`glass-panel p-6 border-l-4 ${colors[color]} hover:translate-x-1 transition-transform`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`p-2 rounded-lg ${colors[color]}`}>
           {icon}
        </div>
        <span className="text-3xl font-black italic tracking-tighter opacity-20">{value}</span>
      </div>
      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
};

export default StudentDashboard;
