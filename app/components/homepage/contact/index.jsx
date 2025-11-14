'use client';
// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';
import { motion } from 'framer-motion';

function ContactSection() {
  const infoCards = [
    {
      id: 1,
      icon: <MdAlternateEmail size={36} />,
      label: personalData.email,
      gradient: 'from-pink-500 to-violet-600'
    },
    {
      id: 2,
      icon: <IoMdCall size={36} />,
      label: personalData.phone,
      gradient: 'from-green-400 to-blue-500'
    },
    {
      id: 3,
      icon: <CiLocationOn size={36} />,
      label: personalData.address,
      gradient: 'from-yellow-400 to-orange-500'
    }
  ];

  const socialLinks = [
    { href: personalData.github, icon: <IoLogoGithub size={40} />, gradient: 'from-gray-400 to-gray-700' },
    { href: personalData.linkedIn, icon: <BiLogoLinkedin size={40} />, gradient: 'from-blue-400 to-blue-700' },
    { href: personalData.twitter, icon: <FaXTwitter size={40} />, gradient: 'from-cyan-400 to-blue-500' },
  ];

  return (
    <div id="contact" className="relative mt-24 text-white overflow-hidden">
      {/* Section title for desktop */}
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8 z-10">
        <span className="bg-[#1a1443] text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      {/* Background floating blobs */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-pink-500/20 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-violet-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 lg:px-16">
        {/* Contact Form */}
        <ContactForm />

        {/* Contact Info */}
        <div className="flex flex-col gap-6 lg:gap-10">
          {infoCards.map(card => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: card.id * 0.1 }}
              className={`group flex items-center gap-4 p-4 rounded-2xl backdrop-blur-md bg-[#10172d]/70 border border-[#353a52] shadow-lg cursor-pointer transition-all duration-300 hover:border-pink-500 hover:shadow-[0_0_20px_rgba(255,105,180,0.5)]`}
            >
              <div className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r ${card.gradient} text-white shadow-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,105,180,0.5)]`}>
                {card.icon}
              </div>
              <p className="text-white font-medium break-all transition-colors duration-300 group-hover:text-pink-400">
                {card.label}
              </p>
            </motion.div>
          ))}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-5 lg:gap-8 mt-6"
          >
            {socialLinks.map((social, index) => (
              <Link key={index} target="_blank" href={social.href}>
                <div className={`group relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r ${social.gradient} shadow-lg text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]`}>
                  {social.icon}
                  <div className="absolute w-full h-full rounded-full opacity-20 bg-white blur-xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating blob animation */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(15px, -10px) scale(1); }
          66% { transform: translate(-15px, 10px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
}

export default ContactSection;
