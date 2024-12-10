import React from 'react'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <section className="relative h-[500px] overflow-hidden bg-[url('/service_header.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4 py-24 md:px-6">
        <div className="max-w-3xl mx-auto text-center text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Tailored Solutions For Companies And Candidates
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            At our core, we are committed to connecting people and data in relevant ways.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            With our user-friendly, minimalist interface, Zdar centralizes and manages data from diverse profiles and companies, transforming it into actionable insights. Our platform uses AI powered tools and advanced algorithms to make the complex simple—helping companies make informed, efficient hiring decisions while saving time and resources.
          </p>
        </div>
      </div>
    </section>
  )
}
export default HeroSection;