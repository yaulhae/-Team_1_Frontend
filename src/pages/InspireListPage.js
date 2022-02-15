import styled from "styled-components";
import React from "react";
import Template from "../common/Template";
import { Grid, Image, Text } from "../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setInspireFB } from "../module/inspire";

const InspireListPageBlock = styled.div`
  color: white;
  .inspire_list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const InspireListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inspire_list = useSelector(({ inspire }) => inspire.list);

  useEffect(() => {
    dispatch(setInspireFB());
  }, []);

  return (
    <Template>
      <InspireListPageBlock>
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
            {inspire_list.map((i, idx) => {
              return (
                <Grid
                  key={idx}
                  width="48%"
                  onClick={() => navigate(`/inspire_list/${i._id}`)}
                >
                  <Text
                    size="0.8rem"
                    bold="600"
                    margin="0 0 0.2em 0"
                    text_align="center"
                  >
                    {i.name}
                  </Text>
                  <Image
                    src={i.image_url}
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
