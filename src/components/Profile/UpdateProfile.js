import React from "react";
import { AdminProfile } from "./AdminProfile";
import { Col, Row } from "react-bootstrap";

export const UpdateProfile = () => {
  return (
    <div>
      <Row>
        <Col>
          <AdminProfile />
        </Col>

        <Col></Col>
      </Row>
    </div>
  );
};
