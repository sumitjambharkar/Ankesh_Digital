import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom/dist";

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div>
      <nav class="navbar">
        <div class="logo">
          <Link to="/">
           <h1>mornich </h1>
          </Link>
        </div>
        <ul class="nav">
          <li class="nav-items">
            <Link to='/experience'>
            <span class="link-text">My Experience</span>
            
              <i class="fa-solid fa-house"></i>
            </Link>
          </li>
          <li class="nav-items">
            <Link to='/project'>
            <span class="link-text">My Project</span>
            
              <i class="fa-solid fa-store"></i>
            </Link>
          </li>
          <li class="nav-items">
            <Link to='/about'>
            <span class="link-text">About Me</span>
              <i class="fa-solid fa-user"></i>
            </Link>
          </li>
          <li class="nav-items">
            <Link to='/certification'>
            <span class="link-text">Certification</span>
              <i class="fa-solid fa-circle-info"></i>
            </Link>
          </li>
          <li class="nav-items">
            <Link to='/contact'>
            <span class="link-text">Contact</span>
              <i class="fa-solid fa-circle-info"></i>
            </Link>
          </li>
        </ul>

        <div className="tog" onClick={toggleMenu}>
          <ion-icon size="large" name="menu-outline"></ion-icon>
        </div>
      </nav>
      {isOpen ? (
        <div onClick={()=>setIsOpen(!isOpen)}  className="mobile-nav" >
          <Link className="mobmen" to='/experience'><h3>My Experience</h3></Link>
          <Link  className="mobmen" to='/project' ><h3>My Project</h3></Link>
          <Link className="mobmen" to='/about'><h3>About Me</h3></Link>
          <Link className="mobmen" to='/certification'><h3>Certification</h3></Link>
          <Link className="mobmen" to='/'><h3>Whatsapp</h3></Link>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
