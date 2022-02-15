import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import api from "../../api";

// actions
const LOG_IN = "LOG_IN";
const GET_USER = "GET_USER";

// action creators
const logIn = createAction(LOG_IN, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
  name: null,
};

// middleware actions
const loginDB = (user_id, pw) => {
  return async function (dispatch, getState, { history }) {
    const data = {
      user_id: user_id,
      pw: pw,
    };
    await api
      .post("/login", data) //"api/login" 백엔드분들이랑 할때는 api필수
      .then((response) => {
        console.log(response);
        // if (response.data.token) {
        //   localStorage.setItem("token", response.data.token);
        //   localStorage.setItem("name", response.data.name);
        //   dispatch(logIn(response.data.name));
        //   window.location.replace("/");

        console.log("로그인이 되었습니다.");
        // }
      });
    //   .catch((err) => {
    //     console.log(err);
    // window.alert('잘못된 아이디나 비밀번호 입니다. 다시 확인해주세요!(*⁰▿⁰*)')
    //   });
  };
};
const signupDB = (user_id, pw, pw2, nickname) => {
  return async function (dispatch, getState, { history }) {
    const userInfo = {
      user_id: user_id,
      pw: pw,
      pw2: pw2,
      nickname: nickname,
    };
    console.log("회원가입중");
    await api
      .post("/signup", userInfo) //"/api/signup"
      .then(function (response) {
        console.log(response);
        window.alert(
          "회원가입을 축하드립니다! 로그인 후 이용하실 수 있어요╰(*´︶`*)╯♡"
        );
      })
      .catch((err) => {
        console.log(err);
        window.alert(
          "이미 등록된 사용자 입니다! 아이디 또는 닉네임을 변경해주세요(*⁰▿⁰*)"
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
