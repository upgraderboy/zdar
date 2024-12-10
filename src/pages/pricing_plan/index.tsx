import React from 'react'
import HeroSection from './components/HeroSection';
import { PricingTable } from './components/PricingTable';
import { CustomSolutions } from './components/CustomSolution';

type Props = {}

const PricingPlanPage = (props: Props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <PricingTable />
        <CustomSolutions />
      </main>
    </div>
  )
}
export default PricingPlanPage;