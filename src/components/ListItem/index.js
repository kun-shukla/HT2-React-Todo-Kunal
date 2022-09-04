import React from "react";

export default function ListItem({ todo, deleteItem, index, updateItem }) {
  console.log(todo);
  return (
    <div>
      <li>{todo.todo}</li>
      <button onClick={() => deleteItem(index)}>Delete</button>
      <button onClick={() => updateItem(index)}>Update</button>
    </div>
  );
}
