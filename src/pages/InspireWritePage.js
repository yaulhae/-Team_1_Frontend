import styled from "styled-components";
import React, { useRef, useState } from "react";
import Template from "../common/Template";
import { Button, Grid, Image, Input, Text } from "../common";
import { useDispatch, useSelector } from "react-redux";
import { setPreview } from "../module/image";
import {
  addInspire,
  addInspireFB,
  changeName,
  getInspireById,
  getInspireByIdFB,
  setInspireFB,
  updateInspireFB,
} from "../module/inspire";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { storage } from "../firebase";

const InspireWritePageBlock = styled.div`
  .image_container {
    position: relative;
    margin: 0 0 0.8em 0;
    &:hover div div {
      transform: ${(props) => props.preview && "scale(1.2)"};
    }
  }
  .inspire_img_label {
    position: absolute;
    color: transparent;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    padding-top: 3em;
    font-weight: 500;
    font-size: 1.6rem;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background: rgba(0, 0, 0, 0.6);
      color: white;
      font-weight: 400;
      border: none;
    }
  }
`;

const InspireWritePage = () => {
  const id = useParams().id;
  const name = useSelector(({ inspire }) => inspire.name);
  const preview = useSelector(({ image }) => image.preview);
  const inspire_list = useSelector(({ inspire }) => inspire.list);
  const user_id = useSelector(({ user }) => user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imageRef = useRef(null);

  const fileUpload = () => {
    const image_file = imageRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image_file);
    reader.onloadend = () => {
      dispatch(setPreview(reader.result));
    };
  };

  const memos_count = Number(
    new Date(new Date().getYear(), new Date().getMonth() + 1, 0)
      .toLocaleString()
      .slice(8, 11)
  );

  const memos = [...Array(memos_count).keys()].map((i, idx) => {
    return { memo: [] };
  });

  const inspireUpdate = () => {
    const image = imageRef.current.files[0];
    if (image) {
      const _upload = storage.ref(`images/${image.name}`).put(image);
      _upload.then((snapshot) => {
        snapshot.ref.getDownloadURL().then((url) => {
          const inspire = {
            note_id: id,
            user_id: user_id,
            note_title: name,
            image_url: url,
          };
          dispatch(updateInspireFB(id, inspire));
        });
      });
    } else {
      const inspire = {
        note_id: id,
        user_id: user_id,
        note_title: name,
      };
      dispatch(updateInspireFB(inspire));
    }
  };

  const inspireSubmit = () => {
    const image = imageRef.current.files[0];
    const _upload = storage.ref(`images/${image.name}`).put(image);
    if (image) {
      _upload.then((snapshot) => {
        snapshot.ref.getDownloadURL().then((url) => {
          const inspire = {
            user_id: user_id,
            note_title: name,
            image_url: url,
          };
          dispatch(addInspireFB(inspire));
        });
      });
    } else {
      const inspire = {
        userId: user_id,
        note_title: name,
      };
      dispatch(addInspireFB(inspire));
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(getInspireByIdFB(id));
    } else {
      dispatch(changeName(""));
    }
  }, []);

  return (
    <Template>
      <InspireWritePageBlock preview={preview}>
        <Grid>
          {id ? (
            <Text size="1.5rem" bold="600" margin="0 0 1em 0">
              영감노트 수정
            </Text>
          ) : (
            <Text size="1.5rem" bold="600" margin="0 0 1em 0">
              영감노트 작성
            </Text>
          )}
        </Grid>
        <Grid>
          <Grid>
            <Text bold="400" size="0.9rem" margin="0 0 0.6em 0">
              미리보기
            </Text>
          </Grid>
          <div className="image_container">
            {id ? (
              <Image
                shape="rectangle"
                rectangle_size="100%"
                src={preview || inspire_list[0]?.image_url}
              />
            ) : (
              <Image
                shape="rectangle"
                rectangle_size="100%"
                src={preview ? preview : "https://ifh.cc/g/026TZe.jpg"}
              />
            )}
            <label className="inspire_img_label" htmlFor="inspire_img">
              파일을
              <br />
              업로드 해주세요!
            </label>
            <input
              type="file"
              id="inspire_img"
              style={{ display: "none" }}
              onChange={fileUpload}
              ref={imageRef}
            />
          </div>
          <Grid>
            <Grid>
              {id ? (
                <Input
                  is_label="이름"
                  bg="transparent"
                  placeholder="영감 이름을 입력해주세요!"
                  padding="0.4em 0"
                  font_weight="400"
                  font_size="14px"
                  width="100%"
                  margin="0 0 0.8em 0"
                  value={name}
                  onChange={(e) => dispatch(changeName(e.target.value))}
                />
              ) : (
                <Input
                  is_label="이름"
                  bg="transparent"
                  placeholder="영감 이름을 입력해주세요!"
                  padding="0.4em 0"
                  font_weight="400"
                  font_size="14px"
                  width="100%"
                  margin="0 0 0.8em 0"
                  value={name}
                  onChange={(e) => dispatch(changeName(e.target.value))}
                />
              )}
              {id ? (
                <Button
                  bg="black"
                  color="white"
                  font_weight="500"
                  width="100%"
                  border_radius="8px"
                  onClick={inspireUpdate}
                >
                  수정하기
                </Button>
              ) : (
                <Button
                  bg="black"
                  color="white"
                  font_weight="500"
                  width="100%"
                  border_radius="8px"
                  onClick={inspireSubmit}
                >
                  등록하기
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
      </InspireWritePageBlock>
    </Template>
  );
};

export default InspireWritePage;
