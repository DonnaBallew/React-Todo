import React from "react";
import ReactDom from "react-dom";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "30 minutes of Yoga",
          id: 1,
          completed: false,
        },
        {
          task: "Make dinner",
          id: 2,
          completed: false,
        },
        {
          task: "Study Class Components",
          id: 3,
          completed: false,
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm />
      </div>
    );
  }
}

export default App;
