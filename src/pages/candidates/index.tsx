import React, { useState } from 'react'
import { Navbar } from './components/NavBar'
import { Button } from '@/components/ui/button'
import { ProfileCard } from './components/ProfileCard'
import { UserMenu } from './components/UserMenu'
import { Link } from 'react-router'
import { Facebook, Filter, Linkedin, Search, Twitter } from 'lucide-react'
import { Input } from '@/components/ui/input'
import Footer from '@/components/Footer'
import NavBar from '@/components/navbar'
import SearchBar from '@/components/SearchBar'

type Props = {}
const profiles = [
  {
    name: "Candidate Name",
    email: "abcd@gmail.com",
    phone: "+78654534423567",
    description: "Small description",
    imageUrl: "/placeholder.svg",
    experiences: [
      {
        period: "2012-2014",
        designation: "Designation",
        description: "Small description",
      },
      {
        period: "2012-2014",
        designation: "Designation",
        description: "Small description",
      },
      {
        period: "2012-2014",
        designation: "Designation",
        description: "Small description",
      },
      {
        period: "2012-2014",
        designation: "Designation",
        description: "Small description",
      },
      {
        period: "2012-2014",
        designation: "Designation",
        description: "Small description",
      },
    ],
  },
  // Repeat the profile object 3 more times for the grid
  {
    name: "Candidate Name",
    email: "abcd@gmail.com",
    phone: "+78654534423567",
    description: "Small description",
    imageUrl: "/placeholder.svg",
    experiences: [
      {
        period: "2012-2014",
        designation: "Designation",
        description: "Small description",
      },
      {
        period: "2012-2014",
        designation: "Designation",
        description: "Small description",
      },
      {
        period: "2012-2014",
        designation: "Designation",
        description: "Small description",
      },
      {
        period: "2012-2014",
        designation: "Designation",
        description: "Small description",
      },
      {
        period: "2012-2014",
        designation: "Designation",
        description: "Small description",
      },
    ],
  },
  {
    name: "Candidate Name",
    email: "abcd@gmail.com",
    phone: "+78654534423567",
    description: "Small description",
    imageUrl: "/placeholder.svg",
    experiences: [
      {
        period: "2012-2014",
        designation: "Designation",
        description: "Small description",
      },
      {
        period: "2012-2014",
        designation: "Designation",
        description: "Small description",
      },
      {
        period: "2012-2014",
        designation: "Designation",
        description: "Small description",
      },
      {
        period: "2012-2014",
        designation: "Designation",
        description: "Small description",
      },
      {
        period: "2012-2014",
        designation: "Designation",
        description: "Small description",
      },
    ],
  },
  {
    name: "Candidate Name",
    email: "abcd@gmail.com",
    phone: "+78654534423567",
    description: "Small description",
    imageUrl: "/placeholder.svg",
    experiences: [
      {
        period: "2012-2014",
        designation: "Designation",
        description: "Small description",
      },
      {
        period: "2012-2014",
        designation: "Designation",
        description: "Small description",
      },
      {
        period: "2012-2014",
        designation: "Designation",
        description: "Small description",
      },
      {
        period: "2012-2014",
        designation: "Designation",
        description: "Small description",
      },
      {
        period: "2012-2014",
        designation: "Designation",
        description: "Small description",
      },
    ],
  },
]
const CandidatesPage = (props: Props) => {
  const [show, setShow] = useState(false);
  return (

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-[#FF4500]">Profiles</h1>
          <div className="flex gap-4">
          <UserMenu />
          <Button variant={"outline"} className='outline outline-2'><Filter /> Filter</Button>
          </div>
        </div>


        <SearchBar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <div key={index} className="flex flex-col items-center">
              <ProfileCard {...profile} show={show} setShow={setShow} />
              <Button
                variant="default"
                className="bg-[#FF4500] hover:bg-[#cc3700] mt-4 w-40"
              >
                Load More
              </Button>
            </div>
          ))}
        </div>
      </main>
  )
}
export default CandidatesPage;