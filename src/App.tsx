import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MembersPage from './pages/MembersPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gray-50 font-poppins relative overflow-x-hidden">
      <Header />
      <main>
           <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="/anggota" element={<MembersPage />} />
          <Route path="/kegiatan" element={<ActivitiesPage />} />
          <Route path="/kontak" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
