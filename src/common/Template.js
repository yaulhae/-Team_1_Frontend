import styled from "styled-components";
import React from "react";

const TemplateBlock = styled.div`
  background: white;
  width: 375px;
  height: 667px;
  margin: 0 auto;
  margin-top: 5em;
  border-radius: 8px;
  padding: 4.5em 3em;
`;

const Template = ({ children }) => {
  return <TemplateBlock>{children}</TemplateBlock>;
};

export default Template;
