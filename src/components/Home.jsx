import React from 'react'
import Navbar from './navbar'
import Hero from './Hero'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import Footer from './Footer'



const Home = () => {
  return (
    
        <>
        <Navbar/>
        <Hero />
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <Footer/>
        </>
  )
}

export default Home