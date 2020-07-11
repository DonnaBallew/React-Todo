import React from "react";

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
    console.log("It's working!");
  };

  handleChanges = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>New Task:</label>
        <input type="text" name="todo" onChange={this.handleChanges} />
        <button>Submit</button>
      </form>
    );
  }
}

export default TodoForm;
