import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.bubble.css";
import { Input } from "../../common";

const EditorBlock = styled.div``;

const TitleInput = styled.input`
  font-size: 1.25rem;
  font-weight: 500;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 1.25rem;
  width: 100%;
`;

const QuillWrapper = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 0.9rem;
    font-weight: 100;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

const Editor = () => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "bubble",
      placeholder: "영감을 작성하세요...",
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block", "link", "image"],
        ],
      },
    });
  }, []);

  return (
    <EditorBlock>
      <TitleInput placeholder="제목을 입력하세요" />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

export default Editor;
