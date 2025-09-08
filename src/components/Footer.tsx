import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Mail, Phone, MapPin } from 'lucide-react';
import { FaInstagram, FaTiktok, FaPhone } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang', href: '/tentang' },
    { name: 'Anggota', href: '/anggota' },
    { name: 'Kegiatan', href: '/kegiatan' },
    { name: 'Kontak', href: '/kontak' },
  ];

  const socialLinks = [
    {
      icon: <FaInstagram className="w-4 h-4" />,
      name: 'Instagram',
      href: 'https://www.instagram.com/kobar_sejabodetabek?igsh=MWoyNmJja2hnc25taA==',
    },
    {
      icon: <FaTiktok className="w-4 h-4" />,
      name: 'TikTok',
      href: 'https://www.tiktok.com/@kobar140524?_t=ZS-8zYy8XBgVt6&_r=1',
    },
    {
      icon: <FaPhone className="w-4 h-4" />,
      name: 'Telepon',
      href: 'tel:+6285366829582',
    },
  ];

  const handleWhatsAppContact = () => {
    const phoneNumber = '6282360171945';
    const message = `Halo! Saya tertarik untuk bergabung dengan Komunitas Kobar.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-white/10 dark:bg-gray-800/40 backdrop-blur-md border-t border-white/10 text-sm">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Logo & Deskripsi */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center bg-primary-500 rounded-md">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">Kobar</span>
          </Link>
          <p className="leading-relaxed text-sm">
            Komunitas yang mendukung pertumbuhan dan pengembangan diri untuk meraih potensi maksimal Anda.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-500 transition"

                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigasi & Kontak */}
        <div className="grid grid-cols-2 gap-4">
          {/* Navigasi */}
          <div>
            <h3 className="text-white font-semibold mb-3">Navigasi</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-white transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-white font-semibold mb-3">Kontak</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-400" />
                <button onClick={handleWhatsAppContact} className="hover:text-white transition text-left">
                  +62 823-6017-1945
                </button>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-400" />
                <a href="mailto:hello@kobar-community.com" className="hover:text-white transition">
                  hello@kobar-community.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-4 text-center text-xs px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <span>© {currentYear} Kobar Community. All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
