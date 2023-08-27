import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CustomInput } from "../customI-Input/CustomInput";
import { BiSolidUserDetail } from "react-icons/bi";
import {
  updateAdminPasswordAction,
  updateAdminProfileAction,
} from "../../pages/signIN-singUp/adminAction";

export const AdminProfile = () => {
  const dispatch = useDispatch();
  const { admins } = useSelector((state) => state.adminInfo);
  const [form, setForm] = useState({});
  const [passForm, setPassForm] = useState({});

  useEffect(() => {
    setForm(admins);
  }, [dispatch, admins]);

  const inputs = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      value: form.fName,
    },
    {
      label: "Last Name",
      name: "lName",
      value: form.lName,
      type: "text",
    },
    {
      label: "Phone Number",
      name: "phone",
      value: form.phone,
      type: "number",
    },

    {
      label: "Address",
      name: "address",
      type: "text",
      value: form.address,
    },

    {
      label: "Enter your current password",
      name: "password",
      type: "password",
      required: "true",
      placeholder: "*********",
    },
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    console.log(value);
  };

  const handleOnPasswordChange = (e) => {
    const { name, value } = e.target;
    setPassForm({ ...passForm, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { createdAt, modifiedAt, status, verificationCode, ...rest } = form;
    dispatch(updateAdminProfileAction(rest));
  };
  const handleOnPasswordSubmitt = (e) => {
    e.preventDefault();
    dispatch(updateAdminPasswordAction(passForm));
    console.log(passForm);
  };
  return (
    <div>
      <Row>
        <Col>
          {" "}
          <Form
            className="m-auto p-5 border shadow-lg mt-5 rounded"
            style={{ width: "450px" }}
            onSubmit={handleOnSubmit}
          >
            <h3>
              <BiSolidUserDetail />
              Update User
            </h3>
            <hr />
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}

            <div className="d-grid mt-5">
              <Button variant="primary" type="submit">
                Update Profile
              </Button>
            </div>
          </Form>
        </Col>

        <Col>
          <Form
            className="m-auto p-5 border shadow-lg mt-5 rounded"
            style={{ width: "450px" }}
            onSubmit={handleOnPasswordSubmitt}
          >
            <h3>
              <BiSolidUserDetail />
              Update Your Password
            </h3>{" "}
            <Form.Label>Current Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              aria-describedby="passwordHelpBlock"
              onChange={handleOnPasswordChange}
            />
            <Form.Text id="passwordHelpBlock" muted>
              Please put your current password
            </Form.Text>
            <br />
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              name="NewPassword"
              aria-describedby="passwordHelpBlock"
              onChange={handleOnPasswordChange}
            />
            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </Form.Text>
            <br />
            <Form.Label>Confirm Passowrd</Form.Label>
            <Form.Control
              type="password"
              name="confirmPass"
              aria-describedby="passwordHelpBlock"
              onChange={handleOnPasswordChange}
            />
            <Form.Text id="passwordHelpBlock" muted>
              Your Password should match
            </Form.Text>
            <div className="d-grid mt-5">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
