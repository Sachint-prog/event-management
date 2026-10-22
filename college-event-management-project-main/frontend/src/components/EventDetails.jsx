import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Users, 
  ArrowLeft, 
  Share2, 
  Sparkles,
  Clock,
  CheckCircle2,
  QrCode,
  X
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { Link, useParams } from 'react-router-dom';

const EventDetails = () => {
  const { id } = useParams();
  const [showTicket, setShowTicket] = React.useState(false);
  
  // Mock data for the demonstration
  const event = {
    title: "Generative AI Workshop 2024",
    category: "Technology",
    date: "Thursday, October 24, 2024",
    time: "2:00 PM - 5:00 PM",
    venue: "Main Auditorium, East Campus",
    organizer: "AI & Robotics Club",
    description: "Join us for an immersion into the world of Generative AI. This workshop will cover the fundamentals of LLMs, Diffusion models, and how to build your first AI-powered application. Participants will get hands-on experience with state-of-the-art tools.",
    aiInsight: "This event is highly popular among students in your department. 85 students from CS have already registered.",
    stats: {
      total: 128,
      capacity: 200,
      trending: true
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      {/* Hero Header */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600" 
          className="w-full h-full object-cover opacity-50"
          alt="Banner"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent"></div>
        
        <div className="absolute top-8 left-8">
           <Link to="/dashboard" className="glass-panel p-2 flex items-center gap-2 hover:bg-white/10 transition-colors">
              <ArrowLeft size={20} />
              <span className="text-sm font-medium pr-2">Back to Dashboard</span>
           </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 -mt-32 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-indigo-600 text-[10px] font-bold uppercase tracking-widest">{event.category}</span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles size={12} /> AI Recommended
                  </span>
                  {event.stats.trending && (
                     <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-bold uppercase tracking-widest">Trending 🔥</span>
                  )}
                </div>
                <h1 className="text-5xl font-black mb-4 leading-tight">{event.title}</h1>
                <div className="flex items-center gap-2 text-indigo-400 font-medium">
                   <Users size={18} />
                   <span>Organized by {event.organizer}</span>
                </div>
              </div>

              <div className="glass-panel p-8 bg-indigo-600/5 border-indigo-500/10 flex items-start gap-4">
                 <div className="p-3 bg-indigo-600 rounded-xl">
                    <Sparkles className="text-white" size={24} />
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-white mb-1">AI Recommendation Insight</h3>
                    <p className="text-sm text-gray-400 leading-relaxed italic">"{event.aiInsight}"</p>
                 </div>
              </div>

              <div className="space-y-4">
                 <h2 className="text-2xl font-bold border-l-4 border-indigo-600 pl-4">About the Event</h2>
                 <p className="text-gray-400 leading-relaxed text-lg">
                   {event.description}
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                 <div className="glass-panel p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400">
                       <Calendar size={24} />
                    </div>
                    <div>
                       <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Date</p>
                       <p className="font-bold">{event.date}</p>
                    </div>
                 </div>
                 <div className="glass-panel p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400">
                       <Clock size={24} />
                    </div>
                    <div>
                       <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Time</p>
                       <p className="font-bold">{event.time}</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar / Register */}
          <div className="space-y-8">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="glass-panel p-8 sticky top-8 border-indigo-500/20"
            >
               <div className="flex justify-between items-end mb-6">
                  <div>
                     <p className="text-[10px] text-gray-500 font-black uppercase tracking-tighter mb-1">Availability</p>
                     <p className="text-3xl font-bold text-white">{event.stats.capacity - event.stats.total} <span className="text-sm text-gray-500 font-medium">Slots left</span></p>
                  </div>
                  <div className="text-right">
                     <p className="text-xs font-bold text-green-500 flex items-center gap-1">
                        <CheckCircle2 size={14} /> Open
                     </p>
                  </div>
               </div>

               <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-8">
                  <div className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 w-3/4 rounded-full"></div>
               </div>

               <button 
                onClick={() => setShowTicket(true)}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(79,70,229,0.4)] mb-4"
               >
                  Register / View Ticket
               </button>
               
               <button className="w-full py-4 border border-white/10 hover:bg-white/5 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                  <Share2 size={18} /> Share Event
               </button>

               <div className="mt-8 pt-8 border-t border-white/5">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Location</h4>
                  <div className="flex items-start gap-3">
                     <MapPin className="text-indigo-400 mt-1" size={20} />
                     <p className="text-sm text-gray-400 leading-relaxed">{event.venue}</p>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Ticket Modal */}
      {showTicket && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="glass-panel max-w-sm w-full p-8 relative"
           >
              <button 
                onClick={() => setShowTicket(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white"
              >
                 <X size={20} />
              </button>

              <div className="text-center mb-8">
                 <h3 className="text-xl font-bold mb-1 italic tracking-tight">Your Digital Entry</h3>
                 <p className="text-xs text-gray-500 uppercase font-black tracking-widest leading-none">Event: {event.title}</p>
              </div>

              <div className="bg-white p-6 rounded-2xl flex justify-center mb-8 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                 <QRCodeSVG value={`ticket-${id}-parth-sarthi`} size={200} />
              </div>

              <div className="space-y-4">
                 <div className="flex justify-between border-b border-white/5 pb-2 text-sm">
                    <span className="text-gray-500">Attendee</span>
                    <span className="font-bold">Parth Sarthi</span>
                 </div>
                 <div className="flex justify-between border-b border-white/5 pb-2 text-sm">
                    <span className="text-gray-500">ID</span>
                    <span className="font-mono text-xs">#TGT-492-XPA</span>
                 </div>
              </div>

              <p className="mt-8 text-center text-[10px] text-gray-500 italic">✨ Scan this QR at the venue entrance for automated check-in.</p>
           </motion.div>
        </div>
      )}
    </div>
  );
};

export default EventDetails;
