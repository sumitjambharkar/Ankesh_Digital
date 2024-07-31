import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    
    <footer class="footer" >
	<div class="waves">
		<div class="wave" id="wave1"></div>
		<div class="wave" id="wave2"></div>
		<div class="wave" id="wave3"></div>
		<div class="wave" id="wave4"></div>
	</div>

	<ul class="menu">
		<li class="menu__item"><a class="menu__link" href="#"><p>Facebook</p></a></li>
		<li class="menu__item"><a class="menu__link" href="#"><p>Instagram </p></a></li>
		<li class="menu__item"><a class="menu__link" href="#"><p>Linkedin</p></a></li>


	</ul>
	<p >Made with AJ Bolte</p>

</footer>

    </>
  )
}

export default Footer