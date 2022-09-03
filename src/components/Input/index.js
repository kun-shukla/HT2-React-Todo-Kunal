import React from "react";
import { useState } from "react";

export default function Input({ handleClick }) {
  const [text, setText] = useState("");

  function onChange(event) {
    let userInput = event.target.value;
    setText(userInput);
  }
  return (
    <>
      <input type="text" onChange={onChange} />
      <button onClick={handleClick}>Add Todo</button>
    </>
  );
}
