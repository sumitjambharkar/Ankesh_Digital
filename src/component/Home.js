import React from 'react'
import Banner from './Banner'
import About from './About'
import Expirence from './Expirence'
import Project from './Project'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
        <Banner/>
      <About/>
      <Project/>
      <Expirence/>
      <Contact/>
      
    </div>
  )
}

export default Home