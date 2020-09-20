import { createStore, applyMiddleware } from "redux";
import RootReducer from "./reducers";
import ReduxThunk from "redux-thunk";

//middleware
export const middlewares = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(
  createStore
);

//creating store
export const store = createStoreWithMiddleware(RootReducer);
