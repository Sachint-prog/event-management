import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, BrainCircuit, Users, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="relative overflow-hidden w-full min-h-screen">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/30 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/30 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>



      {/* Hero Section */}
      <main className="pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-indigo-500/30 text-indigo-300 text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            <span>The Future of College Events</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]"
          >
            Supercharge your campus life with <br className="hidden md:block"/>
            <span className="text-gradient">AI-Powered Events</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Discover, register, and manage college events smarter than ever. Let our AI recommend the perfect activities, predict attendance, and write compelling event descriptions automatically.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/events" className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full transition-all hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] flex items-center justify-center gap-2 hover:-translate-y-1">
              Explore Events <ChevronRight className="w-5 h-5" />
            </Link>
            <Link to="/organizer" className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white glass-panel hover:bg-white/10 rounded-full transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
              Create an Event
            </Link>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div id="features" className="mt-32 grid md:grid-cols-3 gap-6 lg:gap-8">
          <FeatureCard 
            icon={<BrainCircuit className="w-8 h-8 text-purple-400" />}
            title="Smart Recommendations"
            description="Our AI learns your interests and past event history to suggest the perfect workshops, hackathons, and seminars just for you."
            delay={0.4}
          />
          <FeatureCard 
            icon={<Calendar className="w-8 h-8 text-indigo-400" />}
            title="Automated Planning"
            description="Organizers can generate professional event descriptions instantly and get AI predictions on expected attendance."
            delay={0.5}
          />
          <FeatureCard 
            icon={<Users className="w-8 h-8 text-pink-400" />}
            title="Intelligent Networking"
            description="Find students with similar interests, join community groups effortlessly, and ask our AI chatbot anything about campus activities."
            delay={0.6}
          />
        </div>
      </main>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="glass-panel p-8 hover:bg-white/10 transition-colors group cursor-default"
    >
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default LandingPage;
