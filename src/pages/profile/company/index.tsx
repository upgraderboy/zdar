"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Edit2, Globe, MoreVertical } from 'lucide-react'
import JobOffer from "./components/JobOffer"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { TextInput } from "@mantine/core"

export default function CompanyProfilePage() {
  const [offerLetter, setOfferLetter] = useState<number[]>([1])
  const [edit, setEdit] = useState(false);
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Company Header */}
      <div className="bg-[#2d4356] text-white pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img
                src="/placeholder.svg?height=80&width=80"
                alt="L'Oréal Paris Logo"
                className="h-20 w-20 rounded-full bg-white p-2"
              />
              <div>
                <h1 className="text-2xl font-bold">L'Oréal Paris</h1>
                <a href="#" className="text-sm text-gray-300">www.lorealparis.com</a>
              </div>
            </div>
            <Button variant="ghost" className="text-white" onClick={()=>setEdit(!edit)}>
              <Edit2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-2">
              <p className="flex items-center"><span className="text-gray-300">Name:</span> <Input variant={"default"} /></p>
              <p><span className="text-gray-300">Sector:</span> Lorem ipsum</p>
              <p><span className="text-gray-300">City:</span> United States of America, California</p>
            </div>
            <div className="space-y-2">
              <p><span className="text-gray-300">Address:</span> Address will go here</p>
              <p><span className="text-gray-300">Phone number:</span> 833-856-7325</p>
              <p><span className="text-gray-300">Email:</span> lorealparis@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="space-y-6">
          {/* Description Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <h2 className="text-xl font-semibold">Description</h2>
              <Button variant="ghost" size="icon">
                <Edit2 className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                "Because you're worth it." With this world-recognized slogan, and from the beginning, L'Oréal Paris has encouraged women to live their best lives according to their own rules and desires.
              </p>
              <p className="text-gray-600">
                Committed to quality, to scientific excellence and to permanent innovation, we are proud to be the world's leading cosmetics brand that makes the best of beauty available to all. With L'Oréal Paris, beauty is synonymous with luxury and accessibility, for fans everywhere to make their own.
              </p>
            </CardContent>
          </Card>

          {/* Job Offers */}
          {
            offerLetter.map((item, index)=>(
              <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between">
              <h2 className="text-xl font-semibold text-[#ff5722]">
                Job Offer <span className="text-gray-500">(Marketing Director)</span>
              </h2>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <Edit2 className="h-4 w-4" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Activate</DropdownMenuItem>
                    <DropdownMenuItem>Suspend</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
          </Card>
            ))
          }

          {/* Add Job Offer Button */}
          <JobOffer offerLetter={offerLetter} setOfferLetter={setOfferLetter} />
        </div>
      </div>
    </div>
  )
}

