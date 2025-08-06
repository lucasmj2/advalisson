'use client'

import { motion } from 'framer-motion'
import { Scale, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#contato', label: 'Contato' },
  ]

  const services = [
    'Direito tributário',
    'Direito trabalhista',
    'Organização societária',
    'Proteção patrimonial',
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-neutral-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-accent-500/10 to-accent-600/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-accent-500 to-accent-600 p-3 rounded-xl">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-2xl">
                  Dr. Alison Vieira
                </h3>
                <p className="text-neutral-400 text-sm font-medium">
                  Advocacia Especializada
                </p>
              </div>
            </div>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Profissional especializado em Direito Tributário, Trabalhista e 
              Organização Societária, oferecendo soluções completas em proteção patrimonial.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-neutral-800 p-3 rounded-lg hover:bg-gradient-to-r hover:from-accent-500 hover:to-accent-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg mb-6 text-white">
              Links rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-neutral-300 hover:text-accent-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-6 text-white">
              Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <motion.a
                    href="#servicos"
                    whileHover={{ x: 5 }}
                    className="text-neutral-300 hover:text-accent-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg mb-6 text-white">
              Contato
            </h4>
            <div className="space-y-4">
              <motion.a
                href="tel:+5566999824503"
                whileHover={{ x: 5 }}
                className="flex items-center text-neutral-300 hover:text-accent-400 transition-colors duration-200 group"
              >
                <Phone className="h-5 w-5 mr-3 text-accent-500" />
                (66) 99982-4503
              </motion.a>
              <motion.a
                href="mailto:adv.prevelato@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center text-neutral-300 hover:text-accent-400 transition-colors duration-200 group"
              >
                <Mail className="h-5 w-5 mr-3 text-accent-500" />
                adv.prevelato@gmail.com
              </motion.a>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start text-neutral-300 group"
              >
                <MapPin className="h-5 w-5 mr-3 text-accent-500 mt-0.5 flex-shrink-0" />
                <span>
                  Av. dos Tarumãs, 2995<br />
                  Jardim Maringá, Sinop-MT
                </span>
              </motion.div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 p-4 bg-gradient-to-r from-accent-500/20 to-accent-600/20 rounded-lg border border-accent-500/30">
              <p className="text-accent-300 text-sm font-medium mb-1">
                WhatsApp Direto
              </p>
              <p className="text-neutral-300 text-sm">
                Atendimento rápido e personalizado
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-neutral-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-400 text-sm text-center md:text-left">
              <p>© 2024 Dr. Alison Vieira. Todos os direitos reservados.</p>
              <p className="mt-1">
                Advocacia Especializada em Sinop-MT
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-neutral-400">
              <a href="#" className="hover:text-accent-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-accent-400 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-accent-500 to-accent-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </footer>
  )
}

export default Footer
