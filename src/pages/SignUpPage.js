import styled from "styled-components";
import React from "react";
import Template from "../common/Template";
import { Grid, Image, Text } from "../common";

const SignUpPageBlock = styled.div``;

const SignUpPage = () => {
  return (
    <Template>
      <SignUpPageBlock>
        <Grid>
          <Text>기획자의 일상</Text>
        </Grid>
        <Grid>
          <Grid width="100%">
            <Image
              src="https://ifh.cc/g/PVN0qW.jpg"
              shape="rectangle"
              rectangle_size="100%"
            ></Image>
          </Grid>
        </Grid>
      </SignUpPageBlock>
    </Template>
  );
};

export default SignUpPage;
