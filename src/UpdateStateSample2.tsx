import React, { useState } from "react";
import "./styles.css";

export interface IUpdateStateSample2 {}

const UpdateStateSample: React.FC<IUpdateStateSample2> = () => {
  const [x, changeX] = useState(5);
  //function changeX (xNew:number){x = xNew*5}

  return (
    <div className="box">
      <div>{`This is X: ${x}`}</div>
      <button
        onClick={() => {
          changeX(x * 5);
        }}
      >
        {" "}
        Multiply x
      </button>
    </div>
  );
};
export default UpdateStateSample;
