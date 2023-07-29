import axios from "axios";
const rootAPI = process.env.REACT_APP_ROOTAPI;
const adminAPI = rootAPI + "/admin";
const categoryAPI = rootAPI + "/category";
// Global axios proccesser function
const axiosProcessor = async ({ method, url, obj }) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: obj,
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
  console.log(obj);
  return axiosProcessor(obj);
};

//Catagory API

export const postNewCategory = (data) => {
  const obj = {
    method: "post",
    url: categoryAPI,
    obj: data,
  };
  return axiosProcessor(obj);
};

export const getCategories = () => {
  const obj = {
    method: "get",
    url: categoryAPI,
    obj: data,
  };
  return axiosProcessor(obj);
};

export const updateCategory = (data) => {
  const obj = {
    method: "put",
    url: catAPI,
    obj: data,
  };
  return axiosProcessor(obj);
};

export const deleteCategory = (_id) => {
  const obj = {
    method: "delete",
    url: catAPI + "/" + _id,
  };
  return axiosProcessor(obj);
};
