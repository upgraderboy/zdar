import { Building2, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface JobCardProps {
  companyName: string
  tagline: string
  location: string
  postedTime: string
}

export function JobCard({ companyName, tagline, location, postedTime }: JobCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex space-x-4">
            <div className="p-3 text-white">
              <Building2 className="bg-blue-500 rounded-lg p-2" size={40} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{companyName}</h3>
              <p className="text-gray-600">{tagline}</p>
              <p className="text-gray-500 text-sm mt-2">{location}</p>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <span className="text-gray-500 text-sm">Posted {postedTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

