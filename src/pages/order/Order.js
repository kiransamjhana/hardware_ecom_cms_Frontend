import React from "react";
import { AdminLayout } from "../../components/layout/layout/AdminLayout";
import OrderHistory from "../../components/order/OrderHistory";

export const Order = () => {
  return (
    <div>
      <AdminLayout title="Order Received">
        <OrderHistory />
      </AdminLayout>
    </div>
  );
};
