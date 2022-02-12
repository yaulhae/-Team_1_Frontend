import styled from "styled-components";
import React from "react";
import Template from "../common/Template";
import { Grid, Image, Text } from "../common";
import { useNavigate } from "react-router-dom";

const InspireItemPageBlock = styled.div`
  width: 100%;
  .number_list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .number_item {
    cursor: pointer;
  }
  span {
    display: block;
    width: calc((100%-48px) / 9);
    height: 32px;
    background: white;
    color: #252525;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2px;
  }
`;

const InspireItemPage = () => {
  const navigate = useNavigate();
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
  ];
  return (
    <Template bg="black">
      <InspireItemPageBlock>
        <Grid margin="0 0 1em 0">
          <Text size="1.5rem" bold="500" color="white">
            <b className="user_name">야울해</b> 님의 <br />
            디자인 노트
          </Text>
        </Grid>
        <Grid width="100%" margin="0 0 2.5em 0">
          <Image
            shape="rectangle"
            rectangle_size="55%"
            src="https://ifh.cc/g/Q9RUIy.jpg"
          />
        </Grid>
        <Grid>
          <Text color="white" margin="0 0 1em 0" bold="100">
            영감일지
          </Text>
          <div className="number_list" onClick={() => navigate("/memo_list")}>
            {numbers.map((n, idx) => {
              return <span className="number_item">{n}</span>;
            })}
          </div>
        </Grid>
      </InspireItemPageBlock>
    </Template>
  );
};

export default InspireItemPage;
