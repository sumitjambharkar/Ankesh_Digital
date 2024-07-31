import React from 'react'
import './App.css'
import Home from './component/Home'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Project from './component/Project';
import About from './component/About';
import Expirence from './component/Expirence';
import Contact from './component/Contact';
import Seo from './Projects/Seo';
import Smm from './Projects/Smm';
import Google from './Projects/Google';
import Content from './Projects/Content';
import Graphic from './Projects/Graphic';
import Website from './Projects/Website';
import Certification from './component/Certification';

const App = () => {
  return (
    <div>
       <Router>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/experience' element={<Expirence/>}/>
        <Route path='/certification' element={<Certification/>}/>
        <Route path='/contact' element={<Contact/>}/>

        {/* Projects */}
        <Route path='/seo' element={<Seo/>}/>
        <Route path='/smm' element={<Smm/>}/>
        <Route path='/google-ads' element={<Google/>}/>
        <Route path='/content-writing' element={<Content/>}/>
        <Route path='/graphic-designing' element={<Graphic/>}/>
        <Route path='/websites' element={<Website/>}/>
       </Routes>
       <Footer/>
    </Router>
    
    </div>
  )
}

export default App