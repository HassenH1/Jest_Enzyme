//the reason why this is here so it can be used by other test files
import checkPropTypes from "check-prop-types";
import { applyMiddleware, createStore } from "redux";
import RootReducer from "../../src/reducers/index";
import { middlewares } from "../../src/createStore";

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

//first must pass Headline.proptypes from headline Component
export const checkProps = (component, expectedProps) => {
  const propErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propErr;
};

export const testStore = (initialState) => {
  const createStoreWithMiddlware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddlware(RootReducer, initialState);
};
