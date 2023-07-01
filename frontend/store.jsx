import {
  combineReducers,
  configureStore,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { fetchRestaurantsReducer } from "./Redux/Reducers/restaurantReducer";

const reducer = combineReducers({
  Restaurants: fetchRestaurantsReducer,
});

const store = configureStore(
  {
    reducer,
  },
  applyMiddleware([thunk])
);

export default store;
