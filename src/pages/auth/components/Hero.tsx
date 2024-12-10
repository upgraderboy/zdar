import React from 'react'

type Props = {}
{/* Hero Section */}
const Hero = (props: Props) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2B4356] leading-tight mb-8">
            In A World Full Of Data, We Bring Clarity. Find The Perfect Match Between Companies And Candidates With Zdar's Intelligent Platform Powered By AI And Advanced Analytics.
          </h1>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative h-[400px] sm:h-[500px] w-full">
        <img
          src="/placeholder.svg"
          alt="Office environment"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            variant="outline"
            size="icon"
            className="w-16 h-16 rounded-full bg-[#FF4500] hover:bg-[#cc3700] border-none"
          >
            <Play className="h-8 w-8 text-white" />
          </Button>
        </div>
      </section>
  )
}
export default Hero;