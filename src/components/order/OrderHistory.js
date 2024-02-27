import React, { useEffect, useState } from "react";
import { getAllOrders } from "../../helper/axios";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
const OrderHistory = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    async function getData() {
      const { order } = await getAllOrders();

      setOrder(order);
    }

    getData();
  }, []);
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Order Number</th>
            <th>Shipping </th>
            <th>Amount Paid </th>
            <th>Status </th>
            <th>Edit </th>
          </tr>
        </thead>
        <tbody>
          {order.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.transId}</td>
              <td>{item.address}</td>
              <td>${item.amount}</td>
              <td>{item.orderStatus}</td>
              <td>
                <Link to={`/order/edit/${item._id}`}>
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

export default OrderHistory;
