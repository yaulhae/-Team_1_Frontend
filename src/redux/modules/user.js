import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import api from "../../api";
import Swal from "sweetalert2";
import "animate.css";
import { history } from "../../App";


// actions
const LOG_IN = "LOG_IN";
const GET_USER = "GET_USER";
const LOG_OUT = "LOG_OUT";

// action creators
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user_id: null,
  is_login: false,
  name: null,
};

// middleware actions
const loginDB = (user_id, pw) => {
  return async function (dispatch, getState) {
    const data = {
      user_id: user_id,
      pw: pw,
    };
    await api
//       .post("api/login", data) //"api/login" 백엔드분들이랑 할때는 api필수
//       .then((response) => {
//         console.log(response);
//         if (response.data.token) {
//           localStorage.setItem("token", response.data.token);
//           localStorage.setItem("user_id", response.data.user_id);
//           dispatch(logIn(response.data.name));
//           window.location.replace("/");

//           console.log("로그인이 되었습니다.");
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         // window.alert('잘못된 아이디나 비밀번호 입니다. 다시 확인해주세요!(*⁰▿⁰*)')
//         Swal.fire({
//           icon: "warning",
//           title: "잘못된 아이디나 비밀번호 입니다. 다시 확인해주세요!(*⁰▿⁰*)",
//           showClass: {
//             popup: "animate__animated animate__fadeInDown",
//           },
//           hideClass: {
//             popup: "animate__animated animate__fadeOutUp",
//           },
//         });
      .post("/api/login", data) //"api/login" 백엔드분들이랑 할때는 api필수
      .then((response) => {
        if (response.data.token) {
          api.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${response.data.token}`;
          localStorage.setItem("token", response.data.token);
          //   localStorage.setItem("name", response.data.name);
          dispatch(logIn(response.data.user_id));
          //window.location.replace("/");
          console.log("로그인이 되었습니다.");
          history.replace("/inspire_list");
        }
      });
  };
};

const signupDB = (user_id, nickname, pw, pw2) => {
  return async function (dispatch, getState) {
    const userInfo = {
      user_id: user_id,
      nickname: nickname,
      pw: pw,
      pw2: pw2,
    };
    console.log("회원가입중");
    await api
      .post("/api/signup", userInfo) //"/api/signup"
      .then(function (response) {
        window.alert(
          // "회원가입을 축하드립니다! 로그인 후 이용하실 수 있어요╰(*´︶`*)╯♡"
          Swal.fire({
            icon: "success",
            title:
              "회원가입을 축하드립니다! 로그인 후 이용하실 수 있어요╰(*´︶`*)╯♡",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          })
        );
        history.replace("/login");
      })
      .catch((err) => {
        console.log(err);
        window.alert(
          // "이미 등록된 사용자 입니다! 아이디 또는 닉네임을 변경해주세요(*⁰▿⁰*)"
          Swal.fire({
            icon: "warning",
            title:
              "이미 등록된 사용자 입니다! 아이디 또는 닉네임을 변경해주세요(*⁰▿⁰*)",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          })
        );
      });
  };
};

// reducer
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        // localStorage.removeItem("name");
        localStorage.removeItem("token");
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// action creator export
const actionCreators = {
  logIn,
  getUser,
  signupDB,
  loginDB,
};

export { actionCreators };
