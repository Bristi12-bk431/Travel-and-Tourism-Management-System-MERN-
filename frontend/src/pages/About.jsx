import React from "react";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle";
import experienceImg from "../assets/images/experience.png";
// import "../styles/about.css";

const About = () => {
  return (
    <section className="about__section">
      <Container>
        <Row>
          <Col lg="6">
            <div className="about__content">
              <Subtitle subtitle={"About Us"} />
              <h2>
                With our years of experience <br /> we are here to serve you
              </h2>
              <p>
                We provide the best travel solutions tailored to your needs.
                From planning perfect itineraries to offering 24/7 support, we
                handle every detail. Whether it’s a solo adventure, family
                vacation, or group tour, our expert team ensures a safe, smooth,
                and unforgettable journey every time.
              </p>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trips</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years of Experience</h6>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="6">
            <div className="about__img">
              <img src={experienceImg} alt="Experience" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
