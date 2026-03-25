"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Settings, Server, Bot, Globe, Wrench, Languages } from "lucide-react"

const stats = [
  { value: "1000+", label: "Proyectos" },
  { value: "6+", label: "Años Exp." },
  { value: "1023+", label: "Clientes" },
]

const highlights = [
  { icon: Settings, label: "Configuración" },
  { icon: Server, label: "Networks" },
  { icon: Bot, label: "Discord" },
  { icon: Globe, label: "Tebex" },
  { icon: Wrench, label: "Optimización" },
  { icon: Languages, label: "Traducciones" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      {/* Decorative glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="font-pixel text-xs text-primary text-glow-purple uppercase tracking-widest">
              Sobre Mí
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 gradient-text">
              Configuración Profesional
            </h2>
          </motion.div>

          {/* Main content card */}
          <motion.div
            className="glass-strong rounded-2xl p-8 md:p-12 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            
            {/* Highlights */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-2 glass rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-6 text-center max-w-3xl mx-auto">
              <motion.p
                className="text-lg md:text-xl text-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Especialista en{" "}
                <span className="text-primary font-semibold">configuración personalizada</span> de 
                plugins para servidores de Minecraft. Me dedico a la creación y estructuración de 
                networks completas, desarrollo de bots de Discord, traducción y adaptación de sistemas, 
                optimización web y configuración de tiendas Tebex.
              </motion.p>
              
              <motion.p
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Con experiencia en redes grandes y proyectos nuevos, ofrezco soluciones visuales y 
                funcionales para comunidades y servidores que buscan destacar. Trabajo de forma 
                independiente garantizando atención personalizada y resultados de calidad premium.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 glass rounded-xl relative overflow-hidden group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="font-pixel text-xl md:text-2xl text-primary text-glow-purple mb-2 relative">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground relative">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
