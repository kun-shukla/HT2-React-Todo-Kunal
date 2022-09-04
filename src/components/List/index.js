import React from "react";
import ListItem from "../ListItem";

export default function List({ todos, deleteItem, updateItem }) {
  return todos.map((todo, index) => {
    return (
      <div>
        <ListItem
          key={todo.id}
          todo={todo}
          deleteItem={deleteItem}
          updateItem={updateItem}
          index={index}
        />
      </div>
    );
  });
}
