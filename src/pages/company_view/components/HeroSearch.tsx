import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import SearchBar from '@/components/SearchBar'

export function HeroSearch() {
  return (
    <div className="relative h-[400px] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <img
        src="/company_view_1.png"
        alt="Business professionals"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="w-full relative z-20 flex flex-col items-center text-center space-y-8 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">View Companies</h1>
        <SearchBar className="w-[70%]" />
      </div>
    </div>
  )
}

