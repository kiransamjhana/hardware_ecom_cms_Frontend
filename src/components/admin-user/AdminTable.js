import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

import { Form } from "react-bootstrap";
import { getAdminsProfileAction } from "../../pages/signIN-singUp/adminAction";

function AdminTable() {
  const dispatch = useDispatch();

  const { admin } = useSelector((state) => state.adminInfo);
  useEffect(() => {
    dispatch(getAdminsProfileAction());
  }, [dispatch]);

  return (
    <>
      <div className="d-flex justify-content-between mt-5">
        <div>30 UserFound Found</div>
        <div>
          <Form.Control placeholder="Serach by name ..." />
        </div>
      </div>
      <Table striped bordered hover className="mt-2 ">
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Emailt</th>
            <th>Phone</th>
            <th>Adress</th>
          </tr>
        </thead>
        <tbody>
          {admin.map(
            ({ _id, status, fName, lName, email, phone, address }, i) => (
              <tr key={_id}>
                <td>{i + 1}</td>
                <td>
                  <span
                    className={
                      status === "active"
                        ? "bg-success p-2 rounded"
                        : "bg-danger p-2 rounded"
                    }
                  >
                    {status}
                  </span>
                </td>
                <td> {fName}</td>
                <td>{lName}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{address}</td>
                <td></td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </>
  );
}
export default AdminTable;
