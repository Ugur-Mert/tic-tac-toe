import "./App.css";
import Box from "./Components/Box";
import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";

function App() {
  const [boxes, setBoxes] = useState(createBoxes());
  const [status, setStatus] = React.useState("");

  function createBoxes() {
    const newBoxes = [];
    for (let i = 0; i < 9; i++) {
      newBoxes.push({ isMarked: false, id: nanoid() });
    }

    return newBoxes;
  }

  const ticTacToeElement = boxes.map((box) => (
    <Box
      key={box.id}
      isMarked={box.isMarked}
      holdMarked={() => holdMarked(box.id)}
    />
  ));

  function holdMarked(id) {
    setBoxes((oldBox) =>
      oldBox.map((box) => {
        return box.id === id ? { ...box, isMarked: !box.isMarked } : box;
      })
    );
  }

  return (
    <div className="App">
      <div className="buttons">{ticTacToeElement}</div>
    </div>
  );
}

export default App;
