import styled from "styled-components";
import React from "react";
import Template from "../common/Template";
import { Grid, Text } from "../common";
import Editor from "../components/write/Editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const MemoWritePageBlock = styled.div``;

const MemoWritePage = () => {
  const navigate = useNavigate();
  return (
    <Template>
      <MemoWritePageBlock>
        <Grid is_flex="flex" margin="0 0 3em 0">
          <FontAwesomeIcon
            icon={faAngleLeft}
            style={{ marginRight: "0.2em" }}
            onClick={() => navigate(-1)}
          />
          <Text size="1.2rem" bold="500" text_align="right">
            완료
          </Text>
        </Grid>
        <Editor />
      </MemoWritePageBlock>
    </Template>
  );
};

export default MemoWritePage;
