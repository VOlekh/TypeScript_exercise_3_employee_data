import React, { useState } from "react";
import "./styles.css";

export interface IUpdateStateSample {}

const UpdateStateSample: React.FC<IUpdateStateSample> = () => {
  const [sentence, reverseSentence] = useState("hjytryt sd sad");

  return (
    <div>
      <div>{`This is sentence reverse: ${sentence}`}</div>
      <button
        onClick={() => {
          reverseSentence(sentence.split(" ").reverse().join(" "));
        }}
      >
        Change sentence
      </button>
    </div>
  );
};
export default UpdateStateSample;
