import styled from "styled-components";
import React, { useState } from "react";
import Template from "../common/Template";
import { Grid, Image, Text } from "../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faRectangleXmark,
  faSquarePen,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setInspireFB } from "../module/inspire";
import axios from "axios";
import api from "../api";

const InspireListPageBlock = styled.div`
  color: white;
  .black_background {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    .white_box {
      position: relative;
      z-index: 20;
      width: 80%;
      border-radius: 8px;
      background: white;
      color: black;
      text-align: center;
      line-height: 1.4;
      .top_content {
        padding: 1.5em 2em 0 2em;
        h3 {
          font-weight: 600;
          margin-bottom: 1em;
        }
        p {
          font-weight: 500;
          color: rgba(0, 0, 0, 0.5);
          margin-bottom: 2em;
        }
      }
      .delete_box {
        border: 1px solid rgba(0, 0, 0, 0.09);
        padding: 0.8em 0;
        color: #f50000;
        cursor: pointer;
      }
      .cancel_box {
        padding: 0.8em 0;
        cursor: pointer;
      }
    }
  }
  .inspire_list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .icon_wrapper {
    display: flex;
    color: black;
    padding-right: 0.5em;
    position: absolute;
    right: -0.5em;
    top: -0.5em;
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
  .item_hover:hover {
    .update_icon {
      display: block;
    }
    .delete_icon {
      display: block;
    }
  }
`;

const InspireListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inspire_list = useSelector(({ inspire }) => inspire.list);
  const [deleteBox, setDeleteBox] = useState(false);
  const [inspireId, setInspireID] = useState("");

  const deleteModal = (inspire_id) => {
    setDeleteBox(true);
    setInspireID(inspire_id);
  };

  const deleteInspire = async () => {
    await api.delete(`/api/notelist/${inspireId}`);
    dispatch(setInspireFB());
  };

  useEffect(() => {
    dispatch(setInspireFB());
  }, []);

  return (
    <Template>
      <InspireListPageBlock>
        {deleteBox && (
          <div className="black_background" onClick={() => setDeleteBox(false)}>
            <div className="white_box">
              <div className="top_content">
                <h3>영감 노트를 삭제하시겠습니까?</h3>
                <p>
                  삭제하셔도 됩니다!
                  <br /> 쌓아뒀던 영감은 이미 몸에 축적되어 있을테니까요!
                </p>
              </div>
              <div className="button_container">
                <div className="delete_box" onClick={deleteInspire}>
                  <span>DELETE</span>
                </div>
                <div className="cancel_box" onClick={() => setDeleteBox(false)}>
                  <span>Cancel</span>
                </div>
              </div>
            </div>
          </div>
        )}
        <Grid margin="0 0 2.4em 0">
          <Grid text_align="center">
            <Text color="black" bold="600">
              <Link to="/inspire_write">
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  style={{ marginRight: "0.4em", fontSize: "1rem" }}
                />
                영감노트 만들기
              </Link>
            </Text>
          </Grid>
        </Grid>
        <Grid>
          <div className="inspire_list" style={{ width: "100%" }}>
            {inspire_list.notes?.map((i, idx) => {
              return (
                <Grid key={idx} width="48%">
                  <div className="item_hover">
                    <Grid>
                      <Text size="0.8rem" bold="600" margin="0 0 0.2em 0">
                        {i.note_title}
                      </Text>
                      <div className="icon_wrapper">
                        <FontAwesomeIcon
                          icon={faSquarePen}
                          className="update_icon"
                          onClick={() =>
                            navigate(`/inspire_write/${i.note_id}`)
                          }
                        />
                        <FontAwesomeIcon
                          icon={faRectangleXmark}
                          className="delete_icon"
                          onClick={() => deleteModal(i.note_id)}
                        />
                      </div>
                    </Grid>
                    <Image
                      src={i.image_url}
                      shape="rectangle"
                      rectangle_size="100%"
                      onClick={() => navigate(`/inspire_list/${i.note_id}`)}
                    />
                  </div>
                </Grid>
              );
            })}
          </div>
        </Grid>
      </InspireListPageBlock>
    </Template>
  );
};

export default InspireListPage;
