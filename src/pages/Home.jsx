import React from 'react'
import Hero from '../components/Hero'
import Homecard from '../components/Homecard'
import ViewAlljobs from '../ViewAlljobs'
import JobListings from '../components/JobListings'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Homecard/>
      <JobListings isHome={true}/>
      <ViewAlljobs/>
    </div>
  )
}

export default Home
