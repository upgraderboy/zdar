import React from 'react'
import { HeroSection } from './components/HeroSection';
import { ApproachSection } from './components/ApproachSection';

type Props = {}

const PartnerShipPage = (props: Props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <ApproachSection />
      </main>
    </div>
  )
}
export default PartnerShipPage;