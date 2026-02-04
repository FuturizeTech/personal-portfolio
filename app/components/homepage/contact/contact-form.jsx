'use client';
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { translations } from "@/utils/translations";

const GlowCard = dynamic(() => import("@/app/components/helper/glow-card"), { ssr: false });

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    try {
      setIsLoading(true);
      const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/contact`, userInput);
      console.log("response: ", response);
      toast.success(response.data.message || "Message sent successfully!");
      setUserInput({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GlowCard identifier="contact-form">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative p-6 lg:p-10 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-500 shadow-lg bg-transparent"
      >
        {/* Blur overlay */}
        <Image
          src="/blur-23.svg"
          alt="Blur overlay"
          width={1080}
          height={200}
          className="absolute bottom-0 opacity-80 rounded-xl"
        />

        {/* Background floating blobs */}
        <div className="absolute -top-10 -left-10 w-36 h-36 bg-pink-500/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-violet-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>

        <div className="relative z-10">
          <p className="font-bold mb-3 text-[#f216e0] text-xl uppercase tracking-wider text-center lg:text-left">{translations.contact.contactMe}</p>
          <p className="text-sm text-[#d3d8e8] text-center lg:text-left mb-3">
            {translations.contact.description}
          </p>

          <div className="flex flex-col gap-5">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-white font-medium">{translations.contact.yourName}</label>
              <input
                type="text"
                maxLength="100"
                required
                value={userInput.name}
                onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
                onBlur={checkRequired}
                className="bg-[#10172d] w-full border border-[#353a52] rounded-xl px-2 py-2 text-white focus:border-[#16f2b3] focus:ring-1 focus:ring-[#16f2b3] transition-all duration-300 placeholder:text-gray-400"
                placeholder={translations.contact.placeholders.name}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-white font-medium">{translations.contact.yourEmail}</label>
              <input
                type="email"
                maxLength="100"
                required
                value={userInput.email}
                onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
                onBlur={() => setError({ ...error, email: !isValidEmail(userInput.email) })}
                className="bg-[#10172d] w-full border border-[#353a52] rounded-xl px-2 py-2 text-white focus:border-[#16f2b3] focus:ring-1 focus:ring-[#16f2b3] transition-all duration-300 placeholder:text-gray-400"
                placeholder={translations.contact.placeholders.email}
              />
              {error.email && <p className="text-red-400 text-sm">{translations.contact.invalidEmail}</p>}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-white font-medium">{translations.contact.yourMessage}</label>
              <textarea
                rows={5}
                maxLength="500"
                required
                value={userInput.message}
                onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
                onBlur={checkRequired}
                className="bg-[#10172d] w-full border border-[#353a52] rounded-xl px-4 py-2 text-white focus:border-[#16f2b3] focus:ring-1 focus:ring-[#16f2b3] transition-all duration-300 placeholder:text-gray-400 resize-none"
                placeholder={translations.contact.placeholders.message}
              />
            </div>

            {error.required && <p className="text-red-400 text-sm text-center">{translations.contact.requiredFields}</p>}

            <button
              onClick={handleSendMail}
              disabled={isLoading}
              className="relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white font-semibold uppercase tracking-wide py-2 px-4 flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              {isLoading ? translations.contact.sending : <>
                {translations.contact.sendMessage}
                <TbMailForward size={20} />
              </>}
              <span className="absolute inset-0 bg-white/10 rounded-full opacity-0 hover:opacity-30 transition-all duration-500"></span>
            </button>
          </div>
        </div>

        {/* Floating blob animation */}
        <style jsx>{`
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(15px, -10px) scale(1.1); }
            66% { transform: translate(-15px, 10px) scale(0.9); }
          }
          .animate-blob { animation: blob 7s infinite ease-in-out; }
          .animation-delay-2000 { animation-delay: 2s; }
        `}</style>
      </motion.div>
    </GlowCard>
  );
}

export default ContactForm;