import React from "react";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      data: [
        {
          task: "30 minutes of Yoga",
          id: 1,
          completed: false
        }
        {
          task: "Make dinner",
          id: 2,
          completed: false
        }
        {
          task: "Study Class Components",
          id: 3,
          completed: false
        },
        
      ]
     
   
  }

  render() {
    return (
      <div>
        <TodoForm />
      </div>
    );
  }
}

export default App;
