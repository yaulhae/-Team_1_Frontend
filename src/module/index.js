import { combineReducers } from "redux";
import image from "./image";
import inspire from "./inspire";
import write from "./write";
import user from "../redux/modules/user";
import memo from "./memo";

const rootReducer = combineReducers({ image, inspire, write, user, memo });

export default rootReducer;
