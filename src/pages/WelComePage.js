import styled from "styled-components";
import React from "react";
import { Button, Grid, Text, Image } from "../common";
import Template from "../common/Template";
import { useNavigate } from "react-router-dom";

const WelComePageBlock = styled.div`
  .welcome_img_outer {
    width: 100%;
    min-width: 100px;
    cursor: pointer;
    transform: translate();
    overflow: hidden;
    border-radius: 12px;
  }
  .welcome_img {
    position: relative;
    padding-top: 70%;
    overflow: hidden;
    background-image: url("https://ifh.cc/g/yj8Jce.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform: scale(1.15);
    border-radius: 12px;
    transition: 0.3s all;
  }
`;

const WelComePage = () => {
  const navigate = useNavigate();
  return (
    <Template>
      <WelComePageBlock>
        <Grid margin="0 0 6em 0">
          <Text size="24px" bold="600" text_align="center">
            기획자의 일상
          </Text>
        </Grid>
        <Grid width="100%" margin="0 0 6em 0">
          <div className="welcome_img_outer">
            <div className="welcome_img"></div>
          </div>
        </Grid>
        <Button
          bg="black"
          width="100%"
          margin="3em 0 0.3em 0"
          border_radius="8px"
          font_weight="500"
          onClick={() => navigate("/signup")}
        >
          회원가입
        </Button>
        <Button
          bg="black"
          width="100%"
          border_radius="8px"
          font_weight="500"
          onClick={() => navigate("/login")}
        >
          로그인
        </Button>
      </WelComePageBlock>
    </Template>
  );
};

export default WelComePage;
