export function HeroSection() {
  return (
    <div className="relative h-[400px] bg-[url('/touch.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In Touch With Zdar
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl">
            We're here to help! Whether you're a company looking to streamline your recruitment process or a candidate seeking new opportunities, the Zdar team is ready to assist you.
          </p>
        </div>
      </div>
    </div>
  )
}
