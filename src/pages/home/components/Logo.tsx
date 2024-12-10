import React from 'react'

type Props = {}

{/* Logo Section */}
const Logo = (props: Props) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
    <div className="border">
      <img
        src="/logo.png"
        alt="ZDAR"
        width={40}
        height={40}
        className="mx-auto mb-4"
      />
      <span className="">ZHAR</span>
    </div>
      <p className="text-xl text-[#2B4356]">Connecting Skills With Opportunities</p>
  </section>
  )
}
export default Logo;