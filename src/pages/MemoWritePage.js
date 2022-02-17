import styled from "styled-components";
import React, { useState } from "react";
import Template from "../common/Template";
import { Button, Grid, Text } from "../common";
import Editor from "../components/write/Editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {
  changeField,
  initialize,
  writeMemo,
  writeMemoFB,
} from "../module/write";
import { useEffect } from "react";
import { setMemoFB, updateMemoFB } from "../module/memo";
import EditorContainer from "../container/write/EditorContainer";

const MemoWritePageBlock = styled.div`
  .note_title {
    width: 100%;
    border: 0;
    font-size: 1.8rem;
    &::placeholder {
      font-size: 1.8rem;
    }
    &:focus {
      outline: none;
    }
  }
  .note_content {
    border: none;
    width: 100%;
    height: 40vh;
    outline: none;
  }
`;

const MemoWritePage = () => {
  const memo_id = useParams().id;
  const navigate = useNavigate();
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));
  const memo = useSelector(({ memo }) => memo.memo);
  console.log(memo);
  const dispatch = useDispatch();
  const [input, setInput] = useState(null);
  const [textarea, setTextarea] = useState(null);
  console.log(input, textarea);

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch]
  );

  const onUpdate = () => {
    const memo = { memo_title: input, memo_content: textarea };
    console.log(memo);
    dispatch(updateMemoFB(memo_id, memo));
  };

  const onCancel = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(setMemoFB(memo_id));
    if (memo_id) {
      setInput(memo.memo_title);
      setTextarea(memo.memo_content);
    }
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  /*const updateMemo = (id) => {
    dispatch(updateMemoFB(id));
  };*/

  return (
    <Template>
      <MemoWritePageBlock>
        <Grid is_flex="flex" margin="0 0 3em 0">
          <FontAwesomeIcon
            icon={faAngleLeft}
            style={{ marginRight: "0.2em", cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
          <Text size="1.2rem" bold="500" text_align="right">
            완료
          </Text>
        </Grid>
        <div className="overflow_y">
          {/* <EditorContainer memo_id={memo_id} memo={memo} />*/}
          <input
            type="text"
            placeholder="제목을 입력해주세용"
            className="note_title"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <textarea
            placeholder="영감을 작성해주세요"
            className="note_content"
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
          />
        </div>
        <Grid>
          {memo_id ? (
            <Button
              bg="black"
              border_radius="4px"
              color="white"
              margin="0 0.2em 0 0"
              padding="0.6em 1em"
              font_weight="500"
              onClick={onUpdate}
            >
              메모 수정
            </Button>
          ) : (
            <Button
              bg="black"
              border_radius="4px"
              color="white"
              margin="0 0.2em 0 0"
              padding="0.6em 1em"
              font_weight="500"
              onClick={onUpdate}
            >
              메모 등록
            </Button>
          )}
          <Button
            bg="#C4C4C4"
            border_radius="4px"
            color="white"
            padding="0.6em 1em"
            font_weight="500"
            onClick={onCancel}
          >
            취소
          </Button>
        </Grid>
      </MemoWritePageBlock>
    </Template>
  );
};

export default MemoWritePage;
