import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { UpdateCategory } from "./UpdateCategory";
import { useEffect, useState } from "react";
import { getCatsAction } from "../../pages/Catagory/categoryAction";
import { setModalShow } from "../../system/systemSlice";
import { CustomModal } from "../custom-model/CustomModel";
import { Button, Form } from "react-bootstrap";

function CatTable() {
  const dispatch = useDispatch();
  const [selectedCat, setselectedCat] = useState({});
  const { cats } = useSelector((state) => state.catInfo);
  useEffect(() => {
    dispatch(getCatsAction());
  }, [dispatch]);

  const handleOnEdit = (obj) => {
    setselectedCat(obj);
    dispatch(setModalShow(true));
  };
  return (
    <>
      <CustomModal title="Edit Category">
        <UpdateCategory cat={selectedCat} />
      </CustomModal>
      <div className="d-flex justify-content-between mt-5">
        <div>30 Categories Found</div>
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
            <th>Slug</th>
            <th>Added At</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {cats.map(({ _id, status, title, slug, createdAt }, i) => (
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
              <td>{slug}</td>
              <td>{createdAt.slice(0, 10)}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() =>
                    handleOnEdit({ _id, status, title, slug, createdAt })
                  }
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
export default CatTable;
