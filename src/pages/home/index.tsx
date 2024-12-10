import { Button } from "@/components/ui/button"

import { Globe, User, Play, Facebook, Twitter, Linkedin } from 'lucide-react'
import { Link } from "react-router"
import Hero from "./components/Hero"
import NavBar from "@/components/navbar"
import Video from "./components/video"
import Testimonials from "./components/Testimonials"
import Stats from "./components/Stats"
import Logo from "./components/Logo"
import Footer from "../../components/Footer"
import RegisterBtn from "./components/RegisterBtn"

export default function HomePage() {
  return (
    <main className="min-h-screen ">
      {/* <NavBar /> */}
      <Hero />
      <Testimonials />
      <Stats />

      <RegisterBtn />











    </main>
  )
}

