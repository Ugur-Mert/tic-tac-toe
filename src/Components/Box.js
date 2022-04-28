import React from "react";
import "./Box.css";

export const Box = ({ value, onClick }) => {
  const style = value === "X" ? "button x" : "button o";
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};
