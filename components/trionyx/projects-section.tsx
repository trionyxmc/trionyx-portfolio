"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = ["Todos", "Minecraft", "Discord", "Tebex", "Web"]

const projects = [
  {
    id: 1,
    title: "ChillMon",
    category: "Minecraft",
    description: "Construccion desde 0 de tebex y modificaciones",
    tags: ["Tebex", "Custom Ccs", "Diseño unico"],
    images: [
      "/images/1.png",
      "/images/2.png",
      "/images/3.png",
      "/images/4.png",
      "/images/5.png",
    ],
  },
  {
    id: 2,
    title: "EclipseCraft",
    category: "Minecraft",
    description: "Se realizó una tienda Tebex completa",
    tags: ["Paquetes", "Edición CSS", "Traducción custom"],
    images: [
      "/images/6.png",
      "/images/7.png",
      "/images/8.png",
      "/images/9.png",
      "/images/10.png",
    ],
  },
  {
    id: 3,
    title: "GalaxyCraft",
    category: "Minecraft",
    description: "Creación de servidor +160 mods optimizados, bosses con animaciones, menús custom, +100 mascotas",
    tags: ["Dragones", "Spawn custom", "Economía"],
    images: [
      "/images/11.png",
      "/images/12.png",
      "/images/13.png",
    ],
  },
  {
    id: 4,
    title: "LuxorMc",
    category: "Tebex",
    description: "Creación y personalización de tienda Tebex, creación de paquetes, edición de CSS",
    tags: ["Tebex", "CSS custom", "Traducción"],
    images: [
      "/images/14.png",
      "/images/15.png",
      "/images/16.png",
      "/images/17.png",
    ],
  },
  {
    id: 5,
    title: "Tierra Arcana",
    category: "Minecraft",
    description: "Creación de servidor con mods y plugins, economía, quests y shop",
    tags: ["Hologramas", "Mods y plugins", "Economía"],
    images: [
      "/images/18.png",
      "/images/19.png",
      "/images/20.png",
      "/images/21.png",
      "/images/22.png",
    ],
  },
  {
    id: 6,
    title: "Pixel Of God",
    category: "Minecraft",
    description: "Se realizó el desarrollo COMPLETO de un Survival Pixelmon en la versión 1.16.5",
    tags: ["Discord.js", "Logs avanzados", "Sugerencias custom"],
    images: [
      "/images/23.png",
      "/images/24.png",
      "/images/25.png",
      "/images/26.png",
      "/images/27.png",
      "/images/28.png",
      "/images/29.png",
      "/images/30.png",
      "/images/31.png",
    ],
  },
]

function ProjectModal({ 
  project, 
  onClose 
}: { 
  project: typeof projects[0]
  onClose: () => void 
}) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-background/90 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal */}
      <motion.div
        className="relative w-full max-w-4xl glass-strong rounded-2xl overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 glass rounded-full hover:bg-primary/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image carousel */}
        <div className="relative aspect-video">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={project.images[currentImage]}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 glass rounded-full hover:bg-primary/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 glass rounded-full hover:bg-primary/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImage 
                    ? "bg-primary w-6" 
                    : "bg-foreground/30 hover:bg-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-pixel text-xs text-primary text-glow-purple uppercase tracking-widest">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            <span className="gradient-text">Proyectos Destacados</span>
          </h2>
        </motion.div>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-primary text-primary-foreground glow-purple" 
                  : "bg-transparent border-border hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative glass-strong rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <span className="text-xs text-primary font-medium">{project.category}</span>
                    <h3 className="text-lg font-bold mt-1 mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
