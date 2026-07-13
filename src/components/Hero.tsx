import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  const orbX = useMotionValue(0)
  const orbY = useMotionValue(0)
  const springX = useSpring(orbX, { stiffness: 120, damping: 20 })
  const springY = useSpring(orbY, { stiffness: 120, damping: 20 })
  const stageRef = useRef<HTMLDivElement>(null)

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const cx = window.innerWidth / 2
    const cy = window.innerHeight / 2
    orbX.set(((e.clientX - cx) / cx) * 14)
    orbY.set(((e.clientY - cy) / cy) * 10)
  }

  return (
    <section
      id="top"
      onPointerMove={handlePointerMove}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32 text-center"
    >
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.04),transparent_60%)]" />

      <motion.p
        initial="hidden"
        animate="show"
        custom={0.05}
        variants={fadeUp}
        className="relative mb-7 text-[12px] font-medium uppercase tracking-[0.32em] text-white/45 sm:text-[13px]"
      >
        Introducing Lumen One
      </motion.p>

      <motion.h1
        initial="hidden"
        animate="show"
        custom={0.2}
        variants={fadeUp}
        className="relative max-w-[18ch] text-balance text-[15vw] font-extrabold leading-[0.95] tracking-[-0.045em] sm:text-[12vw] md:text-[10vw] lg:text-[140px] xl:text-[168px]"
      >
        Light, reimagined.
      </motion.h1>

      <motion.p
        initial="hidden"
        animate="show"
        custom={0.35}
        variants={fadeUp}
        className="relative mt-7 max-w-2xl text-balance text-lg font-light leading-snug text-white/50 sm:text-xl md:text-2xl"
      >
        A new kind of ambient display — engineered from a single piece of optical glass, tuned to the way you actually live.
      </motion.p>

      <motion.div
        initial="hidden"
        animate="show"
        custom={0.5}
        variants={fadeUp}
        className="relative mt-11 flex flex-col items-center gap-3.5 sm:flex-row"
      >
        <a
          href="#get"
          className="rounded-full bg-white px-8 py-3.5 text-[15px] font-medium tracking-tight text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(255,255,255,0.35)]"
        >
          Order now
        </a>
        <a
          href="#design"
          className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-[15px] font-medium tracking-tight text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/[0.04]"
        >
          Watch the film
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </motion.div>

      <motion.div
        ref={stageRef}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-16 flex w-full max-w-[640px] items-center justify-center sm:mt-20"
      >
        <div className="pointer-events-none absolute h-[78%] w-[78%] rounded-full opacity-70 blur-3xl" style={{ background: 'radial-gradient(closest-side, rgba(150,120,255,0.45), rgba(255,90,170,0.18) 45%, rgba(0,0,0,0) 75%)' }} />

        <motion.div className="orb-float relative aspect-square w-full" style={{ x: springX, y: springY }}>
          <svg viewBox="0 0 400 400" className="h-full w-full drop-shadow-[0_25px_60px_rgba(90,80,220,0.35)]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="lumenCore" cx="38%" cy="32%" r="75%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="22%" stopColor="#e9e3ff" stopOpacity="0.85" />
                <stop offset="48%" stopColor="#9a8cff" stopOpacity="0.55" />
                <stop offset="72%" stopColor="#5b4bd6" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#0a0a12" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="lumenHalo" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#b9a8ff" stopOpacity="0.35" />
                <stop offset="55%" stopColor="#ff7eb6" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="lumenRing" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#a98bff" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#ff7eb6" stopOpacity="0.55" />
              </linearGradient>
              <linearGradient id="lumenRing2" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <filter id="lumenSoft" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="6" />
              </filter>
            </defs>

            <circle cx="200" cy="200" r="190" fill="url(#lumenHalo)" />

            <g className="ring-spin" opacity={0.55}>
              <circle cx="200" cy="200" r="178" fill="none" stroke="url(#lumenRing)" strokeWidth="1" />
            </g>

            <g className="ring-spin-reverse" opacity={0.7}>
              <circle cx="200" cy="200" r="150" fill="none" stroke="url(#lumenRing2)" strokeWidth="1.2" />
              <circle cx="200" cy="50" r="2.5" fill="#ffffff" />
              <circle cx="350" cy="200" r="1.8" fill="#ffffff" opacity={0.7} />
              <circle cx="200" cy="350" r="1.5" fill="#ffffff" opacity={0.5} />
            </g>

            <circle cx="200" cy="208" r="120" fill="url(#lumenCore)" filter="url(#lumenSoft)" />

            <g className="orb-breathe">
              <circle cx="200" cy="200" r="118" fill="url(#lumenCore)" />
              <ellipse cx="166" cy="158" rx="46" ry="28" fill="#ffffff" opacity={0.55} filter="url(#lumenSoft)" />
              <ellipse cx="172" cy="162" rx="22" ry="14" fill="#ffffff" opacity={0.85} />
              <circle cx="200" cy="200" r="118" fill="none" stroke="#ffffff" strokeOpacity={0.1} strokeWidth="1" />
            </g>

            <path d="M 90 210 Q 200 250 310 200" fill="none" stroke="#ffffff" strokeOpacity={0.18} strokeWidth="1" />
          </svg>
        </motion.div>

        <div
          className="pointer-events-none absolute -bottom-6 left-1/2 h-10 w-[55%] -translate-x-1/2 rounded-full blur-2xl"
          style={{ background: 'radial-gradient(closest-side, rgba(150,120,255,0.35), rgba(0,0,0,0))' }}
        />
      </motion.div>

      <motion.p
        initial="hidden"
        animate="show"
        custom={0.85}
        variants={fadeUp}
        className="relative mt-10 text-center text-[12px] uppercase tracking-[0.22em] text-white/35"
      >
        Available 11.14 &nbsp;·&nbsp; From $1,299
      </motion.p>
    </section>
  )
}
