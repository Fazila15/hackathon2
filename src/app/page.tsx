import React from 'react'
import HeroSection from './components/HeroSection'
import BrandSection from './components/brand/BrandSection'
import CeramicsSection from './components/ceramics/CeramicsSection'

import FeaturesSection from './components/Feature'
import PopularProducts from './components/PopularProducts'
import { SignUp } from '@clerk/nextjs'





function Home() {
  return (
    <main className=' flex flex-col gap-10'>
      <HeroSection/> 
      <BrandSection/>
      <CeramicsSection/>
     <PopularProducts/>
      <SignUp/>
      <FeaturesSection/>
    </main>
  )
}

export default Home