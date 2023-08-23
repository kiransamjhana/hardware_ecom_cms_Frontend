import React from "react";
import { AdminLayout } from "../../components/layout/layout/AdminLayout";
import { NewPaymentOptionForm } from "../../components/paymentOptions/NewPaymentForm";
import PaymentOptionTable from "../../components/paymentOptions/PaymentOptionTable";

export const Payment = () => {
  return (
    <div>
      <AdminLayout title="payment">
        <NewPaymentOptionForm />
        <PaymentOptionTable />
      </AdminLayout>
    </div>
  );
};
