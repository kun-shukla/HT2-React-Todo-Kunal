import React from 'react'

export default function ListItem({todo,deleteItem,index}) {
  return (
    <div>
        <li>{todo}</li>
        <button onClick={()=>deleteItem(index)}>Delete</button>
    </div>
  )
}
