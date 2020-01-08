import React, { Component } from "react";
import { render } from "react-dom";

import Hello from "./Hello";
import TodoList from "./TodoList";

let id = 3;
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 0, text: "My First Todo", checked: false },
        { id: 1, text: "My Second Todo", checked: false },
        { id: 2, text: "My Thired Todo", checked: false }
      ]
    };
  }

  addTodo() {
    const text = prompt("Please Enter Todo Text!");
    this.setState({
      todos: [...this.state.todos, { id: id++, text: text, checked: false }]
    });
  }

  removeTodo(id) {
    console.log("App.js - removeTodo - id : ", id);
    this.setState({
      todos: this.state.todos.filter(todo => todo.id != id)
    });
  }

  x(y) {
    console.log("Y say Hi", y);
  }
  render() {
    return (
      <div>
        <Hello />
        <hr />
        <button onClick={() => this.addTodo()}>Add Todo Item</button>
        <TodoList onDelete={() => this.removeTodo} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
// export default function App() {
//   return (
//     <div className="App">
//       <Hello />
//     </div>
//   );
// }
