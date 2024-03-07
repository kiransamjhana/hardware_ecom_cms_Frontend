import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AdminLayout } from "../layout/layout/AdminLayout";
import { Button, Form, Table } from "react-bootstrap";

import {
  getOrderById,
  updateOrderStatus,
  updateOrderStatusById,
} from "../../helper/axios";

import ListGroup from "react-bootstrap/ListGroup";

const EditOrder = () => {
  const { _id } = useParams();
  const [form, setForm] = useState({ products: [] });
  const [delivered, setDelivered] = useState("delivered");
  const [updatedOrderStatus, setUpdatedOrderStatus] = useState(false);
  console.log(_id, "from edit order");

  useEffect(() => {
    async function getSelectedOrder() {
      const { result } = await getOrderById(_id);

      result?._id && setForm(result);
    }
    getSelectedOrder();
  }, [_id]);
  console.log(form, "from ediotoooo");

  const { products, orderStatus } = form;
  console.log(products, orderStatus, "coming from orderEdit");
  // set all from data in FormDate\
  const handleUpdateOrderStatus = async () => {
    if (!window.confirm("Are you sure the items are delivered to Customer")) {
      return;
    }
    try {
      // Make a request to update order status
      await updateOrderStatusById(_id);

      // Update the local state with the new order status
      // setForm((prevForm) => ({ ...prevForm, orderStatus: delivered }));

      setUpdatedOrderStatus(true); // Update the state to trigger a re-fetch of order data
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <AdminLayout title="Edit Product">
      <Link to="/order/">
        <Button variant="secondary">&lt; Back</Button>
      </Link>
      <div className="list-group">
        <p> Customer Details</p>
        <ListGroup as="ol" numbered>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Customer Name</div>
              {form.name}
            </div>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Order Number</div>
              {form._id}
            </div>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">User ID</div>
              {form.userId}
            </div>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Delivery ADRESSS</div>
              {form.address}
            </div>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Order Status</div>
              {form.orderStatus}
            </div>
          </ListGroup.Item>

          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">EMAIL</div>
              {form.email}
            </div>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">PHONE NUMBER</div>
              {form.phone}
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div>
        <p> Items Details</p>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>ProductID</th>
              <th>Product Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.productId}</td>
                <td>{item.productName}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="d-grid mt-3 mb-3">
        <Button
          variant="success"
          type="submit"
          onClick={handleUpdateOrderStatus}
        >
          Update Order
        </Button>
      </div>
    </AdminLayout>
  );
};

export default EditOrder;
