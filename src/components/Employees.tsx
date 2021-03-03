import { Row } from "antd";
import React from "react";
import { EmployeeModel } from "../types";
import Employee from "./Employee";

const Employees = () => {
  const employees: EmployeeModel[] = [
    {
      image: "/images/home-team-img-1.jpg",
      name: "Mary Jones",
      jopPosition: "Senior Developer",
      description:
        "Mary is one of the leading developers in the MotoCMS team. She implements her amazing ideas that help improve our products.",
      socialLinks: ["ad", "ad", "ad"],
    },
    {
      image: "/images/home-team-img-2.jpg",
      name: "Richard White",
      jopPosition: "Designer",
      description:
        "Richard has made dozens of MotoCMS templates for our vast collection of websites. He is a talented person.",
      socialLinks: ["ad", "ad", "ad"],
    },
    {
      image: "/images/home-team-img-3.jpg",
      name: "Melissa Spector",
      jopPosition: "Pre-Sale Manager",
      description:
        'Melissa loves working with MotoCMS customers. Her motto is: "Each customer is important."',
      socialLinks: ["ad", "ad", "ad"],
    },
  ];
  return (
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
          <Employee employees={employees} />
        </Row>
      </div>
    </Row>
  );
};

export default Employees;
