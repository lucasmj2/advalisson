'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Award, Users, Clock } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  }

  const stats = [
    { icon: Award, value: 'FASIPE', label: 'Formação Jurídica' },
    { icon: Users, value: 'FACIBA', label: 'Especialização Tributária' },
    { icon: Clock, value: 'FAVENI', label: 'Pós Direito Trabalhista' },
  ]

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent-200/30 to-accent-300/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-neutral-300/20 to-neutral-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-medium border border-accent-200">
              <Award className="w-4 h-4 mr-2" />
              Advocacia de Excelência
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-neutral-800 mb-6 leading-tight"
          >
            <span className="block">Defendendo seus</span>
            <span className="gradient-text">Direitos</span>
            <span className="block">com excelência</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Advogado especialista em direito tributário, trabalhista e organização societária, 
            oferecendo proteção patrimonial e soluções jurídicas completas em Sinop-MT.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              href="https://wa.me/5566999824503?text=Olá! Gostaria de agendar uma consulta jurídica."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary group inline-flex items-center"
            >
              WhatsApp Direto
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="#servicos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Conheça os Serviços
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-neutral-200/50 hover-lift"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-r from-accent-500 to-accent-600 p-3 rounded-full mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="text-3xl font-bold text-neutral-800 mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-neutral-600 font-medium text-center">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neutral-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
