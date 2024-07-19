import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Project = () => {
    
  return (
    <>
    <div className='projects'>
    <ul id="product-directory">
        <li>
            <Link to="/seo">
                <img src="https://res.cloudinary.com/dj1gcouh3/image/upload/v1717862513/New_Project_9_kmxuov.png"/>
                <span>MY ( SEO ) WORK</span>
            </Link>
        </li>
        <li>
            <Link to="/smm">
                <img src="https://res.cloudinary.com/dj1gcouh3/image/upload/v1717862608/New_Project_10_qqizom.png"/>
                <span>MY ( SMM ) WORK</span>
            </Link>
        </li>
        <li>
            <Link to="/google-ads">
                <img src="https://res.cloudinary.com/dj1gcouh3/image/upload/v1717862608/New_Project_10_qqizom.png"/>
                <span>( GOOGLE ADS ) WORK</span>
            </Link>
        </li>
       
        <li>
            <Link to="/content-writing">
                <img src="https://res.cloudinary.com/dj1gcouh3/image/upload/v1717864060/New_Project_12_vky9gw.png"/>
                <span>CONTENT WRITING BLOGS</span>
            </Link>
        </li>
        <li>
            <Link to="/graphic-designing">
                <img src="https://res.cloudinary.com/dj1gcouh3/image/upload/v1717864242/New_Project_13_jab5ou.png"/>
                <span>MY GRAPHIC DESIGNING</span>
            </Link>
        </li>
        <li>
            <Link to="/websites">
                <img src="https://res.cloudinary.com/dj1gcouh3/image/upload/v1717864529/New_Project_14_ibxdws.png"/>
                <span>CREATED WEBSITE</span>
            </Link>
        </li>
    </ul>
    </div>

    </>
  )
}

export default Project