"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Eye, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

type ProjectCategory = "all" | "tebex" | "discord" | "config" | "bot"

interface Project {
  id: number
  title: string
  description: string
  category: ProjectCategory
  tags: string[]
  images: string[]
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "Premium Tebex Store",
    description: "Complete Tebex store setup with custom packages, CSS styling, and professional design.",
    category: "tebex",
    tags: ["Tebex", "CSS", "Design"],
    images: [
      "https://images.alphacoders.com/134/thumb-1920-1345871.png",
      "https://images.alphacoders.com/133/thumb-1920-1331373.jpeg",
      "https://images.alphacoders.com/132/thumb-1920-1329476.png"
    ],
    featured: true
  },
  {
    id: 2,
    title: "Custom Discord Bot",
    description: "Full-featured Discord bot with moderation, tickets, economy, and custom commands.",
    category: "bot",
    tags: ["Discord.js", "Bot", "Custom"],
    images: [
      "https://images.alphacoders.com/131/thumb-1920-1315753.jpeg",
      "https://images.alphacoders.com/134/thumb-1920-1340027.png",
      "https://images.alphacoders.com/130/thumb-1920-1306506.jpeg"
    ],
    featured: true
  },
  {
    id: 3,
    title: "SkyBlock Configuration",
    description: "Complete SkyBlock server configuration with custom islands, challenges, and progression.",
    category: "config",
    tags: ["Config", "SkyBlock", "Custom"],
    images: [
      "https://images.alphacoders.com/124/thumb-1920-1243553.jpeg",
      "https://images.alphacoders.com/123/thumb-1920-1239948.png",
      "https://images.alphacoders.com/120/thumb-1920-1202803.jpeg"
    ]
  },
  {
    id: 4,
    title: "Discord Server Setup",
    description: "Professional Discord server with custom roles, channels, bots, and security settings.",
    category: "discord",
    tags: ["Discord", "Server", "Setup"],
    images: [
      "https://images.alphacoders.com/117/thumb-1920-1179411.jpeg",
      "https://images.alphacoders.com/133/thumb-1920-1337561.png",
      "https://images.alphacoders.com/134/thumb-1920-1346089.jpeg"
    ]
  },
  {
    id: 5,
    title: "Plugin Translation",
    description: "Advanced plugin translation in your preferred language and format with detailed documentation.",
    category: "config",
    tags: ["Translation", "Plugins", "Localization"],
    images: [
      "https://images.alphacoders.com/112/thumb-1920-1128296.jpeg",
      "https://images.alphacoders.com/109/thumb-1920-1092847.jpeg",
      "https://images.alphacoders.com/869/thumb-1920-869999.jpg"
    ]
  },
  {
    id: 6,
    title: "Economy Store Setup",
    description: "Tebex store with rank packages, cosmetics, and integrated payment solutions.",
    category: "tebex",
    tags: ["Tebex", "Store", "Economy"],
    images: [
      "https://images.alphacoders.com/133/thumb-1920-1330137.png",
      "https://images.alphacoders.com/134/thumb-1920-1345178.jpeg",
      "https://images.alphacoders.com/132/thumb-1920-1324102.jpeg"
    ]
  }
]

const categories: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "tebex", label: "Tebex Stores" },
  { value: "discord", label: "Discord Servers" },
  { value: "config", label: "Configurations" },
  { value: "bot", label: "Discord Bots" }
]

function ProjectModal({ 
  project, 
  onClose 
}: { 
  project: Project
  onClose: () => void 
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-4xl glass rounded-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:bg-background transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Gallery */}
        <div className="relative aspect-video bg-secondary">
          <Image
            src={project.images[currentImageIndex] || "/placeholder.svg"}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            fill
            className="object-cover"
            unoptimized
          />
          
          {/* Navigation Arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:bg-background transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:bg-background transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex 
                    ? "bg-primary w-6" 
                    : "bg-foreground/50 hover:bg-foreground/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
              <p className="text-muted-foreground mt-2">{project.description}</p>
            </div>
            {project.featured && (
              <Badge className="bg-primary text-primary-foreground shrink-0">
                Featured
              </Badge>
            )}
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <Badge 
                key={tag} 
                variant="outline" 
                className="text-xs border-border text-muted-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ 
  project, 
  onView 
}: { 
  project: Project
  onView: () => void 
}) {
  return (
    <div className="group glass rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300">
      {/* Image */}
      <div className="relative h-48 bg-secondary/50 overflow-hidden">
        <Image
          src={project.images[0] || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          unoptimized
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-2">
            <Button 
              size="icon" 
              variant="secondary" 
              className="rounded-full"
              onClick={onView}
            >
              <Eye className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="secondary" className="rounded-full">
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {project.featured && (
          <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
            Featured
          </Badge>
        )}
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="text-xs border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <>
      <section id="projects" className="py-24 px-4 relative overflow-hidden">
        {/* Background Minecraft Wallpaper */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.alphacoders.com/133/thumb-1920-1337561.png"
            alt="Minecraft world background"
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
          <div className="text-center mb-12">
            <span className="font-pixel text-xs md:text-sm text-primary text-glow-purple tracking-wider">
              PORTFOLIO
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-foreground">
              My Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <Button
                key={cat.value}
                variant={activeCategory === cat.value ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat.value)}
                className={`
                  transition-all duration-300
                  ${activeCategory === cat.value 
                    ? "bg-primary text-primary-foreground glow-purple" 
                    : "border-border hover:border-primary hover:text-primary bg-transparent"
                  }
                `}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onView={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  )
}
