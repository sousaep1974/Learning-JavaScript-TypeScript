import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  state = {
    taskNew: '',
  };

  handleChange = (e) => {
    this.setState({
      taskNew: e.target.value,
    });
  };
  render() {
    //const { taskNew } = this.state;
    return (
      <>
        <div className="main">
          <h1>TO-DO LIST</h1>
          <form action="#">
            <input onChange={this.handleChange} type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
      </>
    );
  }
}

export default Main;
