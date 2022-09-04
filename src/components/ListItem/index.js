import React from "react";

export default function ListItem({ todo, deleteItem, index }) {
  console.log(todo);
  return (
    <div>
      <li key={todo.id}>{todo.todo}</li>
      <button onClick={() => deleteItem(index)}>Delete</button>
    </div>
  );
}
