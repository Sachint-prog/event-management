import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How do I register for an event?",
      a: "Simply browse through the 'Explore Events' page. To register, you'll need to create a student account and click the 'Register' button on the specific event page."
    },
    {
      q: "How does the AI Recommendation engine work?",
      a: "Our AI analyzes your selected interests and past event participations to find activities that align with your career goals and hobbies. The more you use the platform, the better it understands you!"
    },
    {
      q: "Can I host my own event?",
      a: "Yes! If you are a club lead or faculty member, sign up as an 'Organizer'. Once approved by the Admin, you can create and manage your own events."
    },
    {
      q: "Are certificates provided automatically?",
      a: "For eligible events, once your attendance is marked by the organizer via QR scan, an AI-generated digital certificate will be available in your 'My Events' dashboard."
    },
    {
      q: "Is there a mobile app?",
      a: "EventFlow.ai is built as a Progressive Web App (PWA), meaning you can install it on your home screen and use it just like a mobile app for easy access."
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <main className="pt-32 pb-20 max-w-4xl mx-auto px-6">
        <header className="text-center mb-16">
           <div className="w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center mx-auto mb-6 text-indigo-400">
              <HelpCircle size={24} />
           </div>
           <h1 className="text-5xl font-black italic tracking-tighter uppercase mb-4">Frequently Asked Questions</h1>
           <p className="text-gray-400 font-medium">Everything you need to know about EventFlow.ai and its smart features.</p>
        </header>

        <div className="space-y-4">
           {faqs.map((faq, idx) => (
             <div key={idx} className={`glass-panel overflow-hidden transition-all duration-300 ${openIndex === idx ? 'border-indigo-500/30 bg-indigo-500/5' : 'hover:bg-white/5'}`}>
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between"
                >
                   <span className="text-lg font-bold italic tracking-tight">{faq.q}</span>
                   <div className="p-2 rounded-lg bg-white/5">
                      {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                   </div>
                </button>
                <AnimatePresence>
                   {openIndex === idx && (
                     <motion.div 
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: 'auto', opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       className="px-6 pb-6 overflow-hidden"
                     >
                        <p className="text-gray-400 leading-relaxed font-medium">
                           {faq.a}
                        </p>
                     </motion.div>
                   )}
                </AnimatePresence>
             </div>
           ))}
        </div>

        <div className="mt-20 p-10 glass-panel bg-indigo-600/5 border-indigo-500/10 flex flex-col md:flex-row items-center justify-between gap-8">
           <div>
              <h3 className="text-2xl font-bold mb-2 italic">Still have questions?</h3>
              <p className="text-gray-400 font-medium">We're here to help you get the most out of our platform.</p>
           </div>
           <button className="flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-lg shadow-indigo-600/20">
              <MessageCircle size={20} /> Contact Support
           </button>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
