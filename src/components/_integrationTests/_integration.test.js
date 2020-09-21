import moxios from "moxios";
import { testStore } from "./../../Utils/index";
import { fetchPosts } from "./../../actions";

describe("fetchpost action", () => {
  beforeEach(() => {
    moxios.install(); //whenever we hit axios, moxios is going to run
  });

  afterEach(() => {
    moxios.uninstall(); //restore axios library
  });

  test("store is updated correctly", () => {
    const expectedState = [
      { title: "example titl 1", body: "some text" },
      { title: "example titl 2", body: "some text" },
      { title: "example titl 3", body: "some text" },
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });
    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
