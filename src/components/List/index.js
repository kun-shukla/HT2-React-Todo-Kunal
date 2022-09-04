import React from "react";
import ListItem from "../ListItem";

export default function List({ todos, deleteItem, updateItem }) {
  //this maps through the array and renders a ListItem component for each todo
  //the delete and update functions are passed through as props to be used in thier respective buttons in the ListItem component
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
