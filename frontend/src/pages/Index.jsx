import React from 'react'
import HeroSection from '../components/Hero'
import Navbar from '../components/Navbar'
import TrustedCompanies from '../components/TrustedCompanies'
import FeaturedProperties from '../components/FeaturedProperties'
import HeroSub from '../components/HeroSub'

const Index = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <TrustedCompanies/>
      <FeaturedProperties/>
      <HeroSub/>
    </div>
  )
}

export default Index