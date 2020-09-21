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
    beforeEach(() => {
      const props = {
        buttonText: "string",
        emitEvent: () => {},
      };
      wrapper = shallow(<ShareButton {...props} />);
    });

    it("should render a button", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
