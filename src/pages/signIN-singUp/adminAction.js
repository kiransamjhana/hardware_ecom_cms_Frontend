import { toast } from "react-toastify";
import { loginAdmin, postNewAdmin } from "../../helper/axios";
import { setAdmins } from "../admin-user/adminSlice";

export const createNewAdminAction = async (obj) => {
  const pendingResponse = postNewAdmin(obj);

  toast.promise(pendingResponse, {
    pending: " please wait ..",
  });
  const { status, message } = await pendingResponse;
  toast[status](message);
};

export const loginAdminAction = (adminObj) => async (dispatch) => {
  const { status, message, admin } = await loginAdmin(adminObj);
  console.log(adminObj);

  toast[status](message);

  admin?._id && dispatch(setAdmins(admin));
};
