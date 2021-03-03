import { Col, Row } from "antd";
import React from "react";
import PropsType from "prop-types";
import { WeDoModel } from "../types";

type WeDoProps = {
  wedos?: WeDoModel[];
};

const WeDo = (props: WeDoProps) => {
  return (
    <>
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
            {props.wedos?.map((wedo) => {
              return (
                <Col span="8">
                  <img src={wedo.image} alt="" />
                  <h1>{wedo.title}</h1>
                  <h4>{wedo.description}</h4>
                </Col>
              );
            })}
          </Row>
        </div>
      </Row>
    </>
  );
};

export default WeDo;
