import React from 'react'
import './Project.css'
import { Link } from 'react-router-dom'

const Project = () => {
    
  return (
    <>
 
<section id="advertisers" class="advertisers-service-sec pt-5 pb-5">
  <div class="container">
    <div class="row">
      <div class="section-header text-center">
        <h2 class="fw-bold fs-1">
   
          <span class="b-class-secondary">My Projects </span>
        </h2>
        <p class="sec-icon"><i class="fa-solid fa-gear"></i></p>
      </div>
    </div>
    <div class="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
      <div class="col">
        <div class="service-card">
          <div class="icon-wrapper">
            <i class="fa-solid fa-chart-line"></i>
          </div>
          <h3>SMM</h3>
          <p>
          Social Media Marketing,Meta Ads,Linkedin,
          Twitter,Truecaller & Oth.
          </p>
        </div>
      </div>
      <div class="col">
        <div class="service-card">
          <div class="icon-wrapper">
           <img src='https://res.cloudinary.com/dljygdklh/image/upload/v1722073338/seo-icon_1_qaaxdk.png'></img>
          </div>
          <h3>SEO</h3>
          <p>
          Search Engine Optimization,On Page SEO,Off Page SEO,Technical SEO,Local SEO.
          </p>

        </div>
      </div>
      <div class="col">
        <div class="service-card">
          <div class="icon-wrapper">
            <i class="fa-solid fa-globe"></i>
          </div>
          <h3>GOOGLE ADS</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam consequatur necessitatibus eaque.
          </p>
        </div>
      </div>
      <div class="col">
        <div class="service-card">
          <div class="icon-wrapper">
            <i class="fa-solid fa-money-check-dollar"></i>
          </div>
          <h3>WEBSITE</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam consequatur necessitatibus eaque.
          </p>
        </div>
      </div>
      <div class="col">
        <div class="service-card">
          <div class="icon-wrapper">
            <i class="fa-regular fa-circle-check"></i>
          </div>
          <h3>GRAPHIC DESIGN</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam consequatur necessitatibus eaque.
          </p>
        </div>
      </div>
      <div class="col">
        <div class="service-card">
          <div class="icon-wrapper">
            <i class="fa-solid fa-people-group"></i>
          </div>
          <h3>Content Writing</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam consequatur necessitatibus eaque.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default Project