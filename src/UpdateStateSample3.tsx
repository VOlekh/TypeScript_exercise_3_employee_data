import React, { useState } from "react";
import "./styles.css";

export interface IUpdateStateSample3 {
  sentence: string;
}

function reverseSentence(sentence) {
  let reversed;
  let newArray = [];
  reversed = sentence.split(" ");
  for (var i = 0; i < reversed.length; i++) {
    newArray.push(reversed[i].split("").reverse().join(""));
  }
  return newArray.join(" ");
}

const UpdateStateSample3: React.FC<IUpdateStateSample3> = () => {
  const [sentence, reverseSentence] = useState({
    sentence: "Welcome on board"
  });
  let newSentence = "";
  return (
    <div className="box">
      <div>{`This is sentence reverse with function: ${sentence} ${newSentence}`}</div>
      <button
        onClick={() => {
          newSentence = reverseSentence(sentence);
        }}
      >
        Change sentence
      </button>
    </div>
  );
};
export default UpdateStateSample3;
