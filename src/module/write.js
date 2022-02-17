import axios from "axios";
import { createAction, handleActions } from "redux-actions";

const INITIALIZE = "write/INITIALIZE";
const CHANGE_FIELD = "write/CHANGE_FIELD";
const WRITE_MEMO = "write/WRITE_MEMO";
const SET_ORIGINAL_POST = "write/SET_ORIGINAL_POST";

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writeMemo = createAction(WRITE_MEMO, ({ title, body }) => ({
  title,
  body,
}));
export const setOriginalPost = createAction(SET_ORIGINAL_POST, (post) => post);

export const writeMemoFB = (memo_item) => {
  return async (dispatch, getState) => {
    try {
      const memo = axios.post("/api/memo", memo_item);
    } catch (e) {
      console.log(e);
    }
  };
};

const initialState = {
  title: "",
  body: "",
  post: null,
  originalPostId: null,
};

const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_MEMO]: (state, { payload: post }) => ({
      ...state,
      post: post,
    }),
    [SET_ORIGINAL_POST]: (state, { payload: post }) => ({
      ...state,
      title: post.title,
      body: post.body,
      originalPostId: post._id,
    }),
  },
  initialState
);

export default write;
