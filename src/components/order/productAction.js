import { getOrderById } from "../../helper/axios";

export const getProductsActionID = async (_id) => {
  const { result } = await getOrderById(_id);
  console.log(result);
};
