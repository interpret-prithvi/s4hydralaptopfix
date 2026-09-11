import Header         from './components/Header'
import Hero           from './sections/Hero'
import PrecisionTrust from './sections/PrecisionTrust'
import LaptopRepair   from './sections/LaptopRepair'
import HydraRepair    from './sections/HydraRepair'
import MoreServices   from './sections/MoreServices'
import WhyChooseUs    from './sections/WhyChooseUs'
import AboutUs        from './sections/AboutUs'
import FinalCTA       from './sections/FinalCTA'
import Footer         from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrecisionTrust />
        <LaptopRepair />
        <HydraRepair />
        <MoreServices />
        <WhyChooseUs />
        <AboutUs />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
