import NavBar from "@/components/navbar"

import { HeroSection } from "./components/Hero"

import Footer from "@/components/Footer"
import { ContactSection } from "./components/Contact"


export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <NavBar /> */}
      <HeroSection />
      <ContactSection />
    </div>
  )
}

