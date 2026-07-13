import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Feature = {
  title: string
  description: string
  className: string
  icon: ReactNode
}

const glyph = (path: string) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d={path} stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const FEATURES: Feature[] = [
  {
    title: 'Engineered precision',
    description: 'Every surface, every edge, machined to a tolerance you can feel but never see.',
    className: 'md:col-span-2',
    icon: glyph('M12 2 2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5'),
  },
  {
    title: 'All-day power',
    description: 'A battery built for the way you actually work.',
    className: 'md:col-span-1',
    icon: glyph('M7 4h7l-1 7h4l-8 9 1-7H6l1-9Z'),
  },
  {
    title: 'Private by design',
    description: 'On-device intelligence keeps everything local, encrypted, and yours.',
    className: 'md:col-span-1',
    icon: glyph('M12 2 4 5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V5l-8-3Z'),
  },
  {
    title: 'A display that disappears',
    description: 'Vivid enough for daylight. Calibrated enough for color-critical work.',
    className: 'md:col-span-2',
    icon: glyph('M4 5h16v11H4zM9 20h6M12 16v4'),
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function BentoGrid() {
  return (
    <section id="features" className="relative mx-auto max-w-5xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">
          Designed around what matters.
        </h2>
        <p className="mt-3 text-white/50 text-lg">Four ideas. One coherent object.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {FEATURES.map((feature, i) => (
          <motion.div
            key={feature.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -4 }}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-surface/80 p-7 transition-colors duration-300 hover:border-white/20 hover:bg-surface-hover/80 ${feature.className}`}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  'radial-gradient(400px circle at var(--x,50%) var(--y,0%), rgba(255,255,255,0.06), transparent 60%)',
              }}
            />
            <div className="relative flex h-full flex-col justify-between gap-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.06] border border-white/10">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-tight">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
