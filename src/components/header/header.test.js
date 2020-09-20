import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import Logo from "../../assets/graphics/logo.png";
import { findByTestAttr } from "../../Utils/index"; //import this from Utils folder

//two method to write test
//test();
//it(); im using this one

//refactoring
const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  //we can add this beforeEach method and get rid of the `const component = setup()` at the bottom
  let component;
  beforeEach(() => {
    component = setup();
  }); //runs before every single test

  //can have a nested 'describe()' function
  //but we dont need this for this example

  it("should render without errors", () => {
    //if it() is empty then this technically is a test even though we arent testing anything

    //did a refactor function, check the top ^^
    // const component = shallow(<Header />); //instead of doing this everytime we can....
    // const component = setup(); //do this but we are also removing this because of the beforeEach() method at the top of describe function

    // const wrapper = component.find(`[data-test="headerComponent"]`); //searching for headerComponent data-test but since we refactored check out the new code
    const wrapper = findByTestAttr(component, "headerComponent");
    expect(wrapper.length).toBe(1); //checking to see if there is only 1 div with headerComponent className
  });

  it("should render logo", () => {
    //if it() is empty then this technically is a test even though we arent testing anything

    // const component = setup();
    const logo = findByTestAttr(component, "logoIMG");
    expect(logo.length).toBe(1); //checking to see if there is only 1 img with logoIMG className
  });

  it("should render a logo", () => {
    // const component = setup();
    const logo = findByTestAttr(component, "logoIMG");
    expect(logo.prop("src")).toEqual(Logo); //check to see if the logo in component matches the logo thats in the file structure ../../graphic/logo.png
  });
});
