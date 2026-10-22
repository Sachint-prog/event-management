import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white">

      <main className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-8">
        <header className="text-center mb-20">
           <h1 className="text-6xl font-black italic tracking-tighter uppercase mb-4 leading-none">Get In Touch</h1>
           <p className="text-gray-400 font-medium text-lg">Have feedback or a partnership inquiry? We'd love to hear from you.</p>
        </header>

        <div className="grid lg:grid-cols-5 gap-12">
           {/* Info Cards */}
           <div className="lg:col-span-2 space-y-6">
              <ContactInfoCard 
                icon={<Mail className="text-indigo-400" />} 
                title="Email Us" 
                detail="support@eventflow.ai" 
              />
              <ContactInfoCard 
                icon={<Phone className="text-purple-400" />} 
                title="Call Us" 
                detail="+91 (011) 2450-8888" 
              />
              <ContactInfoCard 
                icon={<MapPin className="text-indigo-400" />} 
                title="Location" 
                detail="Block C, Tech Hub, East Campus" 
              />
              <div className="p-8 glass-panel bg-indigo-600/5 mt-10 border-indigo-500/20">
                 <h4 className="text-lg font-bold mb-4 italic tracking-tight">Hours of Operation</h4>
                 <div className="space-y-2 text-sm text-gray-500 font-medium">
                    <p className="flex justify-between"><span>Mon - Fri</span> <span>9:00 AM - 6:00 PM</span></p>
                    <p className="flex justify-between"><span>Sat</span> <span>10:00 AM - 2:00 PM</span></p>
                 </div>
              </div>
           </div>

           {/* Form */}
           <div className="lg:col-span-3">
              <div className="glass-panel p-10 h-full">
                 <form className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Your Name</label>
                          <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all placeholder:text-gray-700" placeholder="John Doe" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Email Address</label>
                          <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all placeholder:text-gray-700" placeholder="john@college.edu" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Message Subject</label>
                       <select className="w-full bg-[#0d1117] border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500/50 outline-none appearance-none font-medium">
                          <option>General Inquiry</option>
                          <option>Event Bug Report</option>
                          <option>Club Collaboration</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Your Message</label>
                       <textarea rows={6} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all resize-none placeholder:text-gray-700" placeholder="How can we help you today?"></textarea>
                    </div>
                    <button className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-indigo-600/20 transition-all flex items-center justify-center gap-3">
                       <Send size={18} /> Send Message
                    </button>
                 </form>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
};

const ContactInfoCard = ({ icon, title, detail }) => (
  <div className="glass-panel p-6 flex items-center gap-6">
     <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
        {icon}
     </div>
     <div>
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{title}</p>
        <p className="font-bold text-white">{detail}</p>
     </div>
  </div>
);

export default Contact;
