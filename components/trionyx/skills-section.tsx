"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Gamepad2, MessageSquare, Globe, Server } from "lucide-react"

const skillCategories = [
  {
    name: "Minecraft",
    icon: Gamepad2,
    color: "primary",
    skills: [
      { name: "Configuración de Plugins", level: 100 },
      { name: "Menús y Sistemas", level: 85 },
      { name: "Personalizacion de configs", level: 70 },
      { name: "Fixeo de bugs o problemas", level: 65 },
      { name: "Creacion de sistemas unicos", level: 90 },
      { name: "Geyser / Conexiones", level: 87 },
    ],
  },
  {
    name: "Discord Developer",
    icon: MessageSquare,
    color: "accent",
    skills: [
      { name: "Sistemas avanzados", level: 95 },
      { name: "Sistema de tickets", level: 90 },
      { name: "Automatizaciones", level: 50 },
      { name: "Moderación", level: 85 },
      { name: "Minijuegos / sistemas", level: 70 },
      { name: "Discord.js", level: 65 },
    ],
  },
  {
    name: "Tebex / Web",
    icon: Globe,
    color: "cyan",
    skills: [
      { name: "Traducciones", level: 100 },
      { name: "Edición Visual", level: 50 },
      { name: "CSS Personalizado", level: 65 },
      { name: "Configuración de Tienda", level: 95 },
      { name: "Optimización Visual", level: 70 },
      { name: "Personalizacion de theme", level: 80 },
    ],
  },
  {
    name: "Infraestructura",
    icon: Server,
    color: "green",
    skills: [
      { name: "Dominio a IP", level: 95 },
      { name: "Ajustes de Red", level: 88 },
      { name: "Producción", level: 90 },
      { name: "Despliegues Básicos", level: 85 },
      { name: "Configuración Funcional", level: 92 },
    ],
  },
]

function AnimatedCounter({ value, isInView }: { value: number; isInView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    
    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)
    
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value, isInView])

  return <span>{count}</span>
}

function SkillBar({ skill, index, isInView, color }: { 
  skill: { name: string; level: number }
  index: number
  isInView: boolean
  color: string 
}) {
  const getColorClasses = () => {
    switch (color) {
      case "primary": return { text: "text-primary", bg: "bg-gradient-to-r from-primary to-primary/60" }
      case "accent": return { text: "text-accent", bg: "bg-gradient-to-r from-accent to-accent/60" }
      case "cyan": return { text: "text-cyan-400", bg: "bg-gradient-to-r from-cyan-400 to-cyan-400/60" }
      case "green": return { text: "text-emerald-400", bg: "bg-gradient-to-r from-emerald-400 to-emerald-400/60" }
      default: return { text: "text-primary", bg: "bg-gradient-to-r from-primary to-primary/60" }
    }
  }
  
  const colors = getColorClasses()

  return (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.08 * index }}
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground/90">{skill.name}</span>
        <span className={`font-pixel text-[10px] ${colors.text}`}>
          <AnimatedCounter value={skill.level} isInView={isInView} />%
        </span>
      </div>
      <div className="h-1.5 bg-secondary/50 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${colors.bg}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.5, delay: 0.2 + 0.08 * index, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getGlowClass = (color: string) => {
    switch (color) {
      case "primary": return "bg-primary glow-purple"
      case "accent": return "bg-accent glow-blue"
      case "cyan": return "bg-cyan-400"
      case "green": return "bg-emerald-400"
      default: return "bg-primary glow-purple"
    }
  }

  const getIconBgClass = (color: string) => {
    switch (color) {
      case "primary": return "bg-primary/20 text-primary"
      case "accent": return "bg-accent/20 text-accent"
      case "cyan": return "bg-cyan-400/20 text-cyan-400"
      case "green": return "bg-emerald-400/20 text-emerald-400"
      default: return "bg-primary/20 text-primary"
    }
  }

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      {/* Decorative glows */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-pixel text-xs text-primary text-glow-purple uppercase tracking-widest">
            Habilidades
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            <span className="gradient-text">Experiencia Técnica</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Años de experiencia en configuración, personalización y optimización de sistemas
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              className="glass-strong rounded-2xl p-6 relative group transition-all duration-500 hover:border-primary/40"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * catIndex }}
            >
              
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getIconBgClass(category.color)}`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${getGlowClass(category.color)}`} />
                  <h3 className="font-bold text-lg">{category.name}</h3>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                    isInView={isInView}
                    color={category.color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
