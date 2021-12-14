import Form from "./Components/Form/Form";
import TaskList from "./Components/TaskList/TaskList";
import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Posprzątać",
        date: "01.01.2020",
        dataTo: null,
        active: true,
        check: false,
      },
      {
        id: 1,
        text: "Posprzątać",
        date: "01.01.2020",
        dataTo: null,
        active: true,
        check: false,
      },
      {
        id: 2,
        text: "Posprzątać",
        date: "01.01.2020",
        dataTo: null,
        active: true,
        check: false,
      },
    ],
  };

  addTask = (text, date, check, counter) => {
    const taskkk = {
      id: counter,
      text: text,
      date: date,
      check: check,
      dataTo: null,
      active: true,
    };
    this.setState({
      tasks: [...this.state.tasks, taskkk],
    });
    console.log(this.state.tasks);
  };

  deleteTask = (id) => {
    const myElement = this.state.tasks.filter((el) => el.id !== id);
    this.setState({
      tasks: myElement,
    });
  };
  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((el) => {
      if (el.id === id) {
        el.active = !el.active;
        el.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  render() {
    return (
      <div>
        <Form add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
