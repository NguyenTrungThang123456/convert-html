import {
  DownOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { BackTop, Col, Input, Menu, Row } from "antd";
import React from "react";

const Footer = () => {
  return (
    <>
      <Row className="footer-section-header">
        <div className="container">
          <Row>
            <Col span={6}>
              <Row>
                <img src="/images/mt-0617-home-logo.png" alt="" />
                <h1 className="bran">EVOLUTION</h1>
              </Row>
              <h4
                style={{
                  color: "#ffffff",
                }}
              >
                With this pre-made website, you get a built-in CMS, a rich set
                of user-friendly tools, free updates, 24/7 professional customer
                support and many other goodies.
              </h4>
              <div className="social-links">
                <a href="a">
                  <FacebookOutlined />
                </a>
                <a href="a">
                  <TwitterOutlined />
                </a>
                <a href="a">
                  <LinkedinOutlined />
                </a>
              </div>
            </Col>
            <Col span={6}>
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Team</li>
                <li>Owner Profile</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact us</li>
              </ul>
            </Col>
            <Col span={6}>
              <h2>Contact us</h2>
              <Menu>
                <Menu.Item icon={<MailOutlined />}>
                  info@demoMenu.Itemnk.org
                </Menu.Item>
                <Menu.Item icon={<PhoneOutlined />}>(123) 456-78-90</Menu.Item>
                <Menu.Item icon={<DownOutlined />}>
                  <p>6036 Richmond hwy.,Alexandria, VA, 22303</p>
                </Menu.Item>
              </Menu>
            </Col>
            <Col span={6}>
              <h1>Sign up for updates</h1>
              <Input size="large" prefix={"E-mail"} />
              <div>
                <a href="aa" className="btn">
                  Subcribe
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Row>
      <Row className="footer-section-footer">
        <div className="container">
          <Row gutter={16}>
            <p>Copyright © 2020 </p>
            <li>
              <a href="aa">Privacy Policy</a>
            </li>
          </Row>
        </div>
      </Row>
      <BackTop>
        <div className="back-top">
          <UpOutlined />
        </div>
      </BackTop>
    </>
  );
};

export default Footer;
