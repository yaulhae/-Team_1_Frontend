import styled from "styled-components";
import React, { useEffect } from "react";
import Template from "../common/Template";
import { Grid, Text } from "../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faPlus,
  faRectangleXmark,
  faSquarePen,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { deleteMemoFB, setMemoFB, updateMemoFB } from "../module/memo";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const MemoListPageBlock = styled.div`
  .memo_item {
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
    padding: 1em;
    border-radius: 8px;
    margin-bottom: 1em;
  }
  .icon_wrapper {
    display: flex;
    color: black;
    padding-right: 0.5em;
    position: absolute;
    right: 0.5em;
    top: -1.4em;
    z-index: 1;
  }
  .update_icon {
    color: rgb(27, 156, 252);
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .delete_icon {
    color: rgb(252, 27, 27);
    display: none;
    font-size: 1.5rem;
    margin-left: 0.1em;
    cursor: pointer;
  }
  .memo_item:hover {
    .update_icon {
      display: block;
    }
    .delete_icon {
      display: block;
    }
  }
  .memo_item_content {
    display: flex;
  }
  .delete_box {
    position: absolute;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    z-index: 10;
    right: -3em;
    top: 1em;
    width: 0%;
    display: none;
    height: 120px;
    background: red;
    transition: 0.3s all linear;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
  }
  .full {
    display: block;
    width: 34%;
    padding: 0.5em;
    cursor: pointer;
  }
  .text_container {
    cursor: pointer;
  }
`;

const MemoListPage = () => {
  const memo_id = useParams().id;
  const memo = useSelector(({ memo }) => memo.memo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [deleteBox, setDeleteBox] = useState(false);
  const [inspireId, setInspireID] = useState("");

  const deleteMemo = () => {
    setDeleteBox(!deleteBox);
  };
  /*const updateMemo = (id) => {
    dispatch(updateMemoFB(id));
  };*/

  const deleteMemoItem = (id) => {
    dispatch(deleteMemoFB(id));
    setDeleteBox(false);
  };

  useEffect(() => {
    dispatch(setMemoFB(memo_id));
    return () => {
      setDeleteBox(false);
    };
  }, []);

  return (
    <Template>
      <MemoListPageBlock>
        <Grid is_flex="flex" margin="0 0 2em 0">
          <Text size="1.2rem" bold="600">
            <div style={{ display: "flex", alignItems: "center" }}>
              <FontAwesomeIcon
                icon={faAngleLeft}
                style={{
                  marginRight: "0.2em",
                  width: "7px",
                  height: "12px",
                  cursor: "pointer",
                }}
                onClick={() => navigate(-1)}
              />
              메모
            </div>
          </Text>
          <Link to="/memo_write">
            <FontAwesomeIcon
              icon={faPlus}
              style={{
                color: "white",
                padding: "0.4em 0.5em",
                borderRadius: "20px",
                width: "2rem",
                background: "#1b9cfc",
              }}
            />
          </Link>
        </Grid>
        <Grid>
          <div className="memo_list">
            {/*{memoList.map((m, idx) => {
              return (
                <div
                  className="memo_item"
                  onClick={() => navigate("/memo_write")}
                >
                  <Text margin="0 0 0.4em 0" bold="600" size="0.9rem">
                    {m.title}
                  </Text>
                  <Text margin="0 0 3em 0" size="0.8rem" bold="400">
                    {m.content}
                  </Text>
                  <Text bold="300" size="0.80rem">
                    {m.insert_dt}
                  </Text>
                </div>
              );
            })}*/}
            <div className="memo_item">
              <div className="icon_wrapper">
                <FontAwesomeIcon
                  icon={faSquarePen}
                  className="update_icon"
                  onClick={() => navigate(`/memo_write/${memo.memo_id}`)}
                  /*onClick={() => updateMemo(memo.memo_id)}*/
                />
                <FontAwesomeIcon
                  icon={faRectangleXmark}
                  className="delete_icon"
                  onClick={deleteMemo}
                />
              </div>
              <div className="memo_item_content">
                <div className="text_container">
                  <Text margin="0 0 0.4em 0" bold="600" size="0.9rem">
                    {memo?.memo_title}
                  </Text>
                  <Text margin="0 0 3em 0" size="0.8rem" bold="400">
                    {memo?.memo_content}
                  </Text>
                  <Text bold="300" size="0.80rem">
                    {memo ? memo.date : ""}
                  </Text>
                </div>

                <div
                  className={deleteBox ? "delete_box full" : "delete_box"}
                  onClick={() => deleteMemoItem(memo_id)}
                >
                  영감을
                  <br /> 삭제하시겠습니까?
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </MemoListPageBlock>
    </Template>
  );
};

export default MemoListPage;
