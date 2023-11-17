import React from 'react'
import "../Overview/Overview.css"
import { Col, Container, Row } from 'reactstrap'

import team from "../../Images/team.jpg"

const Overview = () => {
  return (

    <section  className="overview" data-aos="fade-left" 
    data-aos-delay="200"
    data-aos-duration="600"
    >
  <Container>
  <div className="overview__row">
            <Row>
            
            <Col>
            <div className="overview__col">
          
            <div className="overview__img"  >
            <img src ={team}
  alt=""  />        
  </div>
  </div>
      </Col>

            <Col>
            <div className="overview__col">
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
         </div>
            </Col>
          
        </Row>

        </div>
        </Container>
  
    
    </section>
  )
}

export default Overview