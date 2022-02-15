import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const SET_PREVIEW = "image/SET_PREVIEW";

export const setPreview = createAction(SET_PREVIEW, (image) => ({ image }));

const initialState = {
  preview: null,
};

const image = handleActions(
  {
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.image;
      }),
  },
  initialState
);

export default image;
