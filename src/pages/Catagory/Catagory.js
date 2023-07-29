import React from "react";
import { AdminLayout } from "../../components/layout/layout/AdminLayout";
import { NewCatForm } from "../../components/cataegory/NewCatForm";
import CatTable from "../../components/cataegory/CatTable";

export const Catagory = () => {
  return (
    <div>
      <AdminLayout title="Catagory">
        <NewCatForm />
        <CatTable />
      </AdminLayout>
    </div>
  );
};
