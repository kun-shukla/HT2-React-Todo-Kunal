import { useState } from "react";
import Input from "../Input";
import List from "../List";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, todo: "walk the dog" },
    { id: 2, todo: "got to hampstead heath" },
  ]);
  function handleClick(inputtedText) {
    setTodos([...todos,{id:todos.length+1,todo:inputtedText}]);
  }
  function deleteItem(index) {
    setTodos([...todos.slice(0,index),...todos.slice(index+1)])
  }
  return (
    <div className="App">
      <Input handleClick={handleClick} />
      <List todos={todos} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
