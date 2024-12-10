import { Button } from "@/components/ui/button"
import { Filter } from 'lucide-react'
import { HeroSearch } from "./components/HeroSearch"
import { JobCard } from "./components/JobCard"

const jobListings = [
  {
    companyName: "Company Name",
    tagline: "Tagline of company",
    location: "State, Country",
    postedTime: "1 week ago"
  },
  // Add more job listings as needed
  {
    companyName: "Company Name",
    tagline: "Tagline of company",
    location: "State, Country",
    postedTime: "1 week ago"
  },
  {
    companyName: "Company Name",
    tagline: "Tagline of company",
    location: "State, Country",
    postedTime: "1 week ago"
  },
  // Add more job listings as needed
  {
    companyName: "Company Name",
    tagline: "Tagline of company",
    location: "State, Country",
    postedTime: "1 week ago"
  },
]

export default function CompanyViewPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSearch />

        <div className="container flex mx-auto px-4 py-8 justify-between items-center my-4">
          <h2 className="text-2xl font-bold text-[#ff4500]">Job Listing</h2>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
      <main className="flex-1 container mx-auto px-4 py-8 shadow shadow-black">

        <div className="mb-6">
          <h3 className="text-lg text-gray-600 mb-4">Job Listings For You</h3>
          <p className="text-sm text-gray-500">Based on your profile here are some suggested jobs for you</p>
        </div>

        <div className="space-y-4">
          {jobListings.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </main>

    </div>
  )
}

