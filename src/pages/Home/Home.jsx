import React from 'react'
import Banner from './Banner.jsx'
import HomeCategory from './HomeCategory.jsx'
import Register from './Register.jsx'
import LocationSprade from './LocationSprade.jsx'
import AboutUs from './AboutUs.jsx'
import AppSection from './AppSection.jsx'
import Sponsor from './Sponsor.jsx'
import CategoryShowCase from './CategoryShowCase.jsx'

const Home = () => {
  return (
    <div>
        <Banner/>
        <HomeCategory/>
        <CategoryShowCase/>
        <Register/>
        <LocationSprade/>
        <AboutUs/>
        <AppSection/>
        <Sponsor/>
    </div>
  )
}

export default Home