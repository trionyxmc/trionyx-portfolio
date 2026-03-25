import { MessageCircle, Mail, Twitter, Github } from "lucide-react"

const socialIcons = [
  { icon: MessageCircle, href: "#", label: "Discord" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:contact@example.com", label: "Email" }
]

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-2 h-2 bg-primary rounded-sm" />
                <div className="w-2 h-2 bg-primary/60 rounded-sm" />
                <div className="w-2 h-2 bg-primary/80 rounded-sm" />
                <div className="w-2 h-2 bg-primary rounded-sm" />
              </div>
            </div>
            <span className="text-muted-foreground text-sm">
              2025 DARK_NESS CONFIG. All rights reserved.
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialIcons.map(social => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            Made with <span className="text-primary">passion</span> and creativity
          </p>
        </div>
      </div>
    </footer>
  )
}
