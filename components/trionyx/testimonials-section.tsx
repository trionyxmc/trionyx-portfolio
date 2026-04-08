"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Azkelaf.",
    role: "Owner de InvictusMc",
    avatar: "https://mc-heads.net/avatar/Notch/100",
    rating: 5,
    text: "Una vez más he solicitado sus servicios y como siempre sigue siendo un persona profesional y dedicada a su oficio, sin duda alguna lo tendré como mi configurador de cabecera",
  },
  {
    name: "LEØ_404.",
    role: "Owner de ethernium",
    avatar: "https://mc-heads.net/avatar/jeb_/100",
    rating: 5,
    text: "He solicitado varios servicios con ciertas especificaciones y me ha entregado trabajos 10/10 realmente un trabajo elegante, profesional totalmente entregado a su trabajo totalmente recomiendo sus servicios ",
  },
  {
    name: "Dionisio",
    role: "Owner de Kweeverse",
    avatar: "https://mc-heads.net/avatar/Dinnerbone/100",
    rating: 5,
    text: "Configuracion rapida, eficaz, profesional y estetica. Trato personalizado segun las necesidades del cliente y buenos precios. Lo volveria a contratar",
  },
  {
    name: "𝐒𝐨𝐲𝐒𝐞𝐛𝐚𝐬𝐃𝐌𝐂.",
    role: "Owner de astlasMc",
    avatar: "https://mc-heads.net/avatar/rey/100",
    rating: 5,
    text: "He pedido un servidor y de manera instantánea, efectivamente se compromete y super chévere la profesionalidad de @Trionyx 10/10 el trabajo Se los recomiendo ",
  },
  {
    name: "! Strovo",
    role: "Owner de Hytale Box",
    avatar: "https://mc-heads.net/avatar/pinguino/100",
    rating: 5,
    text: "Mande hacer las traducciones a @Trionyx de varios plugin, y la verdad fue en tiempo récord (eran complejas) y me sorprendió la calidad y el tiempo de entrega de todo, estoy seguro que estaré haciendo mas negocios ya que este tipo de trabajos es lo que he estado buscado, gente que  cumpla su palabra y que sea bueno en lo que hace",
  },
  {
    name: "SirExhon",
    role: "Owner de ReinosOscuros",
    avatar: "https://mc-heads.net/avatar/pinguinofpeace/100",
    rating: 5,
    text: "Compre un Servidor con @Trionyx la configuracion es una perfeccion total, y la verdad fue en tiempo muy corto al realizar la compra la entrega fue casi inmediata y me sorprendió la calidad, sin duda quedo satisfecho con el producto que se me entrego, supero mis espectativas. Seguire adquiriendo sus servicios y productos por la profecionalidad y puntualidad del servicio",
  },
  {
    name: "TorreRock",
    role: "Owner de RaknarokMc",
    avatar: "https://mc-heads.net/avatar/ragnarokfr/100",
    rating: 5,
    text: "Compre un servidor completo a @Trionyx  y todo perfecto configuración traducción de todos los plugins y un servicio la verdad de 10 me gustó mucho su trato y todo ",
  },
  {
    name: "Shinji92",
    role: "Owner de GalaxyCraft",
    avatar: "https://mc-heads.net/avatar/shinji92/100",
    rating: 5,
    text: "Mi experiencia con este servicio fue excelente. @Trionyx  se encargó de crear y configurar mi servidor de Minecraft de manera muy profesional, cuidando cada detalle para que todo quedara funcionando correctamente desde el inicio. El tiempo de espera fue exactamente el estimado, Durante el proceso siempre hubo buena comunicación, resolviendo mis dudas de forma clara y rápida. El resultado final superó mis expectativas: un servidor estable, bien optimizado y listo para disfrutar sin complicaciones",
  },
  {
    name: "xFrosedYT",
    role: "Owner de LuxorMc",
    avatar: "https://mc-heads.net/avatar/Payaso/100",
    rating: 5,
    text: "Compre el Servicio de tebex, no fue nada caro, la tienda quedo increíble, es un genio @Trionyx, super recomendado si tienen pensado comprar su servicio de tebex, o cualquier otro servicio o configuración. 10/10",
  },
  {
    name: "macrinhoxz",
    role: "Owner de LatinoCraft",
    avatar: "https://mc-heads.net/avatar/Payaso_Loco/100",
    rating: 5,
    text: "Mi experiencia con el servicio de @Trionyx fue muy buena! le compré un servidor completo me ayudó a configurar y modificar paso a paso las cosas a mi gusto, estuvo a. disposición cada instante.El resultado supero todas mis expectativas, todo quedó de 10...Estoy seguro que voy a seguir necesitando de sus servicios!Super recomendado",
  },
  {
    name: "YisusCm23",
    role: "Owner de CestialCraft",
    avatar: "https://mc-heads.net/avatar/Payaso022519/100",
    rating: 5,
    text: "Mi experiencia con el servicio de @Trionyx fue muy buena! le compré un servidor completo me ayudó a configurar y modificar paso a paso las cosas a mi gusto, estuvo a. disposición cada instante.El resultado supero todas mis expectativas, todo quedó de 10...Estoy seguro que voy a seguir necesitando de sus servicios!Super recomendado",
  },
  {
    name: "SrBos ",
    role: "Owner de NexusMC",
    avatar: "https://mc-heads.net/avatar/boss/100",
    rating: 5,
    text: "Muy buen servicio de @Trionyx le pedi configuracion de dungeons y minas customs y fue bastante atento a los detalles solicitados, servicio eficiente y sin complicaciones 10/10",
  },
  {
    name: "Pirzi ",
    role: "Owner de DemasiaCraft",
    avatar: "https://mc-heads.net/avatar/Bossbirdyman/100",
    rating: 5,
    text: "Sinceramente si es buen servicio, mucha ayuda y mas que yo no se hacer nada xd te re agradezco @Trionyx ",
  },
  {
    name: "LeoMendoza",
    role: "Owner de DinastiaCraft",
    avatar: "https://mc-heads.net/avatar/Santificado/100",
    rating: 5,
    text: "La experiencia con @DARK_NESS fue excelente, la atencion a lo que uno requiere y le solicita, es muy buena, el tiempo igual es muy bueno, te resuelve todas tus dudas , si tienes algun problema de igual manera te resuelve y te ayuda hasta que termina el trabajo  recomiendo 100% el servicio ",
  },
  {
    name: "Lears_One",
    role: "Owner de Pixel of god",
    avatar: "https://mc-heads.net/avatar/Lears1/100",
    rating: 5,
    text: "El trabajo y la atencion de @Trionyx un 10/10  muy buen servicio y  trabajo, estoy esperando tener muchas mas oportunidades de trabajar con usted , es todo lo que se  solicita en una persona con el conocimiento y la capacidad de completar todas las tareas 100% ",
  },
  {
    name: "Fermarsol",
    role: "Owner de Divineland",
    avatar: "https://mc-heads.net/avatar/Droga/100",
    rating: 5,
    text: "Muchas gracias @Trionyx  un trabajo y atencion de 10 ",
  },
  {
    name: "JLuis_",
    role: "Owner de BloomLand",
    avatar: "https://mc-heads.net/avatar/LuisHD2004/100",
    rating: 5,
    text: "Un excelente servicio. La atención al cliente, la disponibilidad y el tiempo de entrega superaron mis expectativas. Solo tenía ideas muy vagas para mi servidor y pensé que sería difícil que las entendiera, pero su trabajo me sorprendió. Si tienen la oportunidad, no duden en contratar sus servicios ",
  },
  {
    name: "★彡 TITAN 彡★",
    role: "Owner de Beetjejuice",
    avatar: "https://mc-heads.net/avatar/Titan/100",
    rating: 5,
    text: "Un excelente servicio. La atención al cliente, la disponibilidad y el tiempo de entrega superaron mis expectativas. Solo tenía ideas muy vagas para mi servidor y pensé que sería difícil que las entendiera, pero su trabajo me sorprendió. Si tienen la oportunidad, no duden en contratar sus servicios ",
  },
  {
    name: "Enziuu",
    role: "Owner de Atralis",
    avatar: "https://mc-heads.net/avatar/Titan/100",
    rating: 5,
    text: "Excelente trabajo el que me realizó,  le pedí una tienda tebex completa y me la hizo tal y como se la pedí,  le doy un 10/10 ,es muy paciente la verdad y dedicado a su trabajo",
  },
  {
    name: "Jotkeiz",
    role: "Owner de EclipseCraft",
    avatar: "https://mc-heads.net/avatar/titanium66/100",
    rating: 5,
    text: "Excelente trabajo en el servidor de Minecraft y la tienda Tebex fue muy paciente durante todo el proceso, trabajó de manera rápida y eficiente, y siempre estuvo dispuesto a ayudar ante cualquier duda. El servicio fue económico sin sacrificar calidad, cumpliendo exactamente con lo solicitado. Totalmente recomendado por su profesionalismo y compromiso",
  },
  {
    name: "Santy PY",
    role: "Owner de Dragocraft",
    avatar: "https://mc-heads.net/avatar/SantyPy71/100",
    rating: 5,
    text: "Quería pasar por aquí para darles las gracias de verdad. Ser el owner de Dragocraft es un reto, pero con la mano que me han echado todo fluye mucho mejor Se la rifaron con el tema de los mods y los plugins, el servidor va muy sólido. Pero lo que más me tiene contento es cómo quedó la economía y lo bien que se ven los menús personalizados. Sé que configurar todo eso toma tiempo y cansa, pero se nota el cariño que le ponen. Gracias por creer en el proyecto y por ayudarme a que esto no sea un servidor más, sino algo de lo que todos estemos orgullosos A seguir dándole con todo",
  },
  {
    name: "ヽHoney﹒",
    role: "Owner de ChillMon",
    avatar: "https://mc-heads.net/avatar/Kaleesimin/100",
    rating: 5,
    text: "Muy buen trabajo, rápido y eficaz, además de precios accesibles @Trionyx gracias por el trabajo hecho ⭐️⭐️⭐️⭐️⭐️",
  },
]

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const CARD_WIDTH = 408
const totalWidth = testimonials.length * CARD_WIDTH

