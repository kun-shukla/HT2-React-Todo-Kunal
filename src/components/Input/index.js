import React from "react";
import { useState } from "react";

export default function Input({ handleClick }) {
  const [text, setText] = useState("");
  function handleChange(event) {
    let userInput = event.target.value;
    setText(userInput);
  }
  return (
    <>
      <input type="text" onChange={handleChange} />
      <button onClick={() => handleClick(text)}>Add Todo</button>
    </>
  );
}
