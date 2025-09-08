import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = '6285366829582';
    const message = `Halo! Saya tertarik untuk bergabung dengan Komunitas Kobar. Mohon informasi lebih lanjut.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="kontak" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Hubungi <span className="gradient-text">Kami</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Punya pertanyaan atau siap untuk bergabung? Hubungi kami melalui WhatsApp untuk respon cepat atau isi form di bawah ini.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-primary-600 mr-4" />
                    <span className="text-gray-700">+6285366829582</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-primary-600 mr-4" />
                    <span className="text-gray-700">hello@kobar-community.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-primary-600 mr-4" />
                    <span className="text-gray-700">Jakarta, Indonesia</span>
                  </div>
                </div>
              </div>
              <div className="bg-green-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-3">Cara Tercepat Menghubungi</h3>
                <p className="text-green-100 mb-4">Klik tombol di bawah untuk langsung terhubung dengan tim kami via WhatsApp.</p>
                <button onClick={handleWhatsAppContact} className="w-full bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300 flex items-center justify-center space-x-2 hover-scale">
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat via WhatsApp</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-12 flex flex-col items-center justify-center h-full">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Pesan Terkirim!</h4>
                  <p className="text-gray-600">Terima kasih telah menghubungi kami. Tim kami akan segera merespon pesan Anda.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Kirim Pesan</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="Nama Anda" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="nama@email.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Nomor WhatsApp</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="+62 812-3456-7890" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="Tulis pesan Anda di sini..."></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 disabled:opacity-50 transition-all duration-300 flex items-center justify-center space-x-2">
                    {isSubmitting ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <Send className="w-5 h-5" />}
                    <span>{isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
