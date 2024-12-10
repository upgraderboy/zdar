import { Play } from 'lucide-react';
import React from 'react'

type Props = {}

{/* Hero Section */}
const Hero = (props: Props) => {
  return (
    <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col gap-4">
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="leading-tight mb-8">
        In a world full of data, we bring clarity. Find the perfect match between companies and candidates with Zdar’s intelligent platform powered by AI and advanced analytics.
      </h1>
    </div>
    <div className="relative">
    <img src='/home.png' alt='home'></img>
    <span className="absolute top-[42%] right-[46%]">
      <Play className='bg-primary text-white rounded-full p-1' size={40} />
    </span>
    </div>
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2">
        <img src="/orange_logo.png" alt="Logo" className='w-10 h-10' />
        <span className='font-[700]'>ZHAR</span>
      </div>
      <div className="">Connecting Skills With Opportunities</div>
    </div>
    </div>
  </section>
  )
}
export default Hero;