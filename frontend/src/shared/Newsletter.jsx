import React from 'react'
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from'../assets/images/male-tourist.png'

const Newsletter = () => {
  return (
    <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
               <div className="newsletter__content">
                 <h2>Subsribe now to get useful travelling information.</h2>


                 <div className="newsletter__input">
                    <input type="email" placeholder='Enter your email' />
                    <button className="btn newsletter__btn">Subscribe</button>
                 </div>

                 <p>Subscribe to receive exclusive travel tips, destination guides, seasonal offers, and insider secrets straight to your inbox. Whether you're planning your first trip or your next adventure, our expert insights will help you travel smarter, safer, and cheaper. Don’t miss out on hidden gems, travel hacks, and exciting deals — let us be your travel companion!</p>
               </div>
            </Col>
            <Col lg='6'>
              <div className="newsletter__img">
                <img src={maleTourist} alt="" />
              </div>
            </Col>
        </Row>
    </Container>
  </section>
  )
  
}


export default Newsletter;