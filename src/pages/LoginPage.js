import styled from "styled-components";
import React from "react";
import { Button, Grid, Input, Text } from "../common";
import Template from "../common/Template";
import { useNavigate } from "react-router-dom";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import "animate.css";

const LoginPageBlock = styled.div``;

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");

  const changeId = (e) => {
    setId(e.target.value);
  };

  const changePw = (e) => {
    setPw(e.target.value);
  };

  const goBack = () => {
    navigate("/");
  };

  const login = () => {
    if (id === "" || pw === "") {
      // window.alert("아이디, 패스워드 모두 입력해주세요.");
      Swal.fire({
        icon: "question",
        title: "아이디, 패스워드 모두 입력해주세요.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      return;
    }
    dispatch(userActions.loginDB(id, pw));
  };

  return (
    <Template>
      <LoginPageBlock>
        <Grid margin="0 0 2em 0">
          <Text size="24px" bold="600" margin="0 0 0.2em 0">
            로그인
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
          <Grid>
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
        </Grid>
        <Button
          bg="black"
          width="100%"
          border_radius="24px"
          font_weight="500"
          onClick={() => {
            login();
          }}
        >
          로그인
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
      </LoginPageBlock>
    </Template>
  );
};

export default LoginPage;
