import { Facebook, Linkedin, Twitter } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router';

type Props = {}

{/* Footer */}
const Footer = (props: Props) => {
  return (
    <footer className="w-full bg-[#2B4356] text-white py-4 fixed bottom-0">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm">
          © 2023 ZDAR - All Rights Reserved
        </div>
        <div className="flex space-x-4 text-sm">
          <Link to="/privacy" className="hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link to="/cookies" className="hover:text-gray-300">
            Cookies
          </Link>
          <Link to="/terms" className="hover:text-gray-300">
            Terms And Conditions
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link to="#" className="hover:text-gray-300">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link to="#" className="hover:text-gray-300">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link to="#" className="hover:text-gray-300">
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  </footer>
  )
}
export default Footer;