import styled from "styled-components";
import React from "react";

const CircleImage = styled.div`
  --size: ${(props) => props.size};
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 0.5em;
`;

const AspectOutter = styled.div`
  width: ${(props) => (props.rectangle_size ? props.rectangle_size : "")};
  min-width: 100px;
  cursor: pointer;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 125%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  border-radius: 12px;
`;

const ImageDefault = styled.div`
  --size: ${(props) => props.size};
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const Image = (props) => {
  const { shape, size, src, rectangle_size } = props;
  const styles = {
    src: src,
    size: size,
    rectangle_size: rectangle_size,
  };

  if (shape === "circle") {
    return <CircleImage {...styles}></CircleImage>;
  }

  if (shape === "rectangle") {
    return (
      <AspectOutter {...styles}>
        <AspectInner {...styles} />
      </AspectOutter>
    );
  }
  return (
    <>
      <ImageDefault {...styles} />
    </>
  );
};

Image.defaultProps = {
  shape: "circle",
  size: "36px",
  rectangle_size: "36px",
  src: "https://ifh.cc/g/8lDrUd.jpg",
};

export default Image;
