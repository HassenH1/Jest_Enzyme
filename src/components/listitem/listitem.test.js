import React from "react";
import { shallow } from "enzyme";
import { checkProps, findByTestAttr } from "../../Utils/index";
import ListItem from "./index";

describe("listitem component", () => {
  describe("listitem proptypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        title: "string",
        description: "string",
      };
      const propsErr = checkProps(ListItem, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("component renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "string",
        description: "string",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("should render without errors", () => {
      const component = findByTestAttr(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });

    it("should render a title", () => {
      const title = findByTestAttr(wrapper, "componentTitle");
      expect(title.length).toBe(1);
    });

    it("should render a description", () => {
      const desc = findByTestAttr(wrapper, "componentDesc");
      expect(desc.length).toBe(1);
    });
  });

  describe("it should not render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        description: "string",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("component is not rendered", () => {
      const component = findByTestAttr(wrapper, "listItemComponent");
      expect(component.length).toBe(0);
    });
  });
});

//28:26
