import React from 'react'
import Hero from './components/Home/Hero'
import AboutAndDates from './components/AboutAndDates'
import TracksCFP from './components/TrackesCFP'
import Registration from './components/Registration'
import CallForPapers from './components/CallForPaper'

const page = () => {
  return (
   <>
   <Hero />
   <CallForPapers />
   <AboutAndDates />
   <TracksCFP />
   
   <Registration />
   </>
  )
}

export default page