import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch } from "react-redux";
import { postNewCatAction } from "../../pages/Catagory/categoryAction";
export const NewCatForm = () => {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const handleOnAddCat = () => {
    const { value } = nameRef.current;
    dispatch(postNewCatAction({ title: value }));
  };
  return (
    <Form>
      {" "}
      <Row>
        <Col md={8}>
          <Form.Control placeholder="First name" ref={nameRef} />
        </Col>
        <Col className="d-grid" md={4}>
          <Button varient="dark" onClick={handleOnAddCat}>
            {" "}
            Add New cataegory
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
