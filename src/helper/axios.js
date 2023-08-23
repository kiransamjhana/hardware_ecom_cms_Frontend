import axios from "axios";
const rootAPI = process.env.REACT_APP_ROOTAPI;
const adminAPI = rootAPI + "/admin";
const categoryAPI = rootAPI + "/category";
const poAPI = rootAPI + "/payment";

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};
const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};
// Global axios proccesser function
const axiosProcessor = async ({
  method,
  url,
  obj,
  isPrivate,
  refreshToken,
}) => {
  const token = refreshToken ? getRefreshJWT() : getAccessJWT();
  const headers = {
    Authorization: isPrivate ? token : null,
  };
  try {
    const { data } = await axios({
      method,
      url,
      data: obj,
      headers,
    });

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.response ? error?.response?.data?.message : error.message,
    };
  }
};

// ========= admin api
export const postNewAdmin = (data) => {
  const obj = {
    method: "post",
    url: adminAPI,
    obj: data,
  };
  return axiosProcessor(obj);
};

export const PostNewAdminVerificationInfo = (data) => {
  const obj = {
    method: "post",
    url: adminAPI + "/admin-verification",
    obj: data,
  };

  return axiosProcessor(obj);
};

export const loginAdmin = (data) => {
  const obj = {
    method: "post",
    url: adminAPI + "/login",
    obj: data,
  };

  return axiosProcessor(obj);
};

export const getAdminInfo = () => {
  const obj = {
    method: "get",
    url: adminAPI,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
//Catagory API

export const postNewCategory = (data) => {
  const obj = {
    method: "post",
    url: categoryAPI,
    obj: data,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

export const getCategories = () => {
  const obj = {
    method: "get",
    url: categoryAPI,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

export const updateCategory = (data) => {
  const obj = {
    method: "put",
    url: categoryAPI,
    obj: data,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

export const deleteCategory = (_id) => {
  const obj = {
    method: "delete",
    url: categoryAPI + "/" + _id,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

// ==== get new refreshJWT
export const getNewAccessJWT = () => {
  const obj = {
    method: "get",
    url: adminAPI + "/get-accessjwt",
    isPrivate: true,
    refreshToken: true,
  };
  return axiosProcessor(obj);
};

export const logoutAdmin = (_id) => {
  const obj = {
    method: "post",
    url: adminAPI + "/logout",
    obj: {
      _id,
      accessJwt: getAccessJWT(),
      refreshJWT: getRefreshJWT(),
    },
  };
  return axiosProcessor(obj);
};

////========PaymentOptions
export const postNewPyOp = (data) => {
  const obj = {
    method: "post",
    url: poAPI,
    obj: data,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

export const getNewPyOpts = (data) => {
  const obj = {
    method: "get",
    url: poAPI,
    obj: data,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

// ========== Payment Option

export const postNewPO = (data) => {
  const obj = {
    method: "post",
    url: poAPI,
    obj: data,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

export const getNewPOs = () => {
  const obj = {
    method: "get",
    url: poAPI,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

export const updateNewPOs = (data) => {
  const obj = {
    method: "put",
    url: poAPI,
    isPrivate: true,
    obj: data,
  };
  return axiosProcessor(obj);
};

export const deletePO = (_id) => {
  const obj = {
    method: "delete",
    url: poAPI + "/" + _id,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
