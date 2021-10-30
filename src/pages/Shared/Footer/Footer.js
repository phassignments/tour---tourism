import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="foot">
        <Container>
          <Row>
            <Col
              md={3}
              sm={6}
              xs={12}
              className="text-start column-gap-responsive"
            >
              <div className="foot-title">
                <h2>About us</h2>
              </div>
              <div className="foot-detail-1">
                <p>
                  Tourism is travel for pleasure or business; also the theory
                  and practice of touring, the business of attracting,
                  accommodating, and entertaining tourists, and the business of
                  operating tours.
                </p>
              </div>
            </Col>
            <Col
              md={3}
              sm={6}
              xs={12}
              className="text-start column-gap-responsive"
            >
              <div className="foot-title">
                <h2>Our Packages Are</h2>
              </div>
              <ul className="foot-detail-2">
                <li>COUPLE PACKAGES</li>
                <li>HONEYMOON PACKAGES</li>
                <li>TOUR PACKAGES</li>
                <li>BACHELORETTE PARTY</li>
                <li>Business Trip</li>
              </ul>
            </Col>
            <Col
              md={3}
              sm={6}
              xs={12}
              className="text-start column-gap-responsive"
            >
              <div className="foot-title">
                <h2>Our Services In</h2>
              </div>
              <ul className="foot-detail-3">
                <li>ASIA</li>
                <li>EUROPE</li>
                <li>NORTH AMERICA</li>
                <li>OCEANIA</li>
                <li>AFRICA</li>
              </ul>
            </Col>
            <Col
              md={3}
              sm={6}
              xs={12}
              className="text-start column-gap-responsive"
            >
              <div className="foot-title">
                <h2>Contact info</h2>
              </div>
              <ul className="foot-detail-4">
                <li> Tour & Tourism, Dhaka, Bangladesh</li>
                <li> info@TournTourism.com</li>
                <li> +8801234567890</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
