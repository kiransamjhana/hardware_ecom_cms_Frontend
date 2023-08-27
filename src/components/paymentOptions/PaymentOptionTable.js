import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";

import { setModalShow } from "../../system/systemSlice";
import { CustomModal } from "../custom-model/CustomModel";
import { Button, Form } from "react-bootstrap";
import { getPayOpsAction } from "../../pages/payment/paymentOptionAction";
import { EditPaymentOption } from "./EditPaymentOption";

function PaymentOptionTable() {
  const dispatch = useDispatch();
  const [selectedPo, setselectedPo] = useState({});
  const { payOptions } = useSelector((state) => state.poInfo);

  useEffect(() => {
    dispatch(getPayOpsAction());
  }, [dispatch]);

  const handleOnEdit = (obj) => {
    setselectedPo(obj);
    dispatch(setModalShow(true));
  };
  return (
    <>
      <CustomModal title="Edit Payment Option">
        <EditPaymentOption po={selectedPo} />
      </CustomModal>
      <div className="d-flex justify-content-between mt-5">
        <div>{payOptions?.length} Payment options Found</div>
        <div>
          <Form.Control placeholder="Serach by name ..." />
        </div>
      </div>
      <Table striped bordered hover className="mt-2 ">
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Title</th>
            <th>Descripton</th>
            <th>Added At</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {payOptions?.map(
            ({ _id, status, title, description, createdAt }, i) => (
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
                <td> {title}</td>
                <td>{description}</td>
                <td>{createdAt.slice(0, 10)}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() =>
                      handleOnEdit({ _id, status, title, description })
                    }
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </>
  );
}
export default PaymentOptionTable;
