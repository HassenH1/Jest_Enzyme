import { types } from "./types";
import axios from "axios";

export const fetchPosts = () => async (dispatch) => {
  console.log("does this even hit?");
  await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      console.log(res, "<--------------what is this?");
      dispatch({
        type: types.GET_POSTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
