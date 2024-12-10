export function AboutSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-[#ff4500] sm:text-4xl">About ZDAR</h2>
            <p className="text-gray-700 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              We are experiencing a period, where{" "}
              <span className="font-semibold">information plays a significant role in our life</span>. In the era of big
              data, we are witnessing the explosion of massive amounts of data from various sources, which rapidly overwhelm
              us and we have difficulties to manage it. We realize the importance of tools, processes and technologies to
              collect, centralize, process, analyze, and make sense of this data for effective decision-making.
            </p>
          </div>
          <div className="aspect-video overflow-hidden rounded-xl">
            <img
              alt="Business meeting"
              className="object-cover w-full h-full"
              src="/placeholder.svg?height=400&width=600"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
