import React from "react";

function Task(props) {
  const { text, date, id, active, finishDate } = props.task;
  const finish = new Date(finishDate).toLocaleString();

  if (active) {
    return (
      <>
        <p>
          <strong>{text}</strong> - do {date}{" "}
          <button onClick={() => props.change(id)}>zadanie zrobione</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </>
    );
  } else
    return (
      <>
        <p>
          <strong>{text}</strong> - do {date} {finish}
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </>
    );
}

export default Task;
