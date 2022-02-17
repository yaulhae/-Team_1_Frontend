import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";
import { setPreview } from "./image";
import { useSelector } from "react-redux";
import api from "../api";
import { history } from "../App";

const ADD_INSPIRE = "inspire/ADD_INSPIRE";
const SET_INSPIRE = "inspire/GET_INSPIRE";
const GET_INSPIRE_ID = "inspire/GET_INSPIRE_ID";
const CHANGE_NAME = "inspire/CHANGE_NAME";
const UPDATE_INSPIRE = "inspire/UPDATE_INSPIRE";

export const addInspire = createAction(ADD_INSPIRE, (inspire) => ({ inspire }));
export const setInspire = createAction(SET_INSPIRE, (inspire_list) => ({
  inspire_list,
}));
export const getInspireById = createAction(GET_INSPIRE_ID, (inspire) => ({
  inspire,
}));
export const changeName = createAction(CHANGE_NAME, (name) => ({ name }));

export const updateInspire = createAction(UPDATE_INSPIRE, (inspire) => ({
  inspire,
}));

export const updateInspireFB = (id, inspire) => {
  return async (dispatch, getState) => {
    try {
      const inspire_item = await api.put(`/api/notelist/${id}`, inspire);
      //dispatch(updateInspire(inspire_item));
      history.replace("/inspire_list");
    } catch (e) {
      console.log(e);
    }
  };
};

export const addInspireFB = (inspire) => {
  return async (dispatch, getState) => {
    console.log(inspire);
    try {
      const inspire_item = await api.post("/api/notelist", inspire);
      history.replace("/inspire_list");
      dispatch(addInspire(inspire_item.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const setInspireFB = () => {
  return async (dispatch, getState) => {
    try {
      const user = getState().user;
      const request_user = { user_id: user.user };
      const inspire_list = await api.get("/api/notelist", request_user);
      dispatch(setInspire(inspire_list.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getInspireByIdFB = (id) => {
  return async (dispatch, getState) => {
    const user_id = getState().user.user;
    try {
      const inspire = await api.get(`/api/notelist/${id}`);
      console.log(inspire.data);
      //dispatch(setInspire([inspire.data]));
      dispatch(setInspire([inspire.data]));
      dispatch(changeName(inspire.data.note_title));
      //dispatch(setPreview(inspire.data.image_url)); 이미지 버려짐 ㅠㅠ
    } catch (e) {}
  };
};

const initialState = {
  list: [],
  name: "",
};

const inspire = handleActions(
  {
    [ADD_INSPIRE]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.inspire);
      }),
    [SET_INSPIRE]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.inspire_list;
      }),
    [CHANGE_NAME]: (state, action) =>
      produce(state, (draft) => {
        draft.name = action.payload.name;
      }),
    [UPDATE_INSPIRE]: (state, action) =>
      produce(state, (draft) => {
        draft.list = [...draft.list, action.payload.inspire];
        //id 안써도 될듯.이미지 배열엔 하나의 요소밖에 없다.
      }),
  },
  initialState
);

export default inspire;
