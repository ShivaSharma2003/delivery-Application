import * as restaurant from "../Constant/restaurantsConstant";
import Axios from "../../Axios";

export const fetchRestaurantAction = () => async (dispatch) => {
  try {
    dispatch({ type: restaurant.FETCH_RESTAURANT_REQUEST });
    const { data } = await Axios.get("api/get/restaurants");
    dispatch({ type: restaurant.FETCH_RESTAURANT_SUCCESS, data: data });
  } catch (error) {
    dispatch({
      type: restaurant.FETCH_RESTAURANT_FAILED,
      error: error.message,
    });
  }
};
