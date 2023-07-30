import { toast } from "react-toastify";
import { getAdminInfo, loginAdmin, postNewAdmin } from "../../helper/axios";
import { setAdmins } from "../admin-user/adminSlice";

export const createNewAdminAction = async (obj) => {
  const pendingResponse = postNewAdmin(obj);

  toast.promise(pendingResponse, {
    pending: " please wait ..",
  });
  const { status, message } = await pendingResponse;
  toast[status](message);
};

export const loginAdminAction = (obj) => async (dispatch) => {
  const pendingResp = loginAdmin(obj);

  toast.promise(pendingResp, {
    pending: "Please await..",
  });
  const { status, message, token } = await pendingResp;

  console.log(token);
  toast[status](message);

  if (status === "success") {
    sessionStorage.setItem("accessJWT", token.accessJWT);
    localStorage.setItem("refreshJWT", token.refreshJWT);
  }
};

//get admin profile

export const getAdminProfileAction = () => async (dispatch) => {
  //call the api to get user info
  const { status, message, user } = await getAdminInfo();
  // mount the state
  if (status === " success") {
    dispatch(setAdmins(user));
  }
};

export const autoLogin = () => (dispatch) => {
  //check if accessJwt exist in session
  const accessJWT = sessionStorage.getItem("accessJWT");
  if (accessJWT) {
    dispatch(getAdminProfileAction());

    const refreshJWT = localStorage.getItem("refreshJWT");
    if (refreshJWT) {
      //request new accessJWT from server and all getAdminProfile
      return;
    }
  }
};
