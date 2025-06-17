import React from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg className="w-full h-full animate-pulse opacity-10" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#0ff', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#00f', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad1)" />
          <circle cx="20%" cy="30%" r="100" fill="#00ffff33">
            <animate attributeName="cx" values="20%;80%;20%" dur="12s" repeatCount="indefinite" />
          </circle>
          <circle cx="80%" cy="70%" r="80" fill="#00ffff22">
            <animate attributeName="cy" values="70%;20%;70%" dur="10s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      <div className="relative z-10 text-center space-y-8 p-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold tracking-wide"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}>
          Indo-CTI Platform
        </motion.h1>

        <motion.div 
          className="w-full max-w-xl"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5 }}>
          <input 
            type="text"
            className="w-full p-4 text-lg rounded-2xl shadow-lg border-none focus:ring-2 focus:ring-cyan-400 bg-gray-900 text-white placeholder-gray-400"
            placeholder="Gak usah di search, belom jadi :P" 
          />
        </motion.div>

        <motion.div 
          className="flex space-x-6 justify-center text-sm uppercase tracking-wide"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 1 }}>
          <a href="/contribute" className="text-cyan-400 hover:text-white transition-colors">Contribute</a>
          <a href="/about" className="text-cyan-400 hover:text-white transition-colors">About</a>
          <a href="/contact" className="text-cyan-400 hover:text-white transition-colors">Contact</a>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="mt-10 text-sm text-gray-500"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 1.5 }}>
          Built with 💙 for <a href="https://cdef.id/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">CDEF Indonesia</a>.
        </motion.div>
      </div>
    </div>
  );
}