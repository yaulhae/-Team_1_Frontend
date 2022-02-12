import styled from "styled-components";
import React from "react";
import Template from "../common/Template";
import { Grid, Image, Text } from "../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const InspireListPageBlock = styled.div`
  color: white;
  .inspire_list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const InspireListPage = () => {
  const navigate = useNavigate();
  let inspire_list = [
    { title: "디자인", img_url: "https://ifh.cc/g/OJewWn.jpg" },
    { title: "갬성음악", img_url: "https://ifh.cc/g/W9YrVv.jpg" },
    { title: "영화리뷰", img_url: "https://ifh.cc/g/wEQY8B.jpg" },
    { title: "UX", img_url: "https://ifh.cc/g/gPvEuR.jpg" },
    { title: "공예", img_url: "https://ifh.cc/g/cpnr9M.jpg" },
    { title: "바우하우스", img_url: "https://ifh.cc/g/DvsLAG.jpg" },
    { title: "카피라이터", img_url: "https://ifh.cc/g/Q9RUIy.jpg" },
  ];
  return (
    <Template bg="black">
      <InspireListPageBlock>
        <Grid margin="0 0 1.5em 0">
          <Grid text_align="center">
            <Text color="white" bold="600">
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
          <div class="inspire_list" style={{ width: "100%" }}>
            {inspire_list.map((i, idx) => {
              return (
                <Grid width="48%" onClick={() => navigate("/inspire_item")}>
                  <Text
                    color="#f9f9f9"
                    size="0.8rem"
                    bold="400"
                    margin="0 0 0.2em 0"
                  >
                    {i.title}
                  </Text>
                  <Image
                    src={i.img_url}
                    shape="rectangle"
                    rectangle_size="100%"
                  />
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
