import React from 'react';
import { Users, UserCheck, Crown, } from 'lucide-react';

const Members: React.FC = () => {
  const memberCategories = [
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: "Anggota Umum",
      count: "80+",
      description: "Individu yang bergabung untuk pengembangan diri.",
    },
    {
      icon: <UserCheck className="w-8 h-8 text-secondary-600" />,
      title: "Anggota Aktif",
      count: "80+",
      description: "Anggota yang konsisten berpartisipasi dalam kegiatan komunitas.",
    },
    {
      icon: <Crown className="w-8 h-8 text-accent-600" />,
      title: "BPK (Badan Pengurus Komunitas)",
      count: "10+",
      description: "Profesional berpengalaman yang membimbing anggota lain.",
    }
  ];

  const featuredMembers = [
    {
      name: "Wily Hutasoit",
      role: "Ketua",
      avatar: "/images/ketua.jpg",
    },
    {
      name: "Lika Purba",
      role: "Bendahara",
      avatar: "/images/bendahara.jpg",
    },
    {
      name: "Yulanda Manullang",
      role: "Sekertaris",
      
      avatar: "/images/sekertaris.jpg",
    },
    {
      name: "Icha Napitu",
      role: "Humas",
    
      avatar: "/images/humas.jpg",
    }
  ];

  return (
    <section id="anggota" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Anggota <span className="gradient-text">Kobar</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bergabung dengan komunitas profesional yang beragam dan saling mendukung dalam perjalanan pengembangan karir dan diri.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {memberCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover-scale">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-3xl font-bold text-primary-600 mb-3">{category.count}</p>
                </div>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Anggota Unggulan Kami</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredMembers.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2 text-center hover-scale">
                  <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary-100 group-hover:border-primary-300 transition-colors duration-300" />
                  <h4 className="font-semibold text-gray-900 text-lg">{member.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                  <span className="text-xs bg-secondary-100 text-secondary-700 font-medium px-3 py-1 rounded-full">{member.achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
