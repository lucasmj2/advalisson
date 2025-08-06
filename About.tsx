'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Heart, Shield, Target } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const values = [
    {
      icon: Heart,
      title: 'Compromisso pessoal',
      description: 'Cada caso é tratado com dedicação exclusiva e atenção aos detalhes que fazem a diferença.',
    },
    {
      icon: Shield,
      title: 'Proteção integral',
      description: 'Defesa robusta dos seus direitos com estratégias jurídicas personalizadas e eficazes.',
    },
    {
      icon: Target,
      title: 'Resultados concretos',
      description: 'Foco em soluções práticas que geram resultados tangíveis para nossos clientes.',
    },
  ]

  const achievements = [
    'Formado em ciências jurídicas pela Fasipe - Faculdade de Sinop',
    'Especialista em direito tributário pela Faciba - Faculdade de Ciências da Bahia',
    'Pós-graduado em direito do trabalho pelo Grupo Educacional Faveni',
    'Especialista em estruturação e planejamento patrimonial',
    'Profissional com vasta experiência em organização societária',
  ]

  return (
    <section id="sobre" className="py-20 bg-white relative overflow-hidden">
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
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-accent-200/20 to-accent-300/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            Sobre o Dr. Alison Vieira
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-6">
            Advocacia que <span className="gradient-text">Transforma Vidas</span>
          </h2>
          
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Profissional com conhecimento aprofundado em estruturação, planejamento, gestão e 
            proteção patrimonial e organização societária, especializado em Direito Tributário 
            e Trabalhista.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-neutral-800 mb-6">
                Minha missão
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Acredito que cada cliente merece não apenas representação legal, mas um verdadeiro 
                parceiro na busca por justiça. Minha abordagem combina conhecimento técnico 
                especializado com atendimento personalizado e humanizado.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Com formação sólida e especializações em áreas estratégicas do direito, ofereço 
                soluções jurídicas completas que protegem e potencializam o patrimônio dos meus 
                clientes, sempre com foco em resultados excepcionais.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-neutral-800 mb-4">
                Formação e conquistas
              </h4>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-accent-500 flex-shrink-0" />
                  <span className="text-neutral-700">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-serif font-bold text-neutral-800 mb-8">
              Valores que guiam meu trabalho
            </h3>
            
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-200/50 hover-lift"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-accent-500 to-accent-600 p-3 rounded-xl flex-shrink-0">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-neutral-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-8 text-white mt-8"
            >
              <blockquote className="text-lg font-medium italic mb-4">
                "O direito não é apenas sobre leis e processos. É sobre pessoas, 
                proteção patrimonial e a construção de um futuro mais seguro."
              </blockquote>
              <cite className="text-accent-100 font-semibold">
                - Dr. Alison Vieira
              </cite>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
