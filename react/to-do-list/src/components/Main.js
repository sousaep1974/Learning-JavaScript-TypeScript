import React, { Component } from 'react';
import Form from './Form';
import Tasks from './Tasks';
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
          <Form
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            taskNew={taskNew}
          />
          <Tasks
            tasks={tasks}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
          />
        </div>
      </>
    );
  }
}

export default Main;
