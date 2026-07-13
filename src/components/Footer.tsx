const MENU = [
  { label: 'Product', href: '#products' },
  { label: 'Design', href: '#design' },
  { label: 'Technology', href: '#features' },
  { label: 'Support', href: '#get' },
]

const LEGAL = ['Privacy Policy', 'Terms of Use', 'Accessibility']

export default function Footer() {
  return (
    <footer id="get" className="border-t border-white/10 px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-2">
            <span className="text-[13px] font-medium tracking-[0.18em] text-white/90">LUMEN</span>
            <p className="mt-4 max-w-xs text-sm font-light text-white/40">Light, reimagined.</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white/80">Menu</h4>
            <ul className="mt-4 space-y-3">
              {MENU.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-white/40 transition-colors duration-300 hover:text-white/80">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white/80">Legal</h4>
            <ul className="mt-4 space-y-3">
              {LEGAL.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/40 transition-colors duration-300 hover:text-white/80">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-xs uppercase tracking-[0.18em] text-white/30">
          © 2026 Lumen, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
