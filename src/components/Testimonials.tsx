import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Wijaya",
      role: "UI/UX Designer",
      company: "Tech Startup",
      avatar: "https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/4f46e5/ffffff?text=SW",
      content: "Bergabung dengan Kobar adalah keputusan terbaik dalam karir saya. Mentoring yang saya dapatkan membantu saya berkembang dari junior menjadi senior designer dalam waktu singkat.",
      rating: 5
    },
    {
      name: "Rizki Pratama",
      role: "Software Engineer",
      company: "Fintech Company",
      avatar: "https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/22c55e/ffffff?text=RP",
      content: "Komunitas yang luar biasa supportif! Program-program yang ada sangat berkualitas dan networking yang saya dapat membuka banyak peluang karir baru.",
      rating: 5
    },
    {
      name: "Maya Sari",
      role: "Digital Marketer",
      company: "E-commerce",
      avatar: "https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/f59e0b/ffffff?text=MS",
      content: "Workshop dan event yang diadakan Kobar selalu up-to-date dengan tren industri. Saya belajar banyak hal baru yang langsung bisa diaplikasikan di pekerjaan.",
      rating: 5
    },
    {
      name: "Andi Kusuma",
      role: "Product Manager",
      company: "Tech Unicorn",
      avatar: "https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/8b5cf6/ffffff?text=AK",
      content: "Platform digital Kobar sangat memudahkan akses ke materi pembelajaran. Saya bisa belajar kapan saja dan di mana saja sesuai dengan jadwal saya.",
      rating: 5
    },
    {
      name: "Linda Permata",
      role: "Data Scientist",
      company: "AI Startup",
      avatar: "https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/ef4444/ffffff?text=LP",
      content: "Study group di Kobar membantu saya memahami konsep-konsep complex dalam data science. Peer learning disini sangat efektif dan menyenangkan.",
      rating: 5
    },
    {
      name: "Budi Santoso",
      role: "Business Analyst",
      company: "Consulting Firm",
      avatar: "https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/06b6d4/ffffff?text=BS",
      content: "Achievement program di Kobar sangat memotivasi. Badge dan reward yang saya dapatkan menjadi bukti konkret dari progress yang telah saya capai.",
      rating: 5
    }
  ];

  return (
    <section id="testimoni" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Apa Kata <span className="text-primary-600">Mereka</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dengar langsung pengalaman dan testimoni dari anggota komunitas Kobar 
              yang telah merasakan manfaatnya.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary-200 group-hover:text-primary-600 transition-colors duration-300" />
                </div>

                {/* Content */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                  4.9/5
                </div>
                <p className="text-gray-600">Rating Rata-rata</p>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                  500+
                </div>
                <p className="text-gray-600">Anggota Puas</p>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                  95%
                </div>
                <p className="text-gray-600">Tingkat Kepuasan</p>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                  200+
                </div>
                <p className="text-gray-600">Testimoni Positif</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
