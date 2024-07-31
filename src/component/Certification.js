import React from 'react'
import './Certification.css'

const Certification = () => {
  return (
    <div>
      <div class="as container-fluid container-a">
  <div class="row">
    <div class="col-sm-12 col-md-10 col-lg-6 col-a">
            
      <ul class="boxxx-tabs">
        <li class="tab active"><a >Resume</a></li>
        <li class="tab"><a >Portfolio</a></li>
      </ul>
      
      <div class="boxxx-content">
        <div class="col-content" id="resume">   
          <img src="https://i.imgur.com/vVCcehm.png" alt="resume placeholder"/>
        </div>
        <div class="col-content hideBlock" id="portfolio"> 
          <img src="https://i.imgur.com/GVceez8.png" alt="portfolio placeholder"/> 
        </div>
      </div>

    </div>
  </div>
</div>
    </div>
  )
}

export default Certification
