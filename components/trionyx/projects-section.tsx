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
    title: "AmperMc Network",
    category: "Minecraft",
    description: "Configuración y personalizacion de menus, creacion de 3 bosses, correcion de bugs",
    tags: ["Configuración", "Bosses", "Dungeons"],
    images: [
      "https://cdn.discordapp.com/attachments/1358507759208763583/1408229484745719868/image.png?ex=69c46de8&is=69c31c68&hm=e77ec6d242345987f12bc4844848ce14096ee02c82b5fc282044df91db982318&",
      "https://cdn.discordapp.com/attachments/1358507759208763583/1408230417697603675/image.png?ex=69c46ec7&is=69c31d47&hm=f34292497077269dc973a5d1a96a5b445a7b7837fa3641ff817fb433667009a2&",
      "https://cdn.discordapp.com/attachments/1358507759208763583/1408230346150903898/image.png?ex=69c46eb6&is=69c31d36&hm=6d123c21de58e8ae2bce64c19feb2d334451996ac5709dabc9bd84ef1ccb9150&",
    ],
  },
  {
    id: 2,
    title: "EclipseCraft",
    category: "Minecraft",
    description: "Se realizo una tienda tebex completa",
    tags: ["Paquetes", "Ediccion ccs", "Traduccion custom"],
    images: [
      "https://cdn.discordapp.com/attachments/1359356528477343794/1459569783438835817/image.png?ex=69c550c9&is=69c3ff49&hm=fa02e88948ff41f2482fe8d87ddaa906abcb2f110b4144e1e3713acce048cb53&",
      "https://cdn.discordapp.com/attachments/1359356528477343794/1459569784080433162/image.png?ex=69c550ca&is=69c3ff4a&hm=8cbfea17cbccf1961ee673f3849f517ea7213be926b4a23c56f5eccbdd4190fb&",
      "https://cdn.discordapp.com/attachments/1359356528477343794/1459569785577799892/image.png?ex=69c550ca&is=69c3ff4a&hm=2c1d6754c56f63e2ea10e21b44bfab044c673cfbbee8bbcb9a548556903ed433&",
    ],
  },
  {
    id: 3,
    title: "GalaxyCraft",
    category: "Minecraft",
    description: "Creacion de servidor +160 mods optimizados, Bosses con animaciones, Menus custom, +100 mascotas",
    tags: ["Dragones", "Spawn custom", "Economia"],
    images: [
      "https://cdn.discordapp.com/attachments/1359356528477343794/1422358568816083064/image.png?ex=69c46a24&is=69c318a4&hm=0d36f447433dfcf9573ef863024fe5f6d16011fada166c167173b20e016ef48f&",
      "https://cdn.discordapp.com/attachments/1359356528477343794/1422358569394901054/image.png?ex=69c46a25&is=69c318a5&hm=dbc889843012112f425a5c247d4ae4a418419c6ea7dae9e0e7cd3cc920fa8ac0&",
      "https://cdn.discordapp.com/attachments/1359356528477343794/1422358570103476274/image.png?ex=69c46a25&is=69c318a5&hm=b15e5a74a654afb856c3f52bd633d917dfe889811a8625dd3b5db503dcbe724d&",
    ],
  },
  {
    id: 4,
    title: "LuxorMc",
    category: "Tebex",
    description: "Creacion y personalizacion y traducion de tienda tebex, creacion de paquetes, edicion de ccs",
    tags: ["Tebex", "Ccs custom", "traduccion"],
    images: [
      "https://cdn.discordapp.com/attachments/1359356528477343794/1423455414929985607/Captura_de_pantalla_2025-10-02_204042.png?ex=69c47329&is=69c321a9&hm=21edd9909f4330ca74279b5aeb3e4c65e30f5c889315ddc2638c7e5dfe400626&",
      "https://cdn.discordapp.com/attachments/1359356528477343794/1423455415315992616/Captura_de_pantalla_2025-10-02_192707.png?ex=69c47329&is=69c321a9&hm=4df3dca3575755110b38d08a1ee8c466f9f92ff1b06d905fb4522a577ca9d82b&",
      "https://cdn.discordapp.com/attachments/1359356528477343794/1423455416066641932/image.png?ex=69c47329&is=69c321a9&hm=212220b26c945d55748b3f407a35af38d128827c0c96595f3378ec7e31bcd820&s",
    ],
  },
  {
    id: 5,
    title: "Tierra arcana",
    category: "Minecraft",
    description: "Creacion de ervidor con mods y plugins, economia, quests, shop",
    tags: ["Hologramas", "Mods y plugins", "Economia"],
    images: [
      "https://cdn.discordapp.com/attachments/1359356528477343794/1429162482559221820/image.png?ex=69c41e48&is=69c2ccc8&hm=d06de41686b6908804f4701060bcb1720a9b9ed64c1138478fe244eb999ec03e&",
      "https://cdn.discordapp.com/attachments/1359356528477343794/1429162483037507766/image.png?ex=69c41e48&is=69c2ccc8&hm=61c7cb73397f530545a2eb3735645f8ad84248d0ad5151c9390b1d579a8cc95f&",
      "https://cdn.discordapp.com/attachments/1359356528477343794/1429162482026418289/image.png?ex=69c41e48&is=69c2ccc8&hm=bb4afe5291fb8e3bf2697a25ba0f0609a950211850560f3ad0e986e1ed50fbde&",
    ],
  },
  {
    id: 6,
    title: "ReinosOscuros bot",
    category: "Discord bot",
    description: "Creacion de bot de discord, bienvenidas, logs, niveles, Sugerencias",
    tags: ["Discord js", "Logs avanzados", "Sugerencias custom", "Personalizacion discord"],
    images: [
      "https://cdn.discordapp.com/attachments/1359356528477343794/1432840132821782558/image.png?ex=69c4505c&is=69c2fedc&hm=6f6a685d85c57df99ad459a84932db93dba9b0a1c22f7141919febe42ed9cec7&",
      "https://cdn.discordapp.com/attachments/1359356528477343794/1432840133434146856/image.png?ex=69c4505c&is=69c2fedc&hm=c3d59aa94079384dfe69b69fa420cd8e30a532eebcf2a18e91733d0293abbc51&",
      "https://cdn.discordapp.com/attachments/1359356528477343794/1432840133878612019/image.png?ex=69c4505c&is=69c2fedc&hm=3a49ed1328882d0e34c1122401fd4bffbd737bcc370bdd22ff1fc7b3ee5c6746&",
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
