import React from "react";
import { useState } from "react";

export default function Input({ handleClick }) {
  //initial state for text variable is set here. 
  const [text, setText] = useState("");
  function handleChange(event) {
    //user inputted text is stored in the userInput variable and then used to update state of the 'text' variable.
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
