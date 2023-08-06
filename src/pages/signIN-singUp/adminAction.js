import { toast } from "react-toastify";
import {
  getAdminInfo,
  getNewRefreshJWT,
  loginAdmin,
  postNewAdmin,
} from "../../helper/axios";
import { setAdmins } from "../admin-user/adminSlice";

export const createNewAdminAction = async (obj) => {
  const pendingResp = postNewAdmin(obj);

  toast.promise(pendingResp, {
    pending: " please wait ..",
  });
  const { status, message } = await pendingResp;
  toast[status](message);
};

export const loginAdminAction = (obj) => async (dispatch) => {
  const pendingResp = loginAdmin(obj);

  toast.promise(pendingResp, {
    pending: "Please await..",
  });
  const { status, message, token } = await pendingResp;

  toast[status](message);

  if (status === "success") {
    sessionStorage.setItem("accessJWT", token.accessJWT);
    localStorage.setItem("refreshJWT", token.refreshJWT);
    dispatch(getAdminProfileAction());
  }
  //get the user data and mount in the state
};

//get admin profile

export const getAdminProfileAction = () => async (dispatch) => {
  //call the api to get user info
  const { status, user } = await getAdminInfo();
  console.log(user, status);

  // mount the state
  if (status === "success") {
    dispatch(setAdmins(user));
  }
};

export const autoLogin = () => async (dispatch) => {
  //check if accessJwt exist in session
  const accessJWT = sessionStorage.getItem("accessJWT");
  if (accessJWT) {
    return dispatch(getAdminProfileAction());
  }

  const refreshJWT = localStorage.getItem("refreshJWT");
  if (refreshJWT) {
    // request new accessJWT from server and all getAdminProfile

    const { accessJWT } = await getNewRefreshJWT();

    if (accessJWT) {
      sessionStorage.setItem("accessJWT", accessJWT);
      dispatch(getAdminProfileAction());
    }
  }
};
