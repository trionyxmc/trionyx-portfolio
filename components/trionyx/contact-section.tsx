"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, MessageSquare, Mail, CheckCircle2 } from "lucide-react"

const socialLinks = [
  {
    name: "Discord",
    icon: MessageSquare,
    value: "trionyx4445",
    href: "#",
    color: "primary",
  },
  {
    name: "Email",
    icon: Mail,
    value: "trionyxmc@gmail.com",
    href: "mailto:trionyxmc@gmail.com",
    color: "accent",
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-pixel text-xs text-primary text-glow-purple uppercase tracking-widest">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            <span className="gradient-text">Iniciemos Tu Proyecto</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            ¿Listo para llevar tu servidor al siguiente nivel? Contáctame y hagámoslo realidad
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact info */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Availability status */}
              <div className="glass-strong rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping" />
                  </div>
                  <span className="font-semibold">Disponible para proyectos</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Actualmente aceptando nuevos proyectos. Tiempo de respuesta promedio: 24 horas.
                </p>
              </div>

              {/* Social links */}
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block glass-strong rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${
                      link.color === "primary" 
                        ? "bg-primary/20 text-primary glow-purple" 
                        : "bg-accent/20 text-accent glow-blue"
                    }`}>
                      <link.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{link.name}</p>
                      <p className="font-semibold group-hover:text-primary transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Contact form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="glass-strong rounded-2xl p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nombre</label>
                      <div className="relative">
                        <Input
                          placeholder="Tu nombre"
                          className={`bg-secondary/50 border-border focus:border-primary transition-all duration-300 ${
                            focusedField === "name" ? "glow-purple" : ""
                          }`}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Discord</label>
                      <div className="relative">
                        <Input
                          placeholder="Usuario#0000"
                          className={`bg-secondary/50 border-border focus:border-primary transition-all duration-300 ${
                            focusedField === "discord" ? "glow-purple" : ""
                          }`}
                          onFocus={() => setFocusedField("discord")}
                          onBlur={() => setFocusedField(null)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tipo de Proyecto</label>
                    <select
                      className={`w-full h-10 px-3 rounded-md bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-all duration-300 ${
                        focusedField === "type" ? "glow-purple" : ""
                      }`}
                      onFocus={() => setFocusedField("type")}
                      onBlur={() => setFocusedField(null)}
                      required
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="minecraft">Servidor Minecraft</option>
                      <option value="discord">Bot de Discord</option>
                      <option value="tebex">Tienda Tebex</option>
                      <option value="web">Página Web</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Mensaje</label>
                    <Textarea
                      placeholder="Cuéntame sobre tu proyecto..."
                      rows={5}
                      className={`bg-secondary/50 border-border focus:border-primary resize-none transition-all duration-300 ${
                        focusedField === "message" ? "glow-purple" : ""
                      }`}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-purple transition-all duration-300 group relative overflow-hidden"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <motion.span
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        ¡Mensaje Enviado!
                      </motion.span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Enviar Mensaje
                      </span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-30 transition-opacity" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
