import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { BrainCircuit, Menu, X, ChevronRight, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/events' },
    { name: 'AI Demo', path: '/demo' },
    { name: 'FAQ', path: '/faq' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${
      scrolled ? 'bg-black/40 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transition-all">
               <BrainCircuit className="text-white" size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white uppercase italic">EventFlow<span className="text-indigo-400">.ai</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest hover:text-indigo-400 transition-colors ${
                  location.pathname === link.path ? 'text-indigo-400' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="h-4 w-px bg-white/10 mx-2"></div>

            {user ? (
              <div className="flex items-center gap-4">
                 <Link to="/dashboard" className="text-sm font-bold text-white hover:text-indigo-400 transition-all flex items-center gap-2">
                    <User size={18} /> My Dashboard
                 </Link>
                 <button 
                  onClick={logout}
                  className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-all"
                 >
                    Logout
                 </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/login" className="text-sm font-bold text-gray-300 hover:text-white transition-colors">Login</Link>
                <Link to="/signup" className="px-6 py-3 rounded-full bg-indigo-600 text-xs font-bold uppercase tracking-widest text-white hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-all flex items-center gap-2">
                   Get Started <ChevronRight size={16} />
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
             {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d1117] border-b border-white/10 overflow-hidden"
          >
            <div className="p-6 space-y-4">
               {navLinks.map((link) => (
                 <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className="block text-xl font-bold text-white hover:text-indigo-400"
                 >
                   {link.name}
                 </Link>
               ))}
               <div className="pt-4 border-t border-white/5 flex flex-col gap-4">
                 <Link to="/login" className="text-center py-4 rounded-2xl bg-white/5 font-bold uppercase tracking-widest text-sm">Login</Link>
                 <Link to="/signup" className="text-center py-4 rounded-2xl bg-indigo-600 font-bold uppercase tracking-widest text-sm">Sign Up</Link>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
