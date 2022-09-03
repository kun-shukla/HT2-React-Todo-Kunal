import { useState } from "react";
import Input from "../Input";
import List from "../List";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, todo: "walk the dog" },
    { id: 2, todo: "got to hampstead heath" },
  ])
  return (
    <div className="App">
      <Input handleClick={handleClick}/>
      <List todos={todos}/>
    </div>
  );
}

export default App;
