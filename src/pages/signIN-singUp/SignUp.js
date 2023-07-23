import React from "react";

import { AdminSignUp } from "../../components/admin-signUp/AdminSignUp";

import { AdminLayout } from "../../components/layout/layout/AdminLayout";

export const SignUp = () => {
  return (
    <AdminLayout title=" Add New Admin">
      <AdminSignUp />
    </AdminLayout>
  );
};
