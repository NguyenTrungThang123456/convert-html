import { Col, Row } from "antd";
import React from "react";

const Hero = () => {
  return (
    <Row className="hero-section">
      <div className="container">
        <Row>
          <Col span={13}>
            <h1
              style={{
                fontSize: "42px",
                marginTop: "15px",
              }}
            >
              Why You Should Use
              <em>
                <strong> MotoCMS?</strong>
              </em>
            </h1>
            <h1>
              Evolution is the best theme for your business website on MotoCMS
            </h1>
            <h3>
              This fascinating web design is a perfect way for your business to
              find itself online. With MotoCMS you will be able to launch your
              website just within a few steps and customize your template
              anytime without leaving your web browser.
            </h3>
            <a href="aa" className="btn">
              More About Us
            </a>
          </Col>
          <Col span={11}>
            <img
              style={{
                width: "100%",
              }}
              src="/images/mt-0617-home-img_1.png"
              alt=""
            />
          </Col>
        </Row>
      </div>
    </Row>
  );
};

export default Hero;
