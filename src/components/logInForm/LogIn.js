import React, { useEffect, useState } from "react";
import { CustomInput } from "../customI-Input/CustomInput";
import { Button, Form } from "react-bootstrap";
import { BiSolidUserDetail } from "react-icons/bi";
import {
  autoLogin,
  loginAdminAction,
} from "../../pages/signIN-singUp/adminAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
const initialState = {
  email: "",
  password: "",
};
export const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const { admins } = useSelector((state) => state.adminInfo);
  console.log(admins);
  const location = useLocation();
  const pathTo = location.state?.from?.location?.pathname || "/dashbord";
  useEffect(() => {
    admins?._id && navigate(pathTo);
    dispatch(autoLogin());
  }, [admins, navigate, dispatch, pathTo]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAdminAction(form));
  };

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
          <Button variant="dark mt-5" type="submit">
            Login
          </Button>
          <div className="text-end mt-5">
            Forgot password? <Link to="/reset-password">Reset now</Link> .
          </div>

          {/* <span>
            {" "}
            <Button variant="warning">Forget Password?</Button>
          </span> */}
        </div>
      </Form>
    </div>
  );
};
