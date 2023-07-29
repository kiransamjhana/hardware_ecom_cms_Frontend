import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { UpdateCategory } from "./UpdateCategory";
import { useState } from "react";

function CatTable() {
  const dispatch = useDispatch();
  const [selectedCat, setselectedCat] = useState({});
  const { cats } = useSelector((state) => state.catsInfo);

  const handleOnEdit = (obj) => {
    setselectedCat(obj);
  };
  return (
    <>
      <UpdateCategory />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Categoriy Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default CatTable;
