'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Home, Users, ArrowRight, Clock, Star, Shield } from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const services = [
    {
      icon: Briefcase,
      title: 'Direito tributário',
      description: 'Especialização em planejamento tributário e proteção patrimonial.',
      features: [
        'Planejamento tributário',
        'Elisão fiscal',
        'Defesa em autuações',
        'Recuperação de créditos',
        'Consultoria fiscal',
      ],
      color: 'from-accent-500 to-accent-600',
      bgColor: 'from-accent-50 to-accent-100',
    },
    {
      icon: Home,
      title: 'Direito trabalhista',
      description: 'Defesa completa dos direitos trabalhistas com expertise comprovada.',
      features: [
        'Rescisões e demissões',
        'Horas extras e adicionais',
        'Assédio moral e discriminação',
        'Acidentes de trabalho',
        'Negociações coletivas',
      ],
      color: 'from-accent-500 to-accent-600',
      bgColor: 'from-accent-50 to-accent-100',
    },
    {
      icon: Users,
      title: 'Organização societária',
      description: 'Estruturação, gestão e proteção patrimonial para empresas.',
      features: [
        'Constituição de empresas',
        'Reestruturação societária',
        'Proteção patrimonial',
        'Planejamento sucessório',
        'Governança corporativa',
      ],
      color: 'from-accent-500 to-accent-600',
      bgColor: 'from-accent-50 to-accent-100',
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Atendimento ágil',
      description: 'Resposta rápida e acompanhamento constante do seu caso.',
    },
    {
      icon: Star,
      title: 'Excelência comprovada',
      description: 'Histórico de sucesso com mais de 98% de aprovação dos clientes.',
    },
    {
      icon: Shield,
      title: 'Proteção total',
      description: 'Defesa integral dos seus direitos com estratégias personalizadas.',
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent-200/10 to-accent-300/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-neutral-300/10 to-neutral-400/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Áreas de Especialização
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-6">
            Serviços <span className="gradient-text">Especializados</span>
          </h2>
          
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções jurídicas completas e personalizadas, sempre com foco 
            na excelência e nos resultados que nossos clientes merecem.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-neutral-200/50 hover-lift group"
            >
              {/* Service Icon */}
              <div className={`bg-gradient-to-r ${service.color} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-serif font-bold text-neutral-800 mb-4">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.6 + index * 0.1 + featureIndex * 0.1, duration: 0.6 }}
                    className="flex items-center text-neutral-700"
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`} />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-full group-hover:shadow-lg transition-all duration-300`}
              >
                Saiba Mais
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-neutral-200/50"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-neutral-800 mb-4">
              Por que escolher nossos serviços?
            </h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Combinamos experiência, dedicação e inovação para oferecer o melhor 
              atendimento jurídico do mercado.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 1.4 + index * 0.2, duration: 0.8 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-r from-accent-500 to-accent-600 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-neutral-800 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-center mt-12 pt-8 border-t border-neutral-200"
          >
            <h4 className="text-2xl font-serif font-bold text-neutral-800 mb-4">
              Pronto para defender seus direitos?
            </h4>
            <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
              Agende uma consulta gratuita e descubra como podemos ajudar você 
              a alcançar os melhores resultados.
            </p>
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center"
            >
              Consulta Gratuita
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