const row1Shuffled = shuffleArray(testimonials)
const half = Math.ceil(testimonials.length / 2)
const row2Shuffled = [...testimonials.slice(half), ...testimonials.slice(0, half)]

const duplicatedRow1 = [...row1Shuffled, ...row1Shuffled]
const duplicatedRow2 = [...row2Shuffled, ...row2Shuffled]

function TestimonialCard({ testimonial, index }: { 
  testimonial: typeof testimonials[0]
  index: number 
}) {
  return (
    <div className="flex-shrink-0 w-80 md:w-96 mx-3">
      <div className="glass-strong rounded-2xl p-6 h-full transition-all duration-300 hover:scale-[1.02] hover:border-primary/40">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>

        {/* Text */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          "{testimonial.text}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-secondary">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-sm">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-pixel text-xs text-primary text-glow-purple uppercase tracking-widest">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            <span className="gradient-text">Lo Que Dicen Mis Clientes</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Más de 360 clientes satisfechos avalan mi trabajo
          </p>
        </motion.div>

        {/* Carousel container */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />

          {/* First row - scrolling left */}
          <motion.div
            className="flex mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="flex"
              animate={{ x: [0, -totalWidth] }}
              transition={{
                x: {
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {duplicatedRow1.map((testimonial, index) => (
                <TestimonialCard key={`row1-${index}`} testimonial={testimonial} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Second row - scrolling right */}
          <motion.div
            className="flex"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="flex"
              animate={{ x: [-totalWidth, 0] }}
              transition={{
                x: {
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {duplicatedRow2.map((testimonial, index) => (
                <TestimonialCard key={`row2-${index}`} testimonial={testimonial} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}