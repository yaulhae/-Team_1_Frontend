import styled from "styled-components";
import React from "react";
import { Button, Grid, Input, Text } from "../common";
import Template from "../common/Template";
import { useNavigate } from "react-router-dom";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import { usernameCheck, nicknameCheck, passwordCheck } from "../commons";
import Swal from "sweetalert2";
import "animate.css";

const SignUpPageBlock = styled.div``;

const SignUpPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [id, setId] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [pw2, setPw2] = React.useState("");

  const changeId = (e) => {
    setId(e.target.value);
  };

  const changePw = (e) => {
    setPw(e.target.value);
  };

  const changePw2 = (e) => {
    setPw2(e.target.value);
  };

  const changeNick = (e) => {
    setNickname(e.target.value);
  };
  const goBack = () => {
    navigate("/");
  };

  const signup = () => {
    // 유저 정보 입력란 공백 체크
    if (id === "" || pw === "" || nickname === "" || pw2 === "") {
      // window.alert("아이디, 닉네임, 패스워드 모두 입력해주세요.");
      Swal.fire({
        icon: "question",
        title: "아이디, 닉네임, 패스워드 모두 입력해주세요.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      return;
    }
    // 유저 아이디 체크
    if (!usernameCheck(id)) {
      // window.alert("아이디: 영소문 / 숫자 혼합 3~12자 입력해주세요.  공백은 X");
      Swal.fire({
        icon: "warning",
        title: "아이디: 영소문 / 숫자 혼합 3~12자 입력해주세요.  공백은 X",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      return;
    }
    // 유저 닉네임 체크
    if (!nicknameCheck(nickname)) {
      // window.alert("닉네임: 한글 / 영문 / 숫자 3~10자 입력해주세요.");
      Swal.fire({
        icon: "warning",
        title: "닉네임: 한글 / 영문 / 숫자 3~10자 입력해주세요.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      return;
    }
    // 유저 비밀번호 체크
    if (!passwordCheck(pw)) {
      // window.alert(
      //   "비밀번호: 영대소문 / 숫자 / 특수문자 혼합 4~12자 입력해주세요."
      // );
      Swal.fire({
        icon: "warning",
        title: "비밀번호: 영대소문 / 숫자 / 특수문자 혼합 4~12자 입력해주세요.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      return;
    }
    // 유저 비밀번호 일치 체크
    if (pw !== pw2) {
      // window.alert("패스워드가 일치하지 않습니다.");
      Swal.fire({
        icon: "error",
        title: "패스워드가 일치하지 않습니다.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      return;
    }

    dispatch(userActions.signupDB(id, nickname, pw, pw2));
  };

  return (
    <Template>
      <SignUpPageBlock>
        <Grid margin="0 0 2em 0">
          <Text size="24px" bold="600" margin="0 0 0.2em 0">
            회원가입
          </Text>
          <Text size="15px" bold="400">
            환영합니다. 메모장에 담긴 영감을 바깥으로
            <br />
            꺼내주세요
          </Text>
        </Grid>

        <Grid margin="0 0 4em 0">
          <Grid margin="0 0 1em 0">
            <Input
              is_label="아이디"
              placeholder="아이디를 입력해주세요"
              width="100%"
              padding="0.3em 0 0.3em 0"
              color="black"
              font_weight="bold"
              font_size="0.875rem"
              onChange={changeId}
              value={id}
            />
          </Grid>
          <Grid margin="0 0 1em 0">
            <Input
              is_label="닉네임"
              placeholder="닉네임을 입력해주세요"
              width="100%"
              padding="0.3em 0 0.3em 0"
              color="black"
              font_weight="bold"
              font_size="0.875rem"
              onChange={changeNick}
              value={nickname}
            />
          </Grid>
          <Grid margin="0 0 1em 0">
            <Input
              is_label="비밀번호"
              placeholder="비밀번호를 입력해주세요"
              width="100%"
              padding="0.3em 0 0.3em 0"
              color="black"
              font_weight="bold"
              font_size="0.875rem"
              type="password"
              onChange={changePw}
              value={pw}
            />
          </Grid>
          <Grid>
            <Input
              is_label="비밀번호 확인"
              placeholder="비밀번호를 확인해주세요"
              width="100%"
              padding="0.3em 0 0.3em 0"
              color="black"
              font_weight="bold"
              font_size="0.875rem"
              type="password"
              onChange={changePw2}
              value={pw2}
            />
          </Grid>
        </Grid>
        <Button
          bg="black"
          width="100%"
          border_radius="24px"
          font_weight="500"
          onClick={() => {
            signup();
          }}
        >
          회원가입
        </Button>

        <Button
          margin="0.6em 0 0 0"
          bg="black"
          width="100%"
          border_radius="24px"
          font_weight="500"
          onClick={() => {
            goBack();
          }}
        >
          뒤로가기
        </Button>
      </SignUpPageBlock>
    </Template>
  );
};

export default SignUpPage;
