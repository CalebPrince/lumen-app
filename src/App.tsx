import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductLineup from './components/ProductLineup'
import BentoGrid from './components/BentoGrid'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <ProductLineup />
        <BentoGrid />
        <Carousel />
      </main>
      <Footer />
    </div>
  )
}
