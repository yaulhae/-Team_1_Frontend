import styled from "styled-components";
import React from "react";
import Template from "../common/Template";
import { Button, Grid, Image, Input, Text } from "../common";

const InspireWritePageBlock = styled.div`
  label: {
    color: white;
  }
`;

const InspireWritePage = () => {
  return (
    <Template bg="black">
      <InspireWritePageBlock>
        <Grid>
          <Text size="1.5rem" bold="500" color="white" margin="0 0 1em 0">
            영감노트 작성
          </Text>
        </Grid>
        <Grid>
          <Grid>
            <Text color="white" bold="400" size="0.9rem" margin="0 0 0.6em 0">
              미리보기
            </Text>
          </Grid>
          <Grid margin="0 0 0.8em 0">
            <Image
              shape="rectangle"
              rectangle_size="100%"
              src="https://ifh.cc/g/OJewWn.jpg"
            />
          </Grid>
          <Grid>
            <Grid>
              <Input
                is_label="이름"
                bg="transparent"
                color="white"
                label_color="white"
                placeholder="영감 이름을 입력해주세요!"
                padding="0.4em 0"
                font_weight="100"
                font_size="14px"
                width="100%"
                margin="0 0 0.8em 0"
              />
              <Button bg="white" color="black" width="100%" border_radius="8px">
                등록하기
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </InspireWritePageBlock>
    </Template>
  );
};

export default InspireWritePage;
