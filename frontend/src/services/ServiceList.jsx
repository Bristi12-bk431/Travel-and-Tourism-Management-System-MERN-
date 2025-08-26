import React from 'react'
import ServiceCard from './ServiceCard'
// eslint-disable-next-line no-unused-vars
import{ Col } from "reactstrap"

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl: weatherImg,
        title: "Calculate weather",
        desc: "Get accurate weather forecasts for your travel dates so you can plan better and pack smart.",
    },
    {
         imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Connect with experienced local guides who bring destination to life with fascinating stories and insights.",

    },
    {
         imgUrl: customizationImg,
        title: "Customization",
        desc: "Tailor your trip exactly how you want it from luxury stays to offbeat adventures,we've got you covered.",
    },
]

const ServiceList = () => {
  return (
    <>
    {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
            <ServiceCard item={item} />
        </Col>
    ))}
    </>

    
  );
};

export default ServiceList