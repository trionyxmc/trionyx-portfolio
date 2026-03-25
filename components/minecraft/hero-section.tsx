"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

function MinecraftBlock({ className = "" }: { className?: string }) {
  return (
    <div className={`w-8 h-8 md:w-12 md:h-12 bg-primary/20 border border-primary/30 rounded-sm ${className}`}>
      <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-px p-1">
        <div className="bg-primary/40 rounded-sm" />
        <div className="bg-primary/20 rounded-sm" />
        <div className="bg-primary/30 rounded-sm" />
        <div className="bg-primary/50 rounded-sm" />
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Minecraft Wallpaper */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.alphacoders.com/134/thumb-1920-1345871.png"
          alt="Minecraft landscape background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/85" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
      </div>
      
      {/* Floating Blocks */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <MinecraftBlock className="absolute top-20 left-[10%] animate-float opacity-40" />
        <MinecraftBlock className="absolute top-40 right-[15%] animate-float opacity-30" style={{ animationDelay: "0.5s" }} />
        <MinecraftBlock className="absolute bottom-32 left-[20%] animate-float opacity-20" style={{ animationDelay: "1s" }} />
        <MinecraftBlock className="absolute top-1/3 right-[25%] animate-float opacity-25" style={{ animationDelay: "1.5s" }} />
        <MinecraftBlock className="absolute bottom-40 right-[10%] animate-float opacity-35" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5 z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, oklch(0.75 0.15 290 / 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, oklch(0.75 0.15 290 / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Content */}
      <div className="relative z-20 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Character Image */}
          <div className="relative order-1 lg:order-2 flex-shrink-0">
            <div className="relative w-64 h-72 md:w-80 md:h-96 lg:w-96 lg:h-[450px]">
              {/* Glow effect behind character */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse-glow" />
              <Image
                src="/images/copilot-20260122-001219.png"
                alt="DARK_NESS CONFIG Mascot"
                fill
                className="object-contain drop-shadow-2xl relative z-10"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 max-w-xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 glass rounded-full text-sm text-primary font-medium tracking-wide">
                Minecraft Creator
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="font-pixel text-2xl md:text-3xl lg:text-4xl text-primary text-glow-purple block mb-4">
                DARK_NESS
              </span>
              <span className="font-pixel text-xl md:text-2xl lg:text-3xl text-accent block mb-4">
                CONFIG
              </span>
              <span className="text-foreground">
                Portfolio
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              I am a configurator and translator always seeking to learn new things, 
              with experience in large and new Minecraft networks, working independently.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-purple transition-all duration-300 px-8"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 px-8 bg-transparent"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </div>
    </section>
  )
}
