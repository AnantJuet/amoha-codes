// import React from 'react'
import About from "../../components/MainPageComponents/About"
import BusinessPartners from "../../components/MainPageComponents/BusinessPartner"
import Home from "../../components/MainPageComponents/Home"
import OurServices from "../../components/MainPageComponents/OurServices"
import WhyChooseAmoha from "../../components/MainPageComponents/WhyChooseAmoha"
import OurLearners from "../../components/MainPageComponents/OurLearners"
import OurTeam from "../../components/MainPageComponents/MyTeam"
import FAQ from "../../components/MainPageComponents/FrequentlyAskedQuestion"
import Testimonials from "../../components/MainPageComponents/Testimonial"
interface HomepageProps {
  darkMode: boolean;
}

const Homepage = ({ darkMode }: HomepageProps) => {
  return (
    <>
   <Home darkMode={darkMode}/>
   <div className={`${darkMode ? "bg-gray-900" : "bg-white"}`}>
   <About darkMode={darkMode}/>
   <BusinessPartners darkMode={darkMode}/>
   <OurServices darkMode={darkMode}/>
   <WhyChooseAmoha darkMode={darkMode}/>
   <OurLearners darkMode={darkMode}/>
   <Testimonials darkMode={darkMode}/>
   <OurTeam darkMode={darkMode}/>
   <FAQ darkMode={darkMode}/>
   </div>
   </>
  )
}

export default Homepage
