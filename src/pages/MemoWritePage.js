import styled from "styled-components";
import React from "react";
import Template from "../common/Template";
import { Grid, Text } from "../common";

const MemoWritePageBlock = styled.div``;

const MemoWritePage = () => {
  return (
    <Template bg="black">
      <MemoWritePageBlock>
        <Grid is_flex="flex" margin="0 0 3em 0">
          <Text color="white" size="1.2rem" bold="500" text_align="right">
            완료
          </Text>
        </Grid>
        <Grid>
          <Text color="white">이 부분은글쓰기 에디터 공부해봐야함</Text>
        </Grid>
      </MemoWritePageBlock>
    </Template>
  );
};

export default MemoWritePage;
