import React from 'react'

import Slider from 'react-slick'
import { Container } from 'reactstrap'
import "../Heroslider/Heroslider.css"

const Heroslider = () => {
    const settings = {
        fade:true,
        speed: 2000,
       infinite:true,
       autoplay:true,
       autoPlaySpeed:3000,
       slideToShow:1,
       slideToScroll:1,
       pauseOnHover:false,
    }


  return <Slider {...settings}  className="hero__slider">

    <div className="slider__item  slider__item-01">
        <Container>
            <div className="slider__content">
                <h4 className="text-light">
                    WELCOME TO CROSSHEIRS - <span>impossible means nothing to us......</span>
                </h4>
                <p>Enhance your decision-making process and boost your overall performance.</p>
            
            <button className="btn  reserve__btn  mt-4">Contact Us</button>
            </div>
            </Container>
            </div>

            <div className="slider__item  slider__item-02">
                <Container>
            <div className="slider__content">
                <h4 className="text-light">
                    WELCOME TO CROSSHEIRS - <span>impossible means nothing to us......</span>
                </h4>
                <p>Enhance your decision-making process and boost your overall performance.</p>
            
            <button className="btn  reserve__btn  mt-4">Contact Us</button>
            </div>
        </Container>
    </div>

  </Slider> 
}

export default Heroslider