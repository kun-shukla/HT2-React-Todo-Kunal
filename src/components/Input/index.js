import React from 'react'
import { useState } from 'react'

export default function Input({todos}) {
const[text, setText] = useState("")



function onChange (event){
let userInput = event.target.value
return setText(userInput)
}

function handleClick () {
    return setTodos([userInput,...todos])
}

  return (
    <>
    <input type="text" onChange={onChange}/>
    <button onClick={handleClick}>Add Todo</button>
    </>
  )
}
