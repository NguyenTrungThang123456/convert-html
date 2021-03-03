import { Row } from "antd";
import React from "react";

const Contact = () => {
  return (
    <Row className="contact-section">
      <div className="form">
        <div className="contact-section-header">
          <h1>Contact form</h1>
          <p>
            Email us with any questions or inquiries or use our contact data. We
            would be happy to answer your questions ASAP.
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
  );
};

export default Contact;
