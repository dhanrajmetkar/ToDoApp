import React, { useState } from "react";
import "./TaskInput.css"
import styles from './TaskInput.css';

function CourseInput(props) {
  const [enterdValue, setEntredValue] = useState("");
  const [isValid, setIsvalid] = useState(true);


  const handleOnChange = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsvalid(true)
    }
    setEntredValue(event.target.value);

  }

  function onSubmitHandler(event) {
    event.preventDefault();
    if (enterdValue.trim().length === 0) {
      setIsvalid(false);
      return;
    } 
  //  console.log(enterdValue.trim().length);
    setEntredValue("");
    props.onAddGoal(enterdValue)

  }
  return (
    <>
      <form className="form-control" onSubmit={onSubmitHandler}>
       
        <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>

      <label>TO Do Task</label>

        <input type="text" onChange={handleOnChange}></input>

        <button type="submit" className="button">
          Add Task
        </button>
        </div> 
      </form>
    </>
  );
}

export default CourseInput;
