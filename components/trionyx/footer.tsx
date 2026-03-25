"use client"

import { motion } from "framer-motion"
import { Zap, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary" />
            </div>
            <span className="font-pixel text-xs gradient-text">TRIONYX</span>
          </motion.a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {currentYear} TRIONYX. Hecho con
            <Heart className="w-4 h-4 text-primary fill-primary inline" />
            para la comunidad
          </p>

          {/* Social links placeholder */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Discord
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Twitter
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
