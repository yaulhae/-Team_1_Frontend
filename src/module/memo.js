import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import api from "../api";
import { history } from "../App";

const SET_MEMO = "/memo/SET_MEMO";
const DELETE_MEMO = "/memo/DELETE_MEMO";
const UPDATE_MEMO = "/memo/UPDATE_MEMO";

const setMemo = createAction(SET_MEMO, (memo) => ({ memo }));
const deleteMemo = createAction(DELETE_MEMO);
const updateMemo = createAction(UPDATE_MEMO, (memo) => ({ memo }));

export const setMemoFB = (id) => {
  return async function (dispatch, getState) {
    try {
      const memo = await api.get(`/api/memo/${id}`);
      console.log(memo.data.getmemo);
      dispatch(setMemo(memo.data.getmemo));
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteMemoFB = (id) => {
  return async function (dispatch, getState) {
    const response = await api.delete(`/api/memo/${id}`);
    dispatch(setMemoFB(id));
  };
};

export const updateMemoFB = (id, memo) => {
  return async function (dispatch, getState) {
    const response = await api.put(`/api/memo/${id}`, memo);
    console.log(response);
    console.log(response.data);
    const memoItem = {
      memo_title: response.data.test[0].memo_title,
      memo_content: response.data.test[0].memo_content,
    };
    console.log(memoItem);
    dispatch(updateMemo(memoItem));
    history.back();
  };
};

const initialState = {
  memo: null,
};

const memo = handleActions(
  {
    [SET_MEMO]: (state, action) =>
      produce(state, (draft) => {
        draft.memo = action.payload.memo;
      }),
    [UPDATE_MEMO]: (state, action) =>
      produce(state, (draft) => {
        draft.memo = action.payload.memo;
      }),
  },
  initialState
);

export default memo;
