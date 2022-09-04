import { useState } from "react";
import Input from "../Input";
import List from "../List";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, todo: "walk the dog" },
    { id: 2, todo: "go to hampstead heath" },
  ]);

    //function to immutably add user inputted todo to the array
  function handleClick(inputtedText) {
    setTodos([...todos, { id: todos.length + 1, todo: inputtedText }]);
    console.log(todos);
  }
  //function to immutably delete a todo at particular index
  function deleteItem(index) {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  }

    //function to immutably update a todo at a particular index. I have chosen to use a prompt to capture the user input.
  function updateItem(index) {
    let inputtedText = prompt("Please update selected Todo and press 'OK'.");
    console.log(inputtedText)
    setTodos([
      ...todos.slice(0, index),
      { ...todos[index], todo: inputtedText },
      ...todos.slice(index + 1),
    ]);
  }

   //rendering of Input field and List
  return (
    <div className="App">
    <h1>React Todo List</h1>
      <Input handleClick={handleClick} />
      <List todos={todos} deleteItem={deleteItem} updateItem={updateItem} />
    </div>
  );
}

export default App;
