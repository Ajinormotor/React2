import React from 'react'
import { Col,  Container,  Row } from 'reactstrap'
import "../Our/Our.css";

import multiethnic from "../../Images/multiethnic.jpg"
import engineers from "../../Images/engineers.jpg"
import overviewImg from "../../Images/overviewImg.webp"
import estate from "../../Images/estate.webp"


const Our = () => {
  return (
   <section className="our"  data-aos="fade-right" 
   data-aos-delay="200"
   data-aos-duration="600">
<Container>
   
    <Row>
        <Col>
        <div className="heading__text">
            <div className="heading__body">
        <h1>Our Services</h1>
        <p>We provide a diverse range of supplies, including consultancy services, facilities management ,
             project management, real estate, digital transformation, leadership training and development.</p>
             </div>
           
             <div className='heading__btn'>
             <button className="our__btn">
            Learn More <i class="ri-arrow-right-fill"></i>
         </button>
         </div>

         </div>
         </Col>
    </Row>
   
    <Row>
        <Col >
        <div className="our__row">

     <div className="our__col">
        <img src={ multiethnic}  alt=""   />
      <div className="our__col__text">
        <h2> Consultancy Service </h2>
        <p>Whether you are a small start-up or an established corporation, our consultancy services are designed to help you thrive in a dynamic and competitive market. We provide strategic insights, market analysis, and expert advice to
             enhance your decision-making process and boost your overall performance.</p>
      </div>
     </div>

     <div className="our__col">
     <img src={  engineers }  alt=""   />
      <div className="our__col__text">
        <h2> Facilities Management</h2>
        <p>Whether you are a small start-up or an established corporation, our consultancy services are designed to help you thrive in a dynamic and competitive market. We provide strategic insights, market analysis, and expert advice to
             enhance your decision-making process and boost your overall performance.</p>
      </div>
       </div>



        </div>
         </Col>


    </Row>
 

    <Row>
        <Col>
        <div className="our__row">

     <div className="our__col">
        <img src={ overviewImg }  alt=""   />
      <div className="our__col__text">
        <h2>Project Management </h2>
        <p>Whether you are a small start-up or an established corporation, our consultancy services are designed to help you thrive in a dynamic and competitive market. We provide strategic insights, market analysis, and expert advice to
             enhance your decision-making process and boost your overall performance.</p>
      </div>
     </div>

     <div className="our__col">
     <img src={  estate }  alt=""   />
      <div className="our__col__text">
        <h2> Real Estate</h2>
        <p>Whether you are a small start-up or an established corporation, our consultancy services are designed to help you thrive in a dynamic and competitive market. We provide strategic insights, market analysis, and expert advice to
             enhance your decision-making process and boost your overall performance.</p>
      </div>
       </div>



        </div>
         </Col>

         
    </Row>
</Container>

   </section>
  )
}

export default Our