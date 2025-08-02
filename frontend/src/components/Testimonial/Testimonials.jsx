import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {

    const settings= {
      dots:true,
      infinite:true,
      autoplay:true,
      speed: 1000,
      swipeToSlide: true,
      autoplaySpeed:2000,
      slidesToShow:3,
      

      responsive:[
        {
            breakpoint:992,
            settings: {
                slidesToShow: 2,
                slidesToScroll:1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            },
        },
      ]
    }

  return <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p>From the moment I booked till I returned home, everything was perfectly organized — I didn’t have to worry about a thing</p>

        <div className="d-flex align-items-center gap-4 mt-3">
           <img src={ava01} className='w-25 h-25 rounded-2'alt="" /> 
           <div>
               <h5 classname="mb-0 mt-3">John Doe</h5>
               <p>Customer</p>
           </div>
        </div>



    </div>

    <div className="testimonial py-4 px-3">
        <p>Their team helped me discover hidden gems I’d never find on my own. It truly felt like a once-in-a-lifetime adventure!</p>

        <div className="d-flex align-items-center gap-4 mt-3">
           <img src={ava02} className='w-25 h-25 rounded-2'alt="" /> 
           <div>
               <h5 classname="mb-0 mt-3">Lia Franklin</h5>
               <p>Customer</p>
           </div>
        </div>



    </div>

    <div className="testimonial py-4 px-3">
        <p>What I loved the most was the personal touch — they treated me like family, not just a customer.</p>

        <div className="d-flex align-items-center gap-4 mt-3">
           <img src={ava03} className='w-25 h-25 rounded-2'alt="" /> 
           <div>
               <h5 classname="mb-0 mt-3">John Doe</h5>
               <p>Customer</p>
           </div>
        </div>



    </div>

    <div className="testimonial py-4 px-3">
        <p>The guides were knowledgeable, friendly, and made the entire trip so enjoyable. I learned so much while having fun!</p>

        <div className="d-flex align-items-center gap-4 mt-3">
           <img src={ava02} className='w-25 h-25 rounded-2'alt="" /> 
           <div>
               <h5 classname="mb-0 mt-3">Lia Franklin</h5>
               <p>Customer</p>
           </div>
        </div>



    </div>

    <div className="testimonial py-4 px-3">
        <p>I’ve traveled with other companies before, but this one exceeded my expectations in every way — I’m already planning my next trip!</p>

        <div className="d-flex align-items-center gap-4 mt-3">
           <img src={ava03} className='w-25 h-25 rounded-2'alt="" /> 
           <div>
               <h5 classname="mb-0 mt-3">John Doe</h5>
               <p>Customer</p>
           </div>
        </div>



    </div>



  </Slider>
}

export default Testimonials;