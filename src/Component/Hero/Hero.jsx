import React from 'react'
import "../Hero/Hero.css"
import { Container } from 'reactstrap'

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero__brief">
        <i class="ri-briefcase-4-line"></i>
        <p>With years of experience in the consulting field, we have honed our expertise to offer comprehensive solutions that cater to the specific 
            requirements of businesses, ranging from startups to established enterprises.</p>
        </div>
        </Container>
    </section>
  )
}

export default Hero
