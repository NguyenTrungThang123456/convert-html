import { Col, Row } from "antd";
import React from "react";

const Partner = () => {
  return (
    <Row className="partners-section">
      <div className="container">
        <Row>
          <Col span="4">
            <img src="/images/partners-logo-1.png" alt="" />
          </Col>
          <Col span="4">
            <img src="/images/partners-logo-2.png" alt="" />
          </Col>
          <Col span="4">
            <img src="/images/partners-logo-3.png" alt="" />
          </Col>
          <Col span="4">
            <img src="/images/partners-logo-4.png" alt="" />
          </Col>
          <Col span="4">
            <img src="/images/partners-logo-5.png" alt="" />
          </Col>
          <Col span="4">
            <img src="/images/partners-logo-6.png" alt="" />
          </Col>
        </Row>
      </div>
    </Row>
  );
};

export default Partner;
