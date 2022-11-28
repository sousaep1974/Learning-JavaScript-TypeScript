import React, { Component } from 'react';

//Form
import { FaEdit, FaWindowClose } from 'react-icons/fa';

//Tasks
import { FaPlus } from 'react-icons/fa';

import './Main.css';

class Main extends Component {
  state = {
    taskNew: '',
    tasks: [],
    index: -1,
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!tasks) return;
    this.setState({ tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;

    if (tasks === prevState.tasks) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, index } = this.state;
    let { taskNew } = this.state;
    taskNew = taskNew.trim();

    if (tasks.indexOf(taskNew) !== -1) return;

    const tasksNews = [...tasks];

    if (index == -1) {
      this.setState({
        tasks: [...tasksNews, taskNew],
        taskNew: '',
      });
    } else {
      tasksNews[index] = taskNew;

      this.setState({
        tasks: [...tasksNews],
        index: -1,
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      taskNew: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    const { tasks } = this.state;

    this.setState({
      index,
      taskNew: tasks[index],
    });
  };

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const tasksNews = [...tasks];
    tasksNews.splice(index, 1);

    this.setState({ tasks: [...tasksNews] });
  };

  render() {
    const { taskNew, tasks } = this.state;
    return (
      <>
        <div className="main">
          <h1>TO-DO LIST</h1>
          <form onSubmit={this.handleSubmit} action="#" className="form">
            <input onChange={this.handleChange} type="text" value={taskNew} />
            <button type="submit">
              <FaPlus />
            </button>
          </form>

          <ul className="tasks">
            {tasks.map((task, index) => (
              <li key={task}>
                {task}
                <span>
                  <FaEdit
                    onClick={(e) => this.handleEdit(e, index)}
                    className="edit"
                  />
                  <FaWindowClose
                    onClick={(e) => this.handleDelete(e, index)}
                    className="delete"
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Main;
