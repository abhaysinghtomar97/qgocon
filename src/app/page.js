import React from 'react'
import Hero from './components/Home/Hero'
import AboutAndDates from './components/AboutAndDates'
import TracksCFP from './components/TrackesCFP'
import Registration from './components/Registration'

const page = () => {
  return (
   <>
   <Hero />
   <AboutAndDates />
   <TracksCFP />
   
   <Registration />
   </>
  )
}

export default page