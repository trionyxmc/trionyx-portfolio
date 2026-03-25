"use client"

import { ShoppingBag, Code2, Wrench, MessageCircle } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: ShoppingBag,
    title: "Tebex Dev",
    description: "Setting up and creating stores with their packages and editing CSS."
  },
  {
    icon: Code2,
    title: "Translation Plugins",
    description: "Advanced plugin translation in your chosen format."
  },
  {
    icon: Wrench,
    title: "Plugin Configuration",
    description: "Configure any type of plugin you require with a detailed explanation."
  },
  {
    icon: MessageCircle,
    title: "Bot Dev",
    description: "Creating custom Discord bots in v21 with clear specifications and details."
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background Minecraft Wallpaper */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images4.alphacoders.com/135/1350069.jpeg"
          alt="Minecraft landscape background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/90" />
        {/* Gradient overlay for visual interest */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-pixel text-xs md:text-sm text-primary text-glow-purple tracking-wider">
            ABOUT ME
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-foreground">
            Creator & Configurator
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Specialized developer in Minecraft servers with{" "}
              <span className="text-primary font-semibold">proven experience</span> creating 
              rank systems, custom shops, parkour mechanics, warps management, and 
              comprehensive economy solutions with vault integration.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Each project features Discord bots with tickets, suggestions, custom commands, 
              alongside professional web pages with personalized CSS and optimized design.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center glass rounded-lg p-4 border border-border/50">
                <div className="font-pixel text-xl md:text-2xl text-primary text-glow-purple">150+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects</div>
              </div>
              <div className="text-center glass rounded-lg p-4 border border-border/50">
                <div className="font-pixel text-xl md:text-2xl text-accent text-glow-lilac">5+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Exp.</div>
              </div>
              <div className="text-center glass rounded-lg p-4 border border-border/50">
                <div className="font-pixel text-xl md:text-2xl text-primary text-glow-purple">+360</div>
                <div className="text-sm text-muted-foreground mt-1">Clients</div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <service.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
