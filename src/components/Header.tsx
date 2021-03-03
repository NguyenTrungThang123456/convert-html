import { DownOutlined } from "@ant-design/icons";
import { Col, Menu, Row } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React from "react";

const Header = () => {
  return (
    <Row className="header-section">
      <div className="container">
        <Row>
          <Col className="header-logo" span={14}>
            <img src="/images/mt-0617-home-logo.png" alt="" />
            <h2 className="bran text">Evolution</h2>
          </Col>
          <Col className="header-nav" span={10}>
            <Menu mode="horizontal" theme="dark">
              <SubMenu title="Home" icon={<DownOutlined />}>
                <Menu.Item>Link 1</Menu.Item>
                <Menu.Item>Link 2</Menu.Item>
                <Menu.Item>Link 3</Menu.Item>
                <Menu.Item>Link 4</Menu.Item>
                <Menu.Item>Link 5</Menu.Item>
              </SubMenu>
              <Menu.Item>About</Menu.Item>
              <SubMenu title="Page" icon={<DownOutlined />}>
                <Menu.Item>Link 1</Menu.Item>
                <Menu.Item>Link 2</Menu.Item>
                <Menu.Item>Link 3</Menu.Item>
                <Menu.Item>Link 4</Menu.Item>
                <Menu.Item>Link 5</Menu.Item>
              </SubMenu>
              <Menu.Item>Blog</Menu.Item>
              <Menu.Item>Contacts</Menu.Item>
            </Menu>
            {/* Header Navigation */}
          </Col>
        </Row>
        <Col className="hero" span={24}>
          <h1 className="text">
            <em>
              <strong>Create, Manage</strong>
            </em>{" "}
            and{" "}
            <em>
              <strong>Edit Your Business</strong>
            </em>
          </h1>
          <h1 className="text">Website with Our Responsive Website Builder.</h1>
          <h3 className="text">
            You Don't Have to Be a Professional Web Developer to Start Your
            Personal Project
          </h3>
          <li>
            <a href="aa">Learn More</a>
          </li>
        </Col>
      </div>
    </Row>
  );
};

export default Header;
