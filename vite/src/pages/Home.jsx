import Hero from '../components/Hero.jsx'
import FeatureItem from '../components/FeatureItem.jsx'
import { features } from '../data/features.js'

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {features.map((feature) => (
          <FeatureItem key={feature.id} {...feature} />
        ))}
      </section>
    </main>
  )
}
