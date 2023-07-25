import React, { useEffect, useState } from "react";
import { CustomInput } from "../customI-Input/CustomInput";
import { Button, Form } from "react-bootstrap";
import { BiSolidUserDetail } from "react-icons/bi";
import { loginAdminAction } from "../../pages/signIN-singUp/adminAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAdminAction(form));
  };

  const { admin } = useSelector((state) => state.adminInfo);
  console.log(admin);
  useEffect(() => {
    admin?._id && navigate("/dashbord");
  }, [admin?._id, navigate]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const inputs = [
    {
      label: "Email",
      name: "email",
      required: "true",
      placeholder: "kmri@BiLogoGmail.com",
      type: "email",
    },
    {
      label: "Password",
      name: "password",
      required: "true",
      placeholder: "********",
      type: "password",
    },
  ];

  return (
    <div>
      <Form className="m-5 p-5 border shadow-lg" onSubmit={handleOnSubmit}>
        <h1>
          <BiSolidUserDetail /> Admin Login
        </h1>
        <hr />

        {inputs.map((item, i) => (
          <CustomInput key={i} {...item} onChange={handleOnChange} />
        ))}

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Login
          </Button>
          {/* <span>
            {" "}
            <Button variant="warning">Forget Password?</Button>
          </span> */}
        </div>
      </Form>
    </div>
  );
};
