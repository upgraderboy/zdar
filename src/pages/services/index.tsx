import React from 'react'
import ServicesSection from './components/ServicesSection';
import HeroSection from './components/HeroSection';

type Props = {}

const ServicesPage = (props: Props) => {
  return (
    <main className="flex-1">
        <HeroSection />
        <ServicesSection />
      </main>
  )
}
export default ServicesPage;