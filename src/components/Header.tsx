'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0F172A]/80 backdrop-blur-md border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              CostCraft
            </span>
          </Link>

          <nav className="flex gap-8">
            <Link href="/">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-gray-300 hover:text-blue-400"
              >
                Home
              </motion.span>
            </Link>
            <Link href="/about">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-gray-300 hover:text-blue-400"
              >
                About
              </motion.span>
            </Link>
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-gray-300 hover:text-blue-400"
              >
                Contact
              </motion.span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;