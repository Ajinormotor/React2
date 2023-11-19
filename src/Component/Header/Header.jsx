import React from 'react'
import { useRef,useEffect } from 'react';
import "../Header/Header.css";
import crossheirlogo from "../../Images/crossheirlogo.jpg";
import { Container } from 'reactstrap';

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


  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add('header__shrink');
    } else {
      headerRef.current.classList.remove('header__shrink');
    }
  };

  const menuToggle = () => {
    menuRef.current.classList.toggle('menu_active');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = e => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;

    window.scroll({
      left: 0,
      top: location - 70,
      behavior: 'smooth'
    });
  };


  return (
    <section className="header"  ref={headerRef}>
      <Container>
   
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

<div className="nav__menu"  ref={menuRef} onClick={menuToggle}>
  <ul className="nav__list">
    {
      navLink.map( item => (
        <li className="nav__items"><a href= {item.path} onClick={handleClick}>{item.display}</a></li>
      ))
    }
  </ul>
</div>
    {/*======SIDE NAVBAR====*/}
    <div className="right__navbar">
      <button  className="r__btn">Contact Us</button>
      <span className="mobile__menu"><i class="ri-menu-5-line" onClick={menuToggle}></i></span>
    </div>


    
      </div>

      </nav>
  
      </Container>
    </section>
  )
}

export default Header

