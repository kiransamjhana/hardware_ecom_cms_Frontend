import React from "react";
import { AdminLayout } from "../../components/layout/layout/AdminLayout";
import { Button } from "react-bootstrap";
import { ProductTable } from "../../components/product/ProductTable";
import { Link } from "react-router-dom";

export const Product = () => {
  return (
    <AdminLayout title="product">
      <div className="text-end">
        <Link to="/new-product">
          {" "}
          <Button variant="primary"> +Add New Product</Button>
        </Link>

        <ProductTable />
      </div>
    </AdminLayout>
  );
};
