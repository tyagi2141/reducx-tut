import { ADD_TO_CART } from "../constatnt";
const initialState = {
  cardData: [],
};

export default function cardItem(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("reducer", action.data);
      return [...state, { cardData: action.data }];
    default:
      return state;
  }
}
