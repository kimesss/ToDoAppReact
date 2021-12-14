import React from "react";
import Task from "../Task/Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  const activeTasks = active.map((task) => (
    <Task
      id={task.id}
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  const doneTasks = done.map((task) => (
    <Task
      id={task.id}
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <>
      <div className="activ">
        <h1>zadania do zrobienia</h1>
        {activeTasks}
      </div>

      <hr />

      <div className="done">
        <h2>zadania zrobione ({done.length})</h2>
        {doneTasks}
      </div>
    </>
  );
};

export default TaskList;
