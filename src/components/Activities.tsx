import React from 'react';
import { Calendar, BookOpen, Users, Trophy, Camera, Clock, MapPin } from 'lucide-react';

const Activities: React.FC = () => {
  const recentActivities = [
    {
      title: "Futsal",
      date: "15 Januari 2025",
      image: "/images/futsalkobar.jpg",
      type: "Olahraga"
    },
    {
      title: "Badminton",
      date: "8 Januari 2025",
      image: "/images/badminton.jpg",
      type: "Olahraga"
    },
    {
      title: "Meeting",
      date: "20 Desember 2024",
      image: "/images/mett up.jpg",
      type: "Evaluasi"
    },
    {
      title: "Kunjungan",
      date: "10-12 Desember 2024",
      image: "/images/kobarr.jpg",
      type: "Kunjungan"
    }
  ];

  return (
    <section id="kegiatan" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Kegiatan <span className="gradient-text">Kobar</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ikuti berbagai kegiatan menarik yang dirancang untuk mengembangkan skill, dan Pengalaman  .
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Dokumentasi Kegiatan</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {recentActivities.map((activity, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover-scale">
                  <div className="relative">
                    <img src={activity.image} alt={activity.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {activity.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2 h-12">{activity.title}</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2 text-primary-600" />
                      <span>{activity.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
