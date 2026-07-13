import { motion } from 'framer-motion'

const LINKS = [
  { label: 'Product', href: '#products' },
  { label: 'Design', href: '#design' },
  { label: 'Technology', href: '#features' },
  { label: 'Support', href: '#get' },
]

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 text-[13px] text-white/45 sm:px-10">
        <a href="#top" className="font-medium tracking-[0.18em] text-white/90 transition-colors duration-300 hover:text-white">
          LUMEN
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#products" className="transition-colors duration-300 hover:text-white">
          Buy
        </a>
      </div>
    </motion.header>
  )
}
