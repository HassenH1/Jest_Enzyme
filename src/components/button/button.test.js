import React from "react";
import { checkProps, findByTestAttr } from "../../Utils/index";
import ShareButton from "./index";
import { shallow } from "enzyme";

describe("sharebutton component", () => {
  describe("checking proptypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        buttonText: "string",
        emitEvent: () => {},
      };
      const propsErr = checkProps(ShareButton, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("renders", () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: "string",
        emitEvent: mockFunc, //for simulate a click event
      };
      wrapper = shallow(<ShareButton {...props} />);
    });

    it("should render a button", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });

    it("should meit callback on click", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
