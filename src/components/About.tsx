import React from 'react';
import { Target, Users, Lightbulb, Heart } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary-600" />,
      title: "Fokus pada Tujuan",
      description: " membantu setiap anggota untuk menetapkan dan mencapai tujuan personal dan profesional mereka."
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: "Kolaborasi",
      description: "Bersama-sama kita lebih kuat. Kami percaya pada kekuatan komunitas dalam mencapai kesuksesan."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary-600" />,
      title: "Inovasi",
      description: "Selalu mencari cara baru untuk berkembang dan berinovasi dalam setiap aspek kehidupan."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary-600" />,
      title: "Kepedulian",
      description: "Kami peduli dengan pertumbuhan dan kesejahteraan setiap anggota komunitas."
    }
  ];

  return (
    <section id="tentang" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Tentang <span className="gradient-text">Kobar</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kobar adalah komunitas yang didirikan dengan visi menciptakan lingkungan yang mendukung pertumbuhan personal dan profesional setiap anggotanya.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Misi Kami</h3>
                <p className="text-gray-600 leading-relaxed">
                  Menciptakan ekosistem pembelajaran dan pengembangan diri yang inklusif, di mana setiap individu dapat tumbuh, berbagi pengalaman, dan meraih potensi maksimal mereka bersama-sama.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Visi Kami</h3>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi komunitas pengembangan diri terdepan yang mampu menghasilkan individu-individu unggul dan berkontribusi positif bagi masyarakat.
                </p>
              </div>
            </div>
            <div className="relative hover-scale">
              <img 
                src="/images/kolokolo.jpg" 
                alt="Tim Komunitas Kobar" 
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Nilai-Nilai Kami</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center group-hover:from-primary-500 group-hover:to-primary-600 transition-all duration-300">
                      <div className="text-primary-600 group-hover:text-white transition-colors duration-300">
                        {value.icon}
                      </div>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
