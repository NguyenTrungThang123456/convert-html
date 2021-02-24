import { Col } from "antd";
import React from "react";
import PropsType from "prop-types";
import { WhatWeDo } from "../types";

type WeDoProps = {
  wedos?: WhatWeDo[];
};

const WeDo = (props: WeDoProps) => {
  return (
    <>
      {props.wedos?.map((wedo) => {
        return (
          <Col span="8">
            <img src={wedo.image} alt="" />
            <h1>{wedo.title}</h1>
            <h4>{wedo.description}</h4>
          </Col>
        );
      })}
    </>
  );
};

export default WeDo;
