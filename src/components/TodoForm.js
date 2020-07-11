import React from "react";
import "../styling.css";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTask: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.newTask);
    console.log("Submit worked!");
  };

  handleChanges = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  render() {
    return (
      <div className="todo-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="todofield"
            onChange={this.handleChanges}
            placeholder="Enter new task..."
          />
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
