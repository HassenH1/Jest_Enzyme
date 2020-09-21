import React from "react";
import { shallow } from "enzyme";
import reducer from "./reducer";
import { types } from "../../actions/types";

describe("posts reducer", () => {
  it("should return default state", () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("should return new state", () => {
    const posts = [{ title: "test1" }, { title: "test2" }, { title: "test3" }];
    const newState = reducer(undefined, {
      type: types.GET_POSTS,
      payload: posts,
    });
    expect(newState).toEqual(posts);
  });
});
