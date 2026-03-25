"use client"

import Image from "next/image"

interface Skill {
  name: string
  level: number
  category: string
}

const skills: Skill[] = [
  { name: "Tebex Setup", level: 95, category: "Stores" },
  { name: "CSS/Design", level: 85, category: "Stores" },
  { name: "Package Config", level: 90, category: "Stores" },
  { name: "Discord.js", level: 88, category: "Discord" },
  { name: "Bot Commands", level: 92, category: "Discord" },
  { name: "Server Setup", level: 90, category: "Discord" },
  { name: "Plugin Config", level: 95, category: "Minecraft" },
  { name: "Translation", level: 92, category: "Minecraft" },
  { name: "Server Config", level: 88, category: "Minecraft" }
]

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="group">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {skill.name}
        </span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  )
}

function PixelIcon({ type }: { type: string }) {
  const colors = {
    Stores: "bg-primary",
    Discord: "bg-accent",
    Minecraft: "bg-chart-3"
  }
  
  return (
    <div className="w-12 h-12 rounded-lg flex items-center justify-center glass">
      <div className="grid grid-cols-2 gap-0.5">
        <div className={`w-2 h-2 ${colors[type as keyof typeof colors]} rounded-sm`} />
        <div className={`w-2 h-2 ${colors[type as keyof typeof colors]} opacity-60 rounded-sm`} />
        <div className={`w-2 h-2 ${colors[type as keyof typeof colors]} opacity-80 rounded-sm`} />
        <div className={`w-2 h-2 ${colors[type as keyof typeof colors]} rounded-sm`} />
      </div>
    </div>
  )
}

export function SkillsSection() {
  const categories = [...new Set(skills.map(s => s.category))]

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Background Minecraft Wallpaper */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.alphacoders.com/124/thumb-1920-1243553.jpeg"
          alt="Minecraft landscape background"
          fill
          className="object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/90" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-pixel text-xs md:text-sm text-primary text-glow-purple tracking-wider">
            SKILLS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-foreground">
            My Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills by Category */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map(category => (
            <div key={category} className="glass rounded-xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <PixelIcon type={category} />
                <h3 className="text-xl font-semibold text-foreground">{category}</h3>
              </div>
              <div className="space-y-5">
                {skills
                  .filter(s => s.category === category)
                  .map(skill => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))
                }
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Discord.js", "JavaScript", "CSS", "HTML", "Tebex", "Paper", "Spigot", "Bungeecord", "Velocity", "LuckPerms", "Pterodactyl", "Linux"].map(tool => (
              <span 
                key={tool}
                className="px-4 py-2 glass rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
