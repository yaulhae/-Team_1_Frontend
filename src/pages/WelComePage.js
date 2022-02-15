import styled from "styled-components";
import React from "react";
import { Button, Grid, Text, Image } from "../common";
import Template from "../common/Template";
import { useNavigate } from "react-router-dom";

const WelComePageBlock = styled.div``;

const WelComePage = () => {
  const navigate = useNavigate();
  return (
    <Template>
      <WelComePageBlock>
        <Grid margin="0 0 2em 0">
          <Text
            size="24px"
            bold="600"
            text_align="center"
            onClick={() => window.location.reload()}
            cursor="pointer"
          >
            기획자의 일상
          </Text>
        </Grid>
        <Grid width="100%">
          <Image
            shape="rectangle"
            src="https://ifh.cc/g/PVN0qW.jpg"
            rectangle_size="100%"
          />
        </Grid>
        <Button
          bg="black"
          width="100%"
          margin="10em 0 8px 0"
          border_radius="12px"
          font_weight="500"
          onClick={() => navigate("/signup")}
        >
          회원가입
        </Button>
        <Button
          bg="black"
          width="100%"
          border_radius="12px"
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
