import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Col } from "antd";
import React from "react";
import { Employee } from "../types";

type EmployeeProps = {
  employees?: Employee[];
};

const Employees = (props: EmployeeProps) => {
  return (
    <>
      {props.employees?.map((employee) => {
        return (
          <Col span="8">
            <img src={employee.image} alt="" />
            <h1>{employee.name}</h1>
            <p>{employee.jopPosition}</p>
            <h3>{employee.description}</h3>
            <div className="social-links">
              <a>
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
        );
      })}
    </>
  );
};

export default Employees;
