import React from "react";
// {console.log("TodoItem - todo Item: ", props.todo)}

export default function TodoItem(props) {
  // console.log("TodoItem.js: ", props.onDelete);
  // console.log("TodoItem.js: ", props.todo.id);
  return (
    <li>
      <span>{props.todo.text}</span>
      <input type="checkbox" />
      <button onClick={() => props.onDelete(props.todo.id)}>Delet</button>
    </li>
  );
}
