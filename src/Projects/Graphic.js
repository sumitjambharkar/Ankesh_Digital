import React from 'react'
import './Graphic.css'

const Graphic = () => {
  return (
    <div>
      <section class="blog">
        <div class=" container">
        
          <div class="blog-head text-center">
            <h2>Image</h2>
            <h6>Overlay Slide</h6>
          </div>

     
          <div class="row">
            <div class="col-md-6 col-lg-4">
              <div class="item animated wow fadeIn">
                  <img src="https://i.ibb.co/CKNmhMX/blog1.jpg" alt=""/>
                  <div class="overlay top-overlay">
    <div class="text">Top Overlay</div>
  </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="item animated wow fadeIn">
                  <img src="https://i.ibb.co/m5yGbdR/blog2.jpg" alt=""/>
                  <div class="overlay bottom-overlay">
    <div class="text">Bottom Overlay</div>
  </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="item animated wow fadeIn">
                  <img src="https://i.ibb.co/YXV3zmh/blog3.jpg" alt=""/>
                  <div class="overlay right-overlay">
    <div class="text">Right Overlay</div>
  </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="item animated wow fadeIn">
                  <img src="https://i.ibb.co/CKNmhMX/blog1.jpg" alt=""/>
                  <div class="overlay left-overlay">
    <div class="text">Left Overlay</div>
  </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="item animated wow fadeIn">
                  <img src="https://i.ibb.co/m5yGbdR/blog2.jpg" alt=""/>
                  <div class="overlay fade-overlay">
    <div class="text">Fade in overlay</div>
  </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="item animated wow fadeIn">
                  <img src="https://i.ibb.co/YXV3zmh/blog3.jpg" alt=""/>
                  <div class="overlay title-overlay">
    <div class="text">Image Overlay Title</div>
  </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Graphic