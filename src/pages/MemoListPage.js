import styled from "styled-components";
import React from "react";
import Template from "../common/Template";
import { Grid, Text } from "../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const MemoListPageBlock = styled.div`
  .memo_item {
    border-bottom: 1px solid #707070;
    margin-bottom: 2em;
    cursor: pointer;
  }
`;

const MemoListPage = () => {
  const [memoList, setMemoList] = useState([
    {
      title: "음악은 세상이 허락한 유일한 마약",
      content:
        "손을 내밀어도 말을 걸어봐도 아무것도 할 수 없어 아무것도 할 수 없어 조각조각 부서지는 마음 부서진 내 마음은 레몬과자 맛이 나....",
      insert_dt: "2022.02.11",
    },
    {
      title: "어른아이",
      content:
        "다왔지 이제는 거의 다왔다고 믿었어 알았지 내가 언제 다안다고 그랬어....",
      insert_dt: "2022.02.14",
    },
  ]);
  const navigate = useNavigate();
  return (
    <Template bg="black">
      <MemoListPageBlock>
        <Grid is_flex="flex" margin="0 0 2em 0">
          <Text color="white" size="1.2rem" bold="500">
            메모
          </Text>
          <Link to="/memo_write">
            <FontAwesomeIcon
              icon={faPlus}
              style={{
                color: "black",
                background: "white",
                padding: "0.5em 0.6em",
                borderRadius: "10px",
              }}
            />
          </Link>
        </Grid>
        <Grid>
          <div className="memo_list">
            {memoList.map((m, idx) => {
              return (
                <div
                  className="memo_item"
                  onClick={() => navigate("/memo_write")}
                >
                  <Text
                    color="white"
                    margin="0 0 0.4em 0"
                    bold="500"
                    size="0.75rem"
                  >
                    {m.title}
                  </Text>
                  <Text
                    color="white"
                    margin="0 0 3em 0"
                    size="0.625rem"
                    bold="100"
                  >
                    {m.content}
                  </Text>
                  <Text color="white" bold="100" size="0.50rem">
                    {m.insert_dt}
                  </Text>
                </div>
              );
            })}
          </div>
        </Grid>
      </MemoListPageBlock>
    </Template>
  );
};

export default MemoListPage;
