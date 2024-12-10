import { Button } from '@/components/ui/button';
import React from 'react'

type Props = {}

{/* CTA Buttons */}
const CTA = (props: Props) => {
  return (
    <section className="py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center gap-4">
      <Button
        variant="default"
        className="bg-[#2B4356] hover:bg-[#1a2937] text-white px-8 py-6 text-lg"
      >
        Start Hiring Now
      </Button>
      <Button
        variant="default"
        className="bg-[#FF4500] hover:bg-[#cc3700] text-white px-8 py-6 text-lg"
      >
        Find Your Job Opportunity
      </Button>
    </div>
  </section>
  )
}
export default CTA;