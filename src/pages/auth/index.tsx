import { Button } from '@/components/ui/button'
import { Globe, User } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import Footer from '../../components/Footer'
import RegisterBtn from '../home/components/RegisterBtn'
import NavBar from '@/components/navbar'

type Props = {}

const AuthPage = (props: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="bg-[#2B4356] text-white">
        {/* <NavBar /> */}
      </header>

      {/* Main Content */}
      {/* Hero Section */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-[#2B4356]">Sign Up To ZDAR</h1>
              <div className="space-y-4 text-gray-600">
                <p>
                  If you are a company or a candidate looking to utilize our platform services, there is a basic registration you must start with now. Each account is carefully monitored and verified to confirm spam/advertising updates.
                </p>
                <p>
                  Candidates' profiles are not visible outside the platform's virtual environment. By default, the candidates' profile details are not disclosed to registered companies not subscribed. After completing the candidate's profile and privacy settings, candidates can choose to make their profile visible to all companies or select specific companies.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/auth.png?height=400&width=600"
                alt="Business meeting"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Interested Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#2B4356] mb-8">INTERESTED?</h2>
            <p className="mx-auto text-gray-600">
              Break down the barriers and let Zdar work for you! More precisely, simplify the search by concentrating on a single platform and controlling all your needs, one step when entering data and processing it, not a micro platform which offers thousands of scattered and unstable profiles.
            </p>
            <p className="mx-auto text-gray-600 mb-12">
              Zdar stands at the intersection of technology and human connection. We simplifying the way data is analyzed and used, we bring clarity to the complex landscape, creating real bonds companies and professionals share.
            </p>
            <RegisterBtn />
          </div>
        </div>
      </main>
      </div>
  )
}

export default AuthPage;