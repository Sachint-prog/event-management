import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, MapPin, ChevronRight, Lock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Technology', 'Cultural', 'Sports', 'Workshops'];

  const publicEvents = [
    {
      id: 1,
      title: "Generative AI Workshop 2024",
      category: "Technology",
      date: "Oct 24",
      venue: "Main Hall",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      isPopular: true
    },
    {
      id: 2,
      title: "Grand Music Night",
      category: "Cultural",
      date: "Oct 28",
      venue: "Open Theatre",
      image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=800",
      isPopular: false
    },
    {
      id: 3,
      title: "Inter-College Cricket League",
      category: "Sports",
      date: "Nov 02",
      venue: "Sports Complex",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800",
      isPopular: true
    },
     {
      id: 4,
      title: "Product Design Sprint",
      category: "Workshops",
      date: "Nov 05",
      venue: "Design Lab",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
      isPopular: false
    }
  ];

  const filteredEvents = filter === 'All' ? publicEvents : publicEvents.filter(e => e.category === filter);

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <main className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-8">
        <header className="mb-16">
           <h1 className="text-5xl font-black italic tracking-tighter uppercase mb-4">Explore Events</h1>
           <p className="text-gray-400 max-w-2xl text-lg font-medium">Browse through all upcoming campus activities. Sign up to get personalized AI recommendations and reserve your spot.</p>
        </header>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 items-center justify-between">
           <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full lg:w-auto">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${
                    filter === cat ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white/5 border-white/10 text-gray-500 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
           </div>
           <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input 
                type="text" 
                placeholder="Search events, clubs, venues..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-sm focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all"
              />
           </div>
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredEvents.map((event, idx) => (
             <motion.div 
               key={event.id}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               className="glass-panel overflow-hidden flex flex-col group border-indigo-500/0 hover:border-indigo-500/20"
             >
                <div className="h-56 relative overflow-hidden">
                   <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                   {event.isPopular && (
                     <div className="absolute top-4 left-4 px-3 py-1 bg-indigo-600 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                        Trending 🔥
                     </div>
                   )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                   <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-3 flex items-center justify-between">
                      {event.category}
                      <span className="text-gray-600">Free Entry</span>
                   </div>
                   <h3 className="text-2xl font-black mb-6 leading-tight flex-1">{event.title}</h3>
                   
                   <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3 text-sm text-gray-400 font-medium">
                         <Calendar size={18} className="text-indigo-400" /> {event.date}, 2024
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-400 font-medium">
                         <MapPin size={18} className="text-indigo-400" /> {event.venue}
                      </div>
                   </div>

                   <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                      <Link to={`/event/${event.id}`} className="text-xs font-black uppercase tracking-tighter hover:text-indigo-400 transition-colors flex items-center gap-1 group/link">
                         View Details <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                      <Link to="/login" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                        <Lock size={12} /> Register
                      </Link>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Upsell Banner */}
        <div className="mt-20 glass-panel p-10 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-indigo-500/20 text-center relative overflow-hidden">
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600/20 blur-3xl rounded-full"></div>
           <Sparkles className="mx-auto mb-6 text-indigo-400" size={40} />
           <h2 className="text-3xl font-black italic tracking-tighter uppercase mb-4">Unlock the Full Experience</h2>
           <p className="text-gray-400 max-w-xl mx-auto mb-8 font-medium">Sign up today to get AI-powered event recommendations personally tailored to your interests, connect with peers, and download your entry certificates.</p>
           <Link to="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-full font-black uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-all">
             Start Your Smart Journey <ChevronRight size={20} />
           </Link>
        </div>
      </main>
    </div>
  );
};

export default Events;
