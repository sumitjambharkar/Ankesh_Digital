import React from 'react'
import '../App.css'

const About = () => {
  return (
    <div>
    
<link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet" />

<section class="about section" id="about">
  <div class="about__container container grid">
    <h2 class="section__title-1">
      <span>About Me.</span>
    </h2>

    <div class="about__perfil">
      <div class="about__image">
        <img className='about__image' src="https://res.cloudinary.com/dljygdklh/image/upload/v1716910628/New_Project_1_1_ycmc8n.png"/>

        <div class="about__shadow"></div>

        <div class="geometric-box"></div>

        <div class="about__box"></div>
      </div>
    </div>

    <div class="about__info">
      <p class="about__description">
        My Name Is <b>Ankesh Sunil Jambharkar</b> I Am a <b>Software Engineer & Digital Marketing Expert</b>, I Have 4+ Years of
        Experience And Many companys Are Happy With
        the Work.<b>When I Join a Company</b> I Give it My <b>Best</b>. I Believe in Doing <b>Practical
Work</b> Rather Than Theory Work. I Know How to Grow a Business on an
Online Platform and I am a Multi-Talented Person Which is Why I am a
Strong Candidate For Your Company <b> Thank You.</b>
      </p>

      <ul class="about__list">
        <li class="about__item">

          <h2>My Skills Are:</h2>

<table>
  <tr>
  
    <th>Digital Marketing</th>
    <th>Web Development</th>
  </tr>
  <tr>

    <td>SEO - On Page & Off Page</td>
    <td>Html | Css | Bootstrap</td>
  </tr>
  <tr>
    
    <td>SMM - Social Media Marketing</td>
    <td>Wordpress</td>
  </tr>
  <tr>

    <td>PPC - Pay-Per-Click</td>
    <td>React.js</td>
  </tr>
  <tr>

    <td>Google Ads</td>
    <td>Next.js</td>
  </tr>
  <tr>
   
    <td>LinkedIn Ads</td>
    <td>Basic Javascript</td>
  </tr>
  <tr>
  
    <td>Affiliate Marketing
</td>
    <td>Node + NPM
</td>
  </tr>

  <tr>
  
  <td>Content Marketing
</td>
  <td>Domain Registration
</td>
</tr>
<tr>
  
  <td>Graphic Designing
</td>
  <td>Website Live With Hosting
</td>
</tr>
</table>

        </li>
      </ul>

      <div class="about__buttons">
        <a href="#contact" class="button">
          <i class="ri-send-plane-line"></i> Contact Me
        </a>

        <a href="https://www.linkedin.com/" target="_blank" class="button__ghost">
        <ion-icon name="logo-linkedin"></ion-icon>
        
        </a>
        <a href="https://www.linkedin.com/" target="_blank" class="button__ghost">
        <ion-icon name="logo-facebook"></ion-icon>
        
        </a>
        <a href="https://www.linkedin.com/" target="_blank" class="button__ghost">
        <ion-icon name="logo-instagram"></ion-icon>
        
        </a>
        <a href="https://www.linkedin.com/" target="_blank" class="button__ghost">
        <ion-icon name="logo-whatsapp"></ion-icon>
        
        </a>
      
       
        
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default About