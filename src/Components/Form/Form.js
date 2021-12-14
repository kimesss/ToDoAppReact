import React, { useState } from "react";

const Form = (props) => {
  const [text, setText] = useState("");
  const [check, setCheck] = useState(false);
  const [date, setDate] = useState("");
  const [counter, setCounter] = useState(3);

  const changeHandler = (e) => {
    setText(e.target.value);
  };
  const changeCheck = (e) => {
    setCheck(!check);
  };
  const changeDate = (e) => {
    setDate(e.target.value);
  };
  const add = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
    props.add(text, date, check, counter);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="dodaj zadanie"
        value={text}
        onChange={changeHandler}
      />
      <label htmlFor="important">priorytet</label>
      <input
        id="important"
        type="checkbox"
        value={check}
        onChange={changeCheck}
      />
      <br />
      <label htmlFor="date"> Do kiedy zrobić: </label>
      <input id="date" type="date" value={date} onChange={changeDate} />
      <br />
      <button onClick={add}>Dodaj</button>
    </form>
  );
};

export default Form;
