import styled from "styled-components";
import React from "react";
import { Button, Grid, Text, Image } from "../common";
import Template from "../common/Template";

const WelComePageBlock = styled.div``;

const WelComePage = () => {
  return (
    <Template>
      <WelComePageBlock>
        <Grid margin="0 0 2em 0">
          <Text size="24px" bold="600" text_align="center">
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
          margin="187px 0 8px 0"
          border_radius="12px"
          font_weight="500"
        >
          회원가입
        </Button>
        <Button bg="black" width="100%" border_radius="12px" font_weight="500">
          로그인
        </Button>
      </WelComePageBlock>
    </Template>
  );
};

export default WelComePage;
