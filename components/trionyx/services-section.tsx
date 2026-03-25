"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Settings, Network, Bot, Globe, Link2 } from "lucide-react"

const services = [
  {
    icon: Settings,
    title: "Configuración de Plugins",
    description: "Configuración totalmente personalizada según las necesidades del cliente. Incluye menús, misiones, pase de batalla, rankup, recompensas, kits y rangos.",
    price: "desde 7 USD",
    features: ["Setup completo", "Personalización total", "Documentación incluida"],
    color: "primary",
  },
  {
    icon: Network,
    title: "Creación de Network",
    description: "Desarrollo completo de servidores desde cero con estilo único. Incluye Lobby, Auth, Proxy (Bungeecord, forks o Velocity) y Geyser Standalone.",
    price: "desde 15 USD",
    features: ["Multi-servidor", "Proxy configurado", "Geyser incluido"],
    color: "accent",
  },
  {
    icon: Bot,
    title: "Desarrollo de Bots de Discord",
    description: "Creación de bots personalizados adaptados a cada comunidad. Incluye tickets, economía, moderación, sorteos, automatizaciones y embeds avanzados.",
    price: "desde 20 USD",
    features: ["Código optimizado", "Escalable", "Personalizable"],
    color: "primary",
  },
  {
    icon: Globe,
    title: "Servicios Web",
    description: "Traducción y adaptación de páginas HTML o similares. Configuración completa de tiendas Tebex con o sin CSS. Optimización enfocada en conversión.",
    price: "desde 25 USD",
    features: ["Tebex completo", "CSS personalizado", "Optimización UX"],
    color: "accent",
  },
  {
    icon: Link2,
    title: "Conexión de Dominio a IP",
    description: "Enlace de dominio con la IP del host de forma rápida, segura y funcional. Configuración lista para producción.",
    price: "desde 12 USD",
    features: ["Configuración DNS", "SSL listo", "Producción inmediata"],
    color: "primary",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-pixel text-xs text-primary text-glow-purple uppercase tracking-widest">
            Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            <span className="gradient-text">Soluciones Premium</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Servicios profesionales diseñados para llevar tu proyecto al siguiente nivel
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="relative h-full glass-strong rounded-2xl p-6 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:border-primary/40">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  service.color === "primary" ? "bg-primary/5" : "bg-accent/5"
                }`} />
                
                {/* Icon */}
                <motion.div
                  className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    service.color === "primary" 
                      ? "bg-primary/20 text-primary glow-purple" 
                      : "bg-accent/20 text-accent glow-blue"
                  }`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-7 h-7" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                {/* Price badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${
                  service.color === "primary" 
                    ? "bg-primary/20 text-primary" 
                    : "bg-accent/20 text-accent"
                }`}>
                  {service.price}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
