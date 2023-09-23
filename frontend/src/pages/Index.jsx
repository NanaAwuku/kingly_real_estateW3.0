import React from 'react'
import TrustedCompanies from '../components/TrustedCompanies'
import NewHero from '../components/newHero'
import CoreValues from '../components/CoreValues'
import NewNav from '../components/NewNav'
import PopularResidence from '../components/PopularResidences'
import GoldSection from '../components/GoldSection'
import { FooterWithLogo } from '../components/Footer'
import Invest from '../components/Invest'


const Index = () => {
  return (
    <div className=''>
      <NewNav/>
      <NewHero/>
      <TrustedCompanies/>
      <Invest/>
      <PopularResidence/>
      <CoreValues/>
      <GoldSection/>
      <FooterWithLogo/>
    </div>
  )
}

export default Index