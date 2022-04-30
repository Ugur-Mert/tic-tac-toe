import React from "react";
import "./Box.css";

export default function Box({ value, onClick }) {
  const style = value === "X" ? "button x" : "button o";
  return (
    <div>
      <button className={style} onClick={onClick}>
        {value}
      </button>
    </div>
  );
}
