import * as restaurant from "../Constant/restaurantsConstant";

export const fetchRestaurantsReducer = (
  state = { restuarant: {}, success: false, loading: false },
  action
) => {
  switch (action.type) {
    case restaurant.FETCH_RESTAURANT_REQUEST:
      return { loading: true };
    case restaurant.FETCH_RESTAURANT_SUCCESS:
      return { loading: false, restuarant: action.data, success: true };
    case restaurant.FETCH_RESTAURANT_FAILED:
      return { loading: false, error: action.error, success: false };
    default:
      return state;
  }
};
