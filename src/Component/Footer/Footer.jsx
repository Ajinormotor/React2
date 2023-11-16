import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import crossheirlogo from "../../Images/crossheirlogo.jpg"
import '../Footer/Footer.css'

const Footer = () => {
  return (
   <section className="footers">
    <Container>

        <div className="footer__row">
        <Row>

   <Col>

   <div className="footer-logo">
   <img src={ crossheirlogo }   alt="" />
   <p>Need Help? We’re always here when you need us</p>
   </div>
   </Col>
   

        <Col>
            <div className="footer__col">
                <h1>QUICK CONTACT</h1>

            <ul>
                <li  className='d-flex'> <i class="ri-phone-line"> +234080832021725,   +2348032002510, +2348030758386</i></li>
                <li><i class="ri-mail-line"> contact@crossheirs.com.ng</i> </li>
                <li><i class="ri-map-pin-line"> 6 Coker road, Coker-Aguda,
                    Surulere, Lagos</i>
                </li>
            </ul>
            </div>
            </Col>

            <Col>
            <div className="footer__col">
                <h1>COMPANY</h1>

            <ul>
                <li>About Us </li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
            </div>
            </Col>

            <Col>
            <div className="footer__col">
                <h1>SOCIALS</h1>

            <ul>
            <li><i class="ri-facebook-circle-line"></i> Facebook</li>
            <li><i class="ri-linkedin-fill"></i> Linkedin</li>
            <li><i class="ri-twitter-line"></i> Twitter</li>
            </ul>
            </div>
            </Col>



        </Row>
        </div>


  <hr  />
  <p>© 2023 Crossheirs Limited. All rights reserved.
Developed by Automa8</p>


    </Container>
   </section>
  )
}

export default Footer