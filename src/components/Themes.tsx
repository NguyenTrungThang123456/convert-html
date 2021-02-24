import { Col } from "antd";
import React from "react";
import { Theme } from "../types";

type EmployeeProps = {
  themes?: Theme[];
};

const Themes = (props: EmployeeProps) => {
  return (
    <>
      {props.themes?.map((theme) => {
        return (
          <Col span="8">
            <img src={theme.image} alt="" />
            <h1>{theme.title}</h1>
            <p>{theme.description}</p>
            <a href="aa" className="btn">
              {theme.link}
            </a>
          </Col>
        );
      })}
    </>
  );
};

export default Themes;
