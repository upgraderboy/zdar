import React from 'react'

type Props = {}

{/* Video Section */}
const Video = (props: Props) => {
  return (
    <section className="relative h-[400px] sm:h-[500px] w-full">
    <img
      src="/placeholder.svg"
      alt="Office environment"
      
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
export default Video;