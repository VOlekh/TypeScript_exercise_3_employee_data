import React, { useState } from "react";
import "./styles.css";

export interface IUpdateStateSample3 {
  sentence: string;
}

function reverseSentenceFunc(sentence: string) {
  //let reversed;
  //let newArray = [];
  //reversed = sentence.split(" ");
  //for (var i = 0; i < reversed.length; i++) {
  //  newArray.push(reversed[i].split("").reverse().join(""));
  //}
  //return newArray.join(" ");

  return sentence.split("").reverse().join("");
}

const SENTENCE = "Welcome on board";

const UpdateStateSample3: React.FC<IUpdateStateSample3> = () => {
  const [stateObject, setStateObject] = useState({
    sentence: SENTENCE
  });

  return (
    <div className="box">
      <div>{`This is sentence reverse with function: ${SENTENCE} ${stateObject.sentence}`}</div>
      <button
        onClick={() => {
          setStateObject({
            ...stateObject,
            sentence: reverseSentenceFunc(stateObject.sentence)
          });
        }}
      >
        Change sentence
      </button>
    </div>
  );
};
export default UpdateStateSample3;
