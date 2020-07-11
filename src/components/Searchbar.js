import React from "react";

class Searchbar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>
            Search tasks:
            <input
              id="tasks"
              type="text"
              name="searchfield"
              placeholder="Search"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Searchbar;
