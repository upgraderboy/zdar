import { useState } from 'react'
import './App.css'
import ContactPage from './pages/contact'
import { Route, Routes } from 'react-router'
import HomePage from './pages/home'
import AuthPage from './pages/auth'
import CandidatesPage from './pages/candidates'
import NavBar from './components/navbar'
import Footer from './components/Footer'
import AboutPage from './pages/about'
import ServicesPage from './pages/services'
import PartnerShipPage from './pages/partnership_media'
import PricingPlanPage from './pages/pricing_plan'
import SignupCandidatePage from './pages/signupCandidate'
import RegisterCandidate from './pages/auth/candidate'
import ApplicationForm from './pages/application_form'
import CompanyViewPage from './pages/company_view'
import CompanyProfilePage from './pages/profile/company'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/services' element={<ServicesPage />} />
      <Route path='/partnerships-media' element={<PartnerShipPage />} />
      <Route path='/pricing-plan' element={<PricingPlanPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/signup-candidate' element={<SignupCandidatePage />} />
      <Route path='/signup-company' element={<SignupCandidatePage />} />
      <Route path='/register-candidate' element={<RegisterCandidate />} />
      <Route path='/candidate-application' element={<ApplicationForm />} />
      <Route path='/company-view' element={<CompanyViewPage />} />
      <Route path='/user' element={<CandidatesPage />} />
      <Route path='/company-profile' element={<CompanyProfilePage />} />
      <Route path='*' element={<HomePage />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
