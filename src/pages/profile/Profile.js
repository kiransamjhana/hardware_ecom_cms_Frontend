import React from "react";
import { AdminLayout } from "../../components/layout/layout/AdminLayout";

import { UpdateProfile } from "../../components/Profile/UpdateProfile";

export const Profile = () => {
  return (
    <div>
      <AdminLayout title="profile">
        <UpdateProfile />
      </AdminLayout>
    </div>
  );
};
