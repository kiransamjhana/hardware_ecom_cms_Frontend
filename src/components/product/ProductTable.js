import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../../pages/product/productAction";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const ProductTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productInfo);

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between mb-3">
        <div>10 products found</div>
        <div>
          <Form.Control type="text" placeholder="Search Product by Name" />
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail </th>
            <th>status</th>

            <th>Name</th>
            <th>QTY</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>
                <img
                  src={
                    process.env.REACT_APP_ROOTSERVER + item?.thumbnail?.slice(6)
                  }
                  alt="img"
                  width="150px"
                />
              </td>
              <td>{item.status}</td>
              <td>
                <h3> {item.name}</h3>
                Price: {item.price}
              </td>
              <td>{item.qty}</td>
              <td>
                <Link to={`/product/edit/${item._id}`}>
                  <Button variant="warning">Edit</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
