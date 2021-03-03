import { Carousel, Row } from "antd";
import React from "react";

const Callback = () => {
  return (
    <>
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
    </>
  );
};

export default Callback;
