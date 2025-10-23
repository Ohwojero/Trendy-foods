import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import FeaturedMeals from "@/components/featured-meals"
import TodaysSpecials from "@/components/todays-specials"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <FeaturedMeals />
      <TodaysSpecials />
      <Testimonials />
      <Footer />
    </main>
  )
}
