import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Maximize2 } from 'lucide-react'
import { Dispatch, SetStateAction } from "react"


interface Experience {
  period: string
  designation: string
  description: string
}

interface ProfileCardProps {
  name: string
  email: string
  phone: string
  description: string
  experiences: Experience[]
  imageUrl: string,
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export function ProfileCard({
  name,
  email,
  phone,
  description,
  experiences,
  imageUrl,
  show,
  setShow,
}: ProfileCardProps) {
  return (
    <Card className="relative" onClick={()=>setShow(!show)}>
      <CardHeader className="flex items-center pb-2">
        <div className="relative w-20 h-20">
          <img
            src={imageUrl}
            alt={name}

            className="rounded-full object-cover"
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2"
        >
          <Maximize2 className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="text-center">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <div className="text-sm text-gray-600 space-y-1 mb-4">
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>{description}</p>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-left">Experience</h4>
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-4 text-sm text-left">
              <div className="w-24 flex-shrink-0 text-gray-600">{exp.period}</div>
              <div className="flex-1">
                <div className="font-medium">{exp.designation}</div>
                <div className="text-gray-500">{exp.description}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

