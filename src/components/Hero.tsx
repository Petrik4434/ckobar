import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
   <section
  id="beranda"
   className="relative bg-hero-pattern sm:bg-hero-pattern bg-hero-mobile bg-cover bg-center bg-no-repeat min-h-screen"
>

      <div className="absolute inset-0 bg-gradient-to-b from-primary-800/80 via-primary-700/50 to-gray-50/0"></div>
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-secondary-300" />
              <span className="text-white text-sm font-medium">Komunitas Naposo Batak Rantau</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
             Welcome To  
              <span className="block text-secondary-300 mt-2">
                Kobar
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
              Temukan lingkungan yang positif dan suportif untuk belajar, berbagi, dan bertumbuh menjadi versi terbaik dari diri Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/kontak"
                className="w-full sm:w-auto bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-8 py-4 rounded-full font-semibold hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span>Hubungi Kami</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/tentang"
                className="w-full sm:w-auto bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
