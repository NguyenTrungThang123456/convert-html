import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import {
  DownOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { BackTop, Button, Carousel, Col, Input, Layout, Menu, Row } from "antd";
const { SubMenu } = Menu;

function App() {
  return (
    <Layout>
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
            <h1 className="text">
              Website with Our Responsive Website Builder.
            </h1>
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
                This fascinating web design is a perfect way for your business
                to find itself online. With MotoCMS you will be able to launch
                your website just within a few steps and customize your template
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

      <Row className="whatwedo-section">
        <div className="container">
          <Row className="whatwedo-section-header">
            <h1>
              Evolution{" "}
              <em>
                <strong>is more</strong>
              </em>{" "}
              than just{" "}
              <em>
                <strong>a template</strong>
              </em>
            </h1>
            <h4>
              With this pre-made website, you get a built-in CMS, a great set of
              user-friendly tools, free updates, 24/7 professional customer
              support and many other goodies.
            </h4>
          </Row>

          <Row className="whatwedo-section-content">
            <Col span="8">
              <img src="/images/whatwedo-img-1.png" alt="" />
              <h1>Responsive Design</h1>
              <h4>
                This theme is 100% mobile-friendly. Your website will look great
                on all popular mobile devices like smartphones and tablets.
              </h4>
            </Col>
            <Col span="8">
              <img src="/images/whatwedo-img-2.png" alt="" />
              <h1>Drag & Drop Editor</h1>
              <h4>
                Creating a website for your own business with MotoCMS is easy as
                pie due to simple drag-and-drop functionality.
              </h4>
            </Col>
            <Col span="8">
              <img src="/images/whatwedo-img-3.png" alt="" />
              <h1>Preset Builder</h1>
              <h4>
                Transform appearance of contact forms, buttons and other widgets
                for your website.
              </h4>
            </Col>
            <Col span="8">
              <img src="/images/whatwedo-img-4.png" alt="" />
              <h1>Fascinating Widgets</h1>
              <h4>
                Use a wide range of widgets for your website customization.
              </h4>
            </Col>
            <Col span="8">
              <img src="/images/whatwedo-img-5.png" alt="" />
              <h1>Parallax & Animation</h1>
              <h4>
                Make your website more attractive for users. Add parallax and
                animation effects.
              </h4>
            </Col>
            <Col span="8">
              <img src="/images/whatwedo-img-6.png" alt="" />
              <h1>Google Fonts</h1>
              <h4>
                Use a large collection of beautiful text fonts designed by
                Google.
              </h4>
            </Col>
            <Col span="8">
              <img src="/images/whatwedo-img-7.png" alt="" />
              <h1>SEO-friendly</h1>
              <h4>
                Optimize your website URLs, write unique keywords, add 301
                redirects, enable website indexation and more.
              </h4>
            </Col>
            <Col span="8">
              <img src="/images/whatwedo-img-8.png" alt="" />
              <h1>Blog Functionality</h1>
              <h4>
                Start a career of a professional blogger with a fully-featured
                blog. Write, update, delete articles and customize your blog
                design right in the admin panel.
              </h4>
            </Col>
            <Col span="8">
              <img src="/images/whatwedo-img-9.png" alt="" />
              <h1>White Label</h1>
              <h4>Retail MotoCMS products and promote your brand.</h4>
            </Col>
          </Row>
        </div>
      </Row>

      <Row className="callback-section">
        <div className="container">
          <div className="callback-section-content">
            <h1>
              Set your own time of{" "}
              <em>
                <strong>phone call</strong>
              </em>{" "}
              and we'll{" "}
              <em>
                <strong>call you back.</strong>
              </em>
            </h1>
            <li>
              <a href="ab" className="btn">
                Get Callback
              </a>
            </li>
          </div>
        </div>
      </Row>

      <Row className="slogan-section">
        <div className="container">
          <Carousel effect="fade">
            <div>
              <h3>
                “After working many years in a large corporation I started my
                own business in order to evolve as an entrepreneur. The MotoCMS
                site was a good choice to begin my entrepreneurship. A few
                hundred bucks is a reasonable investment.”
              </h3>
              <h4>- Juan Ramires</h4>
            </div>
            <div>
              <h3>
                “I was looking for a pre-made website. I didn't even want to
                customize it. Adding a few pics was enough. I uploaded them
                fast. No problem. The website builder is user-friendly.”
              </h3>
              <h4>- Arthur Parker</h4>
            </div>
            <div>
              <h3>
                “The good looking website for good money. I don't know a thing
                about how to do a website. The website builder is easy-to-use.”
              </h3>
              <h4>- Billy Heck</h4>
            </div>
          </Carousel>
        </div>
      </Row>

      <Row className="employee-section">
        <div className="container">
          <div className="employee-section-header">
            <h1>
              We are
              <em>
                <strong> responsible </strong>
              </em>
              for your business
            </h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <Row className="employee-section-content" gutter={16}>
            <Col span="8">
              <img src="/images/home-team-img-1.jpg" alt="" />
              <h1>Mary Jones</h1>
              <p>Senior Developer</p>
              <h3>
                Mary is one of the leading developers in the MotoCMS team. She
                implements her amazing ideas that help improve our products.
              </h3>
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
            <Col span="8">
              <img src="/images/home-team-img-2.jpg" alt="" />
              <h1>Richard White</h1>
              <p>Designer</p>
              <h3>
                Richard has made dozens of MotoCMS templates for our vast
                collection of websites. He is a talented person.
              </h3>
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
            <Col span="8">
              <img src="/images/home-team-img-3.jpg" alt="" />
              <h1>Melissa Spector</h1>
              <p>Pre-Sale Manager</p>
              <h3>
                Melissa loves working with MotoCMS customers. Her motto is:
                "Each customer is important".
              </h3>
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
          </Row>
        </div>
      </Row>

      <Row className="themes-section">
        <div className="container">
          <div className="themes-section-header">
            <h1>Child pages</h1>
            <p>Check out our responsive themes based on Evolution</p>
          </div>
          <Row className="themes-section-content" gutter={[16, 24]}>
            <Col span="8">
              <img src="/images/themes-image-1.png" alt="" />
              <h1>Evolution Medical Page</h1>
              <p>
                Need a website for a clinic? Choose this beautiful template with
                a high level of functionality.
              </p>
              <a href="aa" className="btn">
                VIEW MEDICAL PAGE
              </a>
            </Col>
            <Col span="8">
              <img src="/images/themes-image-2.png" alt="" />
              <h1>Evolution Web Design Page</h1>
              <p>
                Promote your web design studio with this extremely wonderful and
                fast website template.
              </p>
              <a href="aa" className="btn">
                VIEW WEB DESIGN PAGE
              </a>
            </Col>
            <Col span="8">
              <img src="/images/themes-image-3.png" alt="" />
              <h1>Evolution Car Repair Page</h1>
              <p>
                Create website for your service station fast with a home page
                you can customize with no coding.
              </p>
              <a href="aa" className="btn">
                VIEW CAR REPAIR PAGE
              </a>
            </Col>
            <Col span="8">
              <img src="/images/themes-image-4.png" alt="" />
              <h1>Evolution Real Estate Page</h1>
              <p>
                Take advantage of a pre-built home page with design and save
                time on launching your website.
              </p>
              <a href="aa" className="btn">
                VIEW REAL ESTATE PAGE
              </a>
            </Col>
            <Col span="8">
              <img src="/images/themes-image-5.png" alt="" />
              <h1>Evolution Hotel Page</h1>
              <p>
                Build a responsive website for your guesthouse with a
                well-designed extra home page.
              </p>
              <a href="aa" className="btn">
                VIEW HOTEL PAGE
              </a>
            </Col>
            <Col span="8">
              <img src="/images/themes-image-6.png" alt="" />
              <h1>Evolution Law Page</h1>
              <p>
                Use this professionally-designed home page to make a law website
                much faster.
              </p>
              <a href="aa" className="btn">
                VIEW LAW PAGE
              </a>
            </Col>
          </Row>
        </div>
      </Row>

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

      <Row className="contact-section">
        <div className="form">
          <div className="contact-section-header">
            <h1>Contact form</h1>
            <p>
              Email us with any questions or inquiries or use our contact data.
              We would be happy to answer your questions ASAP.
            </p>
          </div>
          <div className="contact-section-content">
            <form>
              <div className="input-control">
                <input type="text" placeholder="Name *" />
              </div>
              <div className="input-control">
                <input type="text" placeholder="Email *" />
              </div>
              <div className="input-control">
                <input type="text" placeholder="Messages *" />
              </div>

              <input type="submit" className="btn" value="Submit" />
            </form>
          </div>
        </div>
      </Row>

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
    </Layout>
  );
}

export default App;
