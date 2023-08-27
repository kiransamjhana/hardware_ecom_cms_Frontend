import React from "react";
import { AdminLayout } from "../../components/layout/layout/AdminLayout";

import { Link } from "react-router-dom";
import { Button, Row } from "react-bootstrap";
import AdminTable from "../../components/admin-user/AdminTable";

export const AdminUser = () => {
  return (
    <div>
      <AdminLayout title="adminUser">
        <Row>
          {" "}
          <Link to="/new-admin" className="nav-link">
            <Button> Add new Admin</Button>
          </Link>
        </Row>
        <AdminTable />
        <Row></Row>
      </AdminLayout>
    </div>
  );
};
