import { toast } from "react-toastify";

import {
  deletePO,
  getAdminInfo,
  getNewPyOpts,
  postNewPyOp,
  updateNewPOs,
} from "../../helper/axios";
import { setAdmins } from "../admin-user/adminSlice";
import { setPayOptions } from "./PayOptionSlice";
import { setModalShow } from "../../system/systemSlice";

export const getAdminProfileAction = () => async (dispatch) => {
  //call the api to get user info
  const { status, user } = await getAdminInfo();
  console.log(user, status);

  // mount the state
  if (status === "success") {
    dispatch(setAdmins(user));
  }
};
// post new payment options
export const postNewPayAction = (obj) => async (dispatch) => {
  const { status, message } = await postNewPyOp(obj);

  toast[status](message);
  status === "success" && dispatch(getPayOpsAction());
};

export const getPayOpsAction = () => async (dispatch) => {
  const { result, status } = await getNewPyOpts();

  status === "success" && dispatch(setPayOptions(result));
};
export const updatePOsAction = (data) => async (dispatch) => {
  const pending = updateNewPOs(data);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;

  toast[status](message);

  status === "success" && dispatch(getPayOpsAction());
};

export const deletePOsAction = (_id) => async (dispatch) => {
  const pending = deletePO(_id);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;
  toast[status](message);

  status === "success" && dispatch(getPayOpsAction());
  dispatch(setModalShow(false));
};
