import React from 'react'
import { Link } from 'react-router';
import { Button } from '../ui/button';
import { ChevronDown, Globe, User } from 'lucide-react';
import { UserMenu } from '../UserMenu';

type Props = {}

{/* Navigation */}
const NavBar = (props: Props) => {
  return (
    <nav className="bg-[#2B4356] text-white sticky top-0 z-10">
    <div className="container w-[90vw] mx-auto flex items-center justify-between h-16">
        <Link to={"/"} className='flex items-center'>
        <img src="/logo.png" alt="ZDAR" width={100} height={40} className="h-10 w-auto" />
        <span className="font-semibold text-2xl">ZDHAR</span>
        </Link>
        <div className="flex items-center gap-6 ">
          <div className="hidden md:flex gap-10 items-center">
          {["Home", "About", "Services", "Partnerships & Media", "Pricing Plan"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                  className="text-white hover:text-gray-300"
                >
                  {item}
                </Link>
              ))}
          </div>
          <div className="flex items-center gap-6">
            <Button className="px-6"><Link to={"/contact"}>Contact</Link></Button>
            <div className="flex items-center gap-4">
            <div className="md:flex items-center gap-2 hidden">
            <Globe className="h-6 w-6" />
            <ChevronDown size={14} />
            </div>
            <UserMenu />
          </div>
          </div>
        </div>
    </div>
  </nav>
  )
}
export default NavBar;