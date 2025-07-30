import React from 'react';
import { BookOpen, MessageCircle, Calendar, Award, Users, Laptop } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="w-10 h-10 text-primary-600" />,
      title: "Program Pembelajaran",
      description: "Workshop, seminar, dan kelas online yang dirancang untuk mengembangkan skill dan pengetahuan Anda.",
      benefits: ["Workshop mingguan", "Materi eksklusif", "Sertifikat resmi"]
    },
    {
      icon: <MessageCircle className="w-10 h-10 text-primary-600" />,
      title: "Mentoring & Coaching",
      description: "Dapatkan bimbingan langsung dari mentor berpengalaman di berbagai bidang.",
      benefits: ["Mentor ahli", "Sesi 1-on-1", "Konsultasi gratis"]
    },
    {
      icon: <Calendar className="w-10 h-10 text-primary-600" />,
      title: "Event & Networking",
      description: "Bergabung dalam berbagai event menarik dan perluas jaringan profesional Anda.",
      benefits: ["Event bulanan", "Networking session", "Job fair exclusive"]
    },
    {
      icon: <Award className="w-10 h-10 text-primary-600" />,
      title: "Achievement Program",
      description: "Sistem pencapaian yang memotivasi dan mengakui progress Anda dalam komunitas.",
      benefits: ["Badge prestasi", "Leaderboard", "Reward menarik"]
    },
    {
      icon: <Users className="w-10 h-10 text-primary-600" />,
      title: "Study Groups",
      description: "Bergabung dengan kelompok belajar sesuai minat dan tingkatkan skill bersama.",
      benefits: ["Grup fokus", "Peer learning", "Project collaboration"]
    },
    {
      icon: <Laptop className="w-10 h-10 text-primary-600" />,
      title: "Digital Platform",
      description: "Platform online yang memudahkan akses materi, diskusi, dan tracking progress.",
      benefits: ["Mobile app", "Cloud storage", "24/7 access"]
    }
  ];

  return (
    <section id="fitur" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Fitur & <span className="text-primary-600">Keunggulan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nikmati berbagai fitur dan program unggulan yang dirancang khusus untuk 
              mendukung perjalanan pengembangan diri Anda.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary-100"
              >
                {/* Icon */}
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                    <div className="group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-primary-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Siap Untuk Memulai Perjalanan Anda?
            </h3>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan anggota lainnya dan mulai transformasi diri Anda hari ini.
            </p>
            <button 
              onClick={() => document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-300 inline-flex items-center space-x-2"
            >
              <span>Bergabung Sekarang</span>
              <Award className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
