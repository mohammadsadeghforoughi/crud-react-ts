import React from "react";

interface ITextArea {
    myText: string
}

const TextArea: React.FC<ITextArea> = (props)  => {
  return (
    <>
      <p className={'bg-dark text-light'}>{props.myText}</p>
    </>
  );
};

export default TextArea;
