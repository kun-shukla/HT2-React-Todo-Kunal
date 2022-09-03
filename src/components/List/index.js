import React from 'react'
import ListItem from '../ListItem'

export default function List({todos, deleteItem}) {
  return todos.map((todo,index)=> {
  return (
    <div> 
        <ListItem todo={todo} deleteItem={deleteItem} index={index}/>
    </div>
  );
});
};
