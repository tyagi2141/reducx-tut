import { ADD_TO_CART } from "../constatnt";

export const addTocart = (data) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};
