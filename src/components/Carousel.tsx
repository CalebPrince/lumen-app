import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

type Slide = {
  tag: string
  title: string
  glow: string
  render: (id: string) => React.ReactNode
}

const SLIDES: Slide[] = [
  {
    tag: 'Chapter 1',
    title: 'A body milled from a single block',
    glow: 'rgba(180,180,190,0.18)',
    render: (id) => (
      <svg viewBox="0 0 200 200" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id={`${id}-core`} cx="40%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#f2f2f4" />
            <stop offset="55%" stopColor="#9c9ca3" />
            <stop offset="100%" stopColor="#2b2b30" />
          </radialGradient>
        </defs>
        {[92, 74, 56].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#ffffff" strokeOpacity={0.14} strokeWidth="1" />
        ))}
        <circle cx="100" cy="100" r="38" fill={`url(#${id}-core)`} />
        <path d="M100 12 L100 32 M100 168 L100 188 M12 100 L32 100 M168 100 L188 100" stroke="#ffffff" strokeOpacity={0.3} strokeWidth="1" />
      </svg>
    ),
  },
  {
    tag: 'Chapter 2',
    title: 'Glass that curves without distortion',
    glow: 'rgba(140,170,255,0.16)',
    render: (id) => (
      <svg viewBox="0 0 200 200" width="150" height="150" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`${id}-lens`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e8edff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#5c6fbf" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <ellipse cx="86" cy="100" rx="66" ry="78" fill={`url(#${id}-lens)`} stroke="#ffffff" strokeOpacity={0.25} strokeWidth="1" />
        <ellipse cx="122" cy="100" rx="66" ry="78" fill="none" stroke="#ffffff" strokeOpacity={0.35} strokeWidth="1" />
        <path d="M60 60 Q90 90 60 140" fill="none" stroke="#ffffff" strokeOpacity={0.5} strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    tag: 'Chapter 3',
    title: 'Silence, engineered on purpose',
    glow: 'rgba(255,255,255,0.08)',
    render: (id) => (
      <svg viewBox="0 0 200 200" width="150" height="150" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id={`${id}-dot`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[100, 76, 52, 28].map((r, i) => (
          <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#ffffff" strokeOpacity={0.28 - i * 0.06} strokeWidth="1" />
        ))}
        <circle cx="100" cy="100" r="6" fill={`url(#${id}-dot)`} />
      </svg>
    ),
  },
  {
    tag: 'Chapter 4',
    title: 'Color, calibrated by hand',
    glow: 'rgba(255,190,140,0.16)',
    render: (id) => {
      const swatches = ['#f2c14e', '#e0674f', '#6c8ee8', '#7fd1a6', '#c98bd6', '#f2f2f4']
      return (
        <svg viewBox="0 0 200 200" width="150" height="150" xmlns="http://www.w3.org/2000/svg">
          {swatches.map((c, i) => {
            const x = 46 + (i % 3) * 40
            const y = 66 + Math.floor(i / 3) * 40
            return <rect key={c} x={x} y={y} width="30" height="30" rx="6" fill={c} opacity={0.85} />
          })}
          <circle cx="100" cy="100" r="86" fill="none" stroke="#ffffff" strokeOpacity={0.18} strokeWidth="1" />
          <path d={`M100 6 L100 194 M6 100 L194 100`} stroke="#ffffff" strokeOpacity={0.12} strokeWidth="1" />
        </svg>
      )
    },
  },
]

export default function Carousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const scrollToIndex = (i: number) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[i] as HTMLElement
    track.scrollTo({ left: card.offsetLeft - 24, behavior: 'smooth' })
    setActive(i)
  }

  return (
    <section id="design" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-end justify-between"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">The story behind it.</h2>
            <p className="mt-3 text-white/50 text-lg">Swipe through the making of.</p>
          </div>
          <div className="hidden md:flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active === i ? 'w-6 bg-white' : 'w-1.5 bg-white/25 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-hide mx-auto max-w-5xl"
        style={{ scrollbarWidth: 'none' }}
        onScroll={(e) => {
          const track = e.currentTarget
          const idx = Math.round(track.scrollLeft / (track.clientWidth * 0.72))
          if (idx !== active) setActive(idx)
        }}
      >
        {SLIDES.map((slide, i) => (
          <motion.div
            key={slide.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="relative flex h-[520px] w-[72vw] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-surface/80 p-8 md:w-[420px]"
          >
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-90"
              style={{ background: `radial-gradient(closest-side, ${slide.glow}, transparent 70%)` }}
            />
            <div className="relative flex flex-1 items-center justify-center">{slide.render(`slide-${i}`)}</div>
            <div className="relative">
              <span className="text-xs font-medium uppercase tracking-widest text-white/60">{slide.tag}</span>
              <h3 className="mt-3 text-2xl font-medium leading-snug tracking-tight">{slide.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
