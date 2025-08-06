'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Scale, Phone, Mail } from 'lucide-react'
import React from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="bg-gradient-to-r from-accent-500 to-accent-600 p-2 rounded-lg">
              <Scale className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-serif font-bold text-xl text-neutral-800">
                Dr. Alison Vieira
              </h1>
              <p className="text-xs text-neutral-600 font-medium">
                Advocacia Especializada
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-neutral-700 hover:text-accent-500 font-medium transition-colors duration-200 animated-underline"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="tel:+5566999824503"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-neutral-600 hover:text-accent-500 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">(66) 99982-4503</span>
            </motion.a>
            <motion.a
              href="mailto:adv.prevelato@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-neutral-600 hover:text-accent-500 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm font-medium">Contato</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="block text-neutral-700 hover:text-accent-500 font-medium py-2 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-4 border-t border-neutral-200 space-y-3">
                <a
                  href="tel:+5566999824503"
                  className="flex items-center space-x-2 text-neutral-600 hover:text-accent-500 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-medium">(66) 99982-4503</span>
                </a>
                <a
                  href="mailto:adv.prevelato@gmail.com"
                  className="flex items-center space-x-2 text-neutral-600 hover:text-accent-500 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span className="text-sm font-medium">adv.prevelato@gmail.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
