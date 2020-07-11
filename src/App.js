import React from "react";
import "./styling.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const data = [
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
];
console.log(data);

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: data,
    };
  }

  addTask = (task) => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  toggleCompleted = (id) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      }),
    });
  };

  deleteCompleted = (e) => {
    console.log("Delete completed");
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter((task) => {
        return !task.completed;
      }),
    });
  };

  render() {
    return (
      <div className="main-contain">
        <h1>Todo List</h1>
        <div>
          <TodoForm addTask={this.addTask} />
        </div>
        <div>
          <TodoList
            deleteCompleted={this.deleteCompleted}
            toggleCompleted={this.toggleCompleted}
            tasks={this.state.tasks}
          />
        </div>
      </div>
    );
  }
}

export default App;
