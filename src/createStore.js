import { createStore } from "redux";
import RootReducer from "./reducers";

//creating store
export const store = createStore(RootReducer);
