import { combineReducers } from "redux";
import image from "./image";
import inspire from "./inspire";

const rootReducer = combineReducers({ image, inspire });

export default rootReducer;
