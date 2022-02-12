import styled from "styled-components";
import React from "react";

const TemplateBlock = styled.div`
  background: ${(props) => (props.bg ? props.bg : "white")};
  width: 375px;
  height: 667px;
  margin: 0 auto;
  margin-top: 5em;
  border-radius: 8px;
  padding: 3em 3em;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Template = (props) => {
  const { bg, children } = props;
  const style = { bg: bg };

  return <TemplateBlock {...style}>{children}</TemplateBlock>;
};

Template.defaultProps = {
  bg: false,
};

export default Template;
