import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import { findByTestAttr, checkProps } from "./../../Utils/index";

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  //checking if proptypes are suppose to be what they are
  describe("checking propTypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        header: "test header as string",
        descr: "test string",
        tempRay: [
          {
            fName: "test string fname",
            lName: "test String lname",
            email: "test string email",
            age: 22,
            onlineStatus: false,
          },
        ],
      };

      //first must pass Headline.proptypes from headline Component
      const propErr = checkProps(Headline, expectedProps); //check utils for this function
      expect(propErr).toBeUndefined();
    });
  });

  describe("have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "test header",
        description: "some test description",
      };
      wrapper = setup(props);
    });

    it("should render without errors", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });

    it("should render a H1", () => {
      const h1 = findByTestAttr(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("should render a desc", () => {
      const decr = findByTestAttr(wrapper, "decr");
      expect(decr.length).toBe(1);
    });
  });

  describe("have no props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });

    it("should not render", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
