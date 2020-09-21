import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { findByTestAttr, testStore } from "./Utils";

//shallow render of the component then returing it
const setup = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("app component", () => {
  let wrapper;
  //before each test run the setup test
  beforeEach(() => {
    const initialState = {
      posts: [
        { title: "title 1", body: "some text" },
        { title: "title 2", body: "some text" },
        { title: "title 3", body: "some text" },
      ],
    };
    wrapper = setup(initialState);
  });

  //test
  it("should render without errors", () => {
    const component = findByTestAttr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });

  it("exampleMethod_updateState method should update state as expected", () => {
    const classInstance = wrapper.instance();
    classInstance.exampleMethod_updateState();
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  });

  it("exampleMethod_returnsValue method should return value", () => {
    const classInstance = wrapper.instance();
    const newValue = classInstance.exampleMethod_returnsValue(5);
    expect(newValue).toBe(6);
  });
});
