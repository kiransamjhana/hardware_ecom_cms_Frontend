import React from "react";
import { Button, Form } from "react-bootstrap";
import { BiSolidUserDetail } from "react-icons/bi";
import { CustomInput } from "../customI-Input/CustomInput";
import { useSelector } from "react-redux";

export const UpdatePassword = () => {
  const { admins } = useSelector((state) => state.adminInfo);
  const [form, setForm] = useState({});
  console.log(admins);
  const inputs = [
    {
      label: "Current Password",
      name: "cPassword",
      type: "password",
      required: "true",
    },
    {
      label: "New Password",
      name: "nPassword",
      type: "password",
      required: "true",
    },
    {
      label: "Confim Password",
      name: "cfPassword",
      type: "password",
      required: "true",
    },
  ];
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      <Form
        className="m-auto p-5 border shadow-lg mt-5 rounded"
        style={{ width: "450px" }}
        onSubmit={handleOnSubmit}
      >
        <h3>
          <BiSolidUserDetail />
          Update Password
        </h3>
        <hr />
        {inputs.map((item, i) => (
          <CustomInput key={i} {...item} onChange={handleOnChange} />
        ))}

        <div className="d-grid mt-5">
          <Button variant="dark" type="submit">
            Update User
          </Button>
        </div>
      </Form>
    </div>
  );
};
