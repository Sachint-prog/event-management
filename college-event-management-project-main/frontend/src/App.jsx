import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import OrganizerDashboard from './components/OrganizerDashboard';
import StudentDashboard from './components/StudentDashboard';
import ChatbotWidget from './components/ChatbotWidget';
import EventDetails from './components/EventDetails';
import Networking from './components/Networking';
import Leaderboard from './components/Leaderboard';
import AdminPanel from './components/AdminPanel';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Events from './components/Events';
import AIDemo from './components/AIDemo';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import About from './components/About';

const AppContent = () => {
  const location = useLocation();
  const hideNavbarPaths = ['/dashboard', '/organizer', '/admin', '/leaderboard', '/networking'];
  const shouldHideNavbar = hideNavbarPaths.some(path => location.pathname.startsWith(path));

  return (
    <div className="min-h-screen bg-[#030712] relative">
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/demo" element={<AIDemo />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/dashboard" element={
          <ProtectedRoute allowedRoles={['student', 'admin']}>
            <StudentDashboard />
          </ProtectedRoute>
        } />
        
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/networking" element={
          <ProtectedRoute allowedRoles={['student', 'admin']}>
            <Networking />
          </ProtectedRoute>
        } />
        
        <Route path="/leaderboard" element={
          <ProtectedRoute allowedRoles={['student', 'admin']}>
            <Leaderboard />
          </ProtectedRoute>
        } />
        
        <Route path="/admin" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminPanel />
          </ProtectedRoute>
        } />
        
        <Route path="/organizer" element={
          <ProtectedRoute allowedRoles={['organizer', 'admin']}>
            <OrganizerDashboard />
          </ProtectedRoute>
        } />
      </Routes>
      <ChatbotWidget />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
