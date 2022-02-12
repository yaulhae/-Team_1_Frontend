import styled from "styled-components";
import React from "react";

const InputBlock = styled.input`
  width: ${(props) => (props.width ? props.width : "")};
  font-size: ${(props) => (props.font_size ? props.font_size : "")};
  padding: ${(props) => (props.padding ? props.padding : "")};
  border: 0px;
  border-bottom: 1px solid #c4c4c4;
  border-radius: 4px;
  color: ${(props) => (props.color ? props.color : "")};
  font-weight: ${(props) => (props.font_weight ? props.font_weight : "")};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${(props) => (props.color ? props.color : "")};
    font-weight: ${(props) => (props.font_weight ? props.font_weight : "")};
  }
`;

const Input = (props) => {
  const {
    id,
    width,
    padding,
    font_size,
    font_weight,
    type,
    placeholder,
    onChange,
    onSubmit,
    is_label,
    value,
    color,
  } = props;

  const styles = {
    width: width,
    padding: padding,
    font_size: font_size,
    font_weight: font_weight,
    color: color,
  };

  return (
    <>
      {is_label && (
        <label
          htmlFor={id}
          style={{
            width: "100%",
            display: "block",
            color: "#C4C4C4",
            fontSize: "14px",
          }}
        >
          {is_label}
        </label>
      )}
      <InputBlock
        id={id}
        {...styles}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            onSubmit(e);
          }
        }}
      />
    </>
  );
};

Input.defaultProps = {
  id: null,
  width: "",
  padding: false,
  font_size: false,
  font_weight: "400",
  type: "text",
  placeholder: false,
  onChange: () => {},
  onSubmit: () => {},
  onKeyPress: () => {},
  is_label: false,
  value: null,
  color: false,
};
export default Input;
