import React from "react";

export default function Box(props) {
  return (
    <div>
      <button className="button" onClick={props.holdMarked}>
        {props.isMarked ? "X" : "O"}
      </button>
    </div>
  );
}
