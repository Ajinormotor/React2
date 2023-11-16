import React from 'react'
import "../Header/Header.css";
import crossheirlogo from "../../Images/crossheirlogo.jpg";

const navLink = [
  { 
    path : '#',
  display: 'Home'
},
 { 
  path : '#',
display: 'About Us'
},
{ 
  path : '#',
display: 'Services'
},
]

const Header = () => {
  return (
    <section className="header">
   
      <nav>

      {/*==========FIRST NAVBAR======*/}
      <div className="first__navbar">
        
         
        <div className="contact">
          <ul>
            <li> <i class="ri-mail-line"></i> contact@crossheirs.com.ng</li>
            <li> <i class="ri-phone-line"></i> +2340803021725</li>
          </ul>
        </div>
        



        <div className="socials">
          <ul>
            <li><i class="ri-facebook-circle-line"></i></li>
            <li><i class="ri-linkedin-fill"></i></li>
            <li><i class="ri-twitter-line"></i></li>
            </ul>
        </div>
        


       
      </div>

      {/*======SECOND NAVBAR====*/}
      <div className="second__navbar">
        <div className="logo">
          <p><img src={ crossheirlogo}  alt="logo"  />CROSSHEIRS</p>
        </div>

<div className="navigate">
  <ul className="menu">
    {
      navLink.map( item => (
        <li className="nav__items"><a href= {item.path}>{item.display}</a></li>
      ))
    }
  </ul>
</div>
    {/*======SIDE NAVBAR====*/}
    <div className="right__navbar">
      <button  className="r__btn">Contact Us</button>
    </div>


    
      </div>

      </nav>
  
    </section>
  )
}

export default Header

