import React from "react";
import TodoItem from "./TodoItem";
export default function TodoList(props) {
  // console.log("TodoList.js: ", props.onDelete);
  return (
    <div>
      <h2>Todo List App</h2>
      {/* {console.log("todos Array: ", props.todos)} */}
      <ul>
        {props.todos.map(todo => (
          <TodoItem key={todo.id} onDelete={props.onDelete} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
