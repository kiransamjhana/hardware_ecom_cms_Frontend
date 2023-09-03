import { toast } from "react-toastify";

import {
  deleteProduct,
  getProducts,
  postNewProduct,
  updateProduct,
} from "../../helper/axios";
import { setProduct } from "./productSlice";

export const postNewProductAction = (data) => async (dispatch) => {
  const pending = postNewProduct(data);

  toast.promise(pending, {
    pending: "Please wait",
  });

  const { status, message } = await pending;

  toast[status](message);

  if (status === "success") {
    /// fetch all the products
    dispatch(getProductsAction());
  }
};

export const getProductsAction = () => async (dispatch) => {
  const { status, products, message } = await getProducts();
  toast[status](message);
  if (status === "success") {
    /// mount data in the store
    dispatch(setProduct(products));
  }
};
export const deleteProductAction = (_id) => async (dispatch) => {
  const pending = deleteProduct(_id);

  toast.promise(pending, {
    pending: "please wait ....",
  });

  const { status, message } = await pending;

  toast[status](message);

  if (status === "success") {
    dispatch(getProductsAction());
  }
};

export const updateProductAction = (data) => async (dispatch) => {
  const pending = updateProduct(data);

  toast.promise(pending, {
    pending: "Please wait",
  });

  const { status, message } = await pending;

  toast[status](message);

  if (status === "success") {
    /// fetch all the products
    dispatch(getProductsAction());
    return true;
  }
  return false;
};
