import React from 'react'
import "../Overview/Overview.css"
import { Col, Row } from 'reactstrap'

import team from "../../Images/team.jpg"

const Overview = () => {
  return (

    <section  className="overview" data-aos="fade-left" 
    data-aos-delay="200"
    data-aos-duration="600"
    >
  
        <Row>
            <Col  lg='6'  sm='9'  md='7'>
            <div className="overview__img"  >
            <img src ={team}
  alt=""  />        
  </div>
      </Col>
            <Col>
            <div className="overview__text" data-aos="fade-down">
            <h1>Overview</h1>

            <p>Welcome to CROSSHEIRS LIMITED, 
                your one-stop destination for comprehensive and top-notch consultancy services</p>
            

            <p>We take pride in offering a diverse range of solutions to cater to your business needs across various industries. Our team
                 of experts is committed to delivering exceptional results and guiding you towards success.</p>
           
         <button className="overview__btn">
            Learn More <i class="ri-arrow-right-fill"></i>
         </button>

         </div>
            </Col>
        </Row>
  
    
    </section>
  )
}

export default Overview