import React from 'react'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <section className="relative h-[400px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/touch.png?height=400&width=1920')`,
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative container mx-auto px-4 py-24 md:px-6">
        <div className="max-w-4xl mx-auto text-center text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif leading-tight">
            Flexible Pricing For Every Business Need
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            At Zdar, we understand that every company has unique requirements when it comes to hiring and talent acquisition. That's why we offer flexible pricing plans tailored to suit businesses of all sizes—from startups to large enterprises. Whether you're looking to make a few strategic hires or streamline your entire recruitment process, we have a solution that fits your needs.
          </p>
        </div>
      </div>
    </section>
  )
}
export default HeroSection;