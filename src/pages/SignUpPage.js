import styled from "styled-components";
import React from "react";
import { Button, Grid, Input, Text } from "../common";
import Template from "../common/Template";


const SignUpPageBlock = styled.div``;

const SignUpPage = () => {
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
            />
          </Grid>
        </Grid>
        <Button bg="black" width="100%" border_radius="24px" font_weight="500">
          회원가입
        </Button>

      </SignUpPageBlock>
    </Template>
  );
};

export default SignUpPage;
