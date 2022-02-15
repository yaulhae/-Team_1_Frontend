import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";

const ADD_INSPIRE = "inspire/ADD_INSPIRE";
const SET_INSPIRE = "inspire/GET_INSPIRE";
const GET_INSPIRE_ID = "inspire/GET_INSPIRE_ID";

export const addInspire = createAction(ADD_INSPIRE, (inspire) => ({ inspire }));
export const setInspire = createAction(SET_INSPIRE, (inspire_list) => ({
  inspire_list,
}));
export const getInspireById = createAction(GET_INSPIRE_ID, (inspire) => ({
  inspire,
}));

export const addInspireFB = (inspire) => {
  return async (dispatch, getState) => {
    console.log(inspire);
    try {
      const inspire_item = await axios.post("/api/inspires", inspire);
      dispatch(addInspire(inspire_item.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const setInspireFB = () => {
  return async (dispatch, getState) => {
    try {
      const inspire_list = await axios.get("/api/inspires");
      dispatch(setInspire(inspire_list.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getInspireByIdFB = (id) => {
  return async (dispatch, getState) => {
    try {
      const inspire = await axios.get(`/api/inspires/${id}`);
      dispatch(setInspire([inspire.data]));
    } catch (e) {
      console.log(e);
    }
  };
};

const initialState = {
  list: [],
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
  },
  initialState
);

export default inspire;
