"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, MessageCircle, Mail, Twitter } from "lucide-react"
import Image from "next/image"

const socialLinks = [
  { icon: MessageCircle, label: "Discord", href: "#", username: "dark_ness" },
  { icon: Mail, label: "Email", href: "mailto:contact@example.com", username: "contact@example.com" },
  { icon: Twitter, label: "Twitter", href: "#", username: "@dark_ness_config" }
]

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background Minecraft Wallpaper */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.alphacoders.com/131/thumb-1920-1315753.jpeg"
          alt="Minecraft landscape background"
          fill
          className="object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/92" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-pixel text-xs md:text-sm text-primary text-glow-purple tracking-wider">
            CONTACT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-foreground">
            {"Let's Talk"}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
            {"Have a project in mind? Need help with your server? Don't hesitate to contact me!"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                  className="bg-secondary/50 border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
                  className="bg-secondary/50 border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formState.message}
                  onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                  className="bg-secondary/50 border-border focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-purple"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <div className="glass rounded-xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Connect with me</h3>
              <div className="space-y-4">
                {socialLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <link.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{link.label}</div>
                      <div className="text-sm text-muted-foreground">{link.username}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
                <span className="text-foreground font-medium">Available for projects</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently available for new projects. 
                Estimated response time: 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
