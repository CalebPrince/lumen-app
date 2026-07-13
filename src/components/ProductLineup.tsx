import { motion } from 'framer-motion'

type Product = {
  name: string
  tagline: string
  price: string
  badge?: string
  gradient: [string, string, string]
  ring: string
  size: number
}

const PRODUCTS: Product[] = [
  {
    name: 'Lumen Mini',
    tagline: 'The essential glow, in your pocket.',
    price: 'From $699',
    gradient: ['#eef2ff', '#9aa5d6', '#333a5c'],
    ring: '#8891c4',
    size: 92,
  },
  {
    name: 'Lumen One',
    tagline: 'Our most balanced display yet.',
    price: 'From $1,299',
    badge: 'Most popular',
    gradient: ['#f5f3ff', '#9a8cff', '#3a2f7a'],
    ring: '#a98bff',
    size: 108,
  },
  {
    name: 'Lumen Pro',
    tagline: 'Uncompromising, for color-critical work.',
    price: 'From $1,899',
    gradient: ['#fff7ec', '#e6b980', '#5c3d1f'],
    ring: '#e6b980',
    size: 116,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
}

function ProductRender({ product, id }: { product: Product; id: string }) {
  const [c1, c2, c3] = product.gradient
  return (
    <svg viewBox="0 0 200 200" width={product.size} height={product.size} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={`${id}-body`} cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor={c1} />
          <stop offset="50%" stopColor={c2} />
          <stop offset="100%" stopColor={c3} />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="94" fill="none" stroke={product.ring} strokeOpacity={0.35} strokeWidth="1" />
      <circle cx="100" cy="100" r="72" fill={`url(#${id}-body)`} />
      <ellipse cx="80" cy="76" rx="26" ry="15" fill="#ffffff" opacity={0.55} />
    </svg>
  )
}

export default function ProductLineup() {
  return (
    <section id="products" className="relative mx-auto max-w-5xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <h2 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">The lineup.</h2>
        <p className="mt-3 text-lg text-white/50">Three sizes. One idea, taken as far as you want it.</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {PRODUCTS.map((product, i) => (
          <motion.div
            key={product.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-white/10 bg-surface/80 p-8 text-center transition-colors duration-300 hover:border-white/20 hover:bg-surface-hover/80"
          >
            {product.badge && (
              <span className="absolute right-5 top-5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[11px] font-medium text-white/60">
                {product.badge}
              </span>
            )}

            <div className="flex h-32 w-full items-center justify-center">
              <ProductRender product={product} id={`product-${i}`} />
            </div>

            <h3 className="mt-6 text-xl font-medium tracking-tight">{product.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/50">{product.tagline}</p>
            <p className="mt-5 text-sm text-white/70">{product.price}</p>

            <a
              href="#get"
              className="mt-6 w-full rounded-full border border-white/15 py-2.5 text-[14px] font-medium text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/[0.06]"
            >
              Buy
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
