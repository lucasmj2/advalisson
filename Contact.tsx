'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(66) 99982-4503',
      link: 'tel:+5566999824503',
      description: 'Atendimento de segunda a sexta',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '(66) 99982-4503',
      link: 'https://wa.me/5566999824503?text=Olá! Gostaria de agendar uma consulta jurídica.',
      description: 'Atendimento rápido e direto',
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'adv.prevelato@gmail.com',
      link: 'mailto:adv.prevelato@gmail.com',
      description: 'Resposta em até 2 horas',
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Av. dos Tarumãs, 2995, Jardim Maringá, Sinop-MT',
      link: '#',
      description: 'Atendimento presencial com agendamento',
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 2000)
  }

  return (
    <section id="contato" className="pt-2 pb-1 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
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
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-accent-200/10 to-accent-300/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-2"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-2"
          >
            Entre em Contato
          </motion.div>
          
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-800 mb-2">
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Estou aqui para ouvir sua história e encontrar a melhor solução jurídica 
            para o seu caso. Agende uma consulta gratuita e sem compromisso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-serif font-bold text-neutral-800 mb-6">
                Informações de contato
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Escolha a forma de contato que for mais conveniente para você. 
                Estou sempre disponível para esclarecer suas dúvidas e oferecer 
                a orientação jurídica que você precisa.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl hover:shadow-lg transition-all duration-300 group block"
                >
                  <div className="bg-gradient-to-r from-accent-500 to-accent-600 p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-neutral-700 font-medium mb-1">
                      {item.info}
                    </p>
                    <p className="text-sm text-neutral-600">
                      {item.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-6 text-white"
            >
              <h4 className="text-lg font-semibold mb-2">
                WhatsApp direto
              </h4>
              <p className="text-accent-100 mb-3">
                Entre em contato diretamente pelo WhatsApp para atendimento rápido e personalizado.
              </p>
              <a
                href="https://wa.me/5566999824503?text=Olá! Gostaria de agendar uma consulta jurídica."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white font-semibold hover:text-accent-100 transition-colors"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                (66) 99982-4503
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-neutral-200/50"
          >
            <h3 className="text-2xl font-serif font-bold text-neutral-800 mb-6">
              Envie uma mensagem
            </h3>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center"
              >
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-green-700">
                  Mensagem enviada com sucesso! Retornaremos em breve.
                </span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center"
              >
                <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                <span className="text-red-700">
                  Erro ao enviar mensagem. Tente novamente.
                </span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                  >
                    <option value="">Selecione o assunto</option>
                    <option value="tributario">Direito tributário</option>
                    <option value="trabalhista">Direito trabalhista</option>
                    <option value="societario">Organização societária</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors resize-none"
                  placeholder="Descreva brevemente seu caso ou dúvida..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </motion.button>
            </form>

            <p className="text-xs text-neutral-600 mt-1 text-center">
              * Campos obrigatórios. Suas informações são tratadas com total confidencialidade.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
