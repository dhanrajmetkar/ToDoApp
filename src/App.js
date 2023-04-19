import { useState } from "react";
import React from "react";
import "./App.css";

import TaskInput from "./Component/TaskInput/TaskInput"
import TaskList from "./Component/TaskList/TaskList"

function App() {
  const [task, setTask] = useState([
    {
      text: "Have a good Day",
      id: "1",
    },
    {
      text: "Enter your Tasks",
      id: "2",
    },
  ]);
  const addTask=(enterText)=>{
    setTask((prevGoals)=>
    {
      const tasks=[...prevGoals]
      tasks.unshift({text:enterText, id:Math.random().toString()})
      return tasks;
    })

  }
  
  const deleteTask=(id)=>{
    
   setTask(prevGoal=>{
    const updated=prevGoal.filter(goal=>
      goal.id!==id
    )
    return updated;
   })

   
  }

  let content=(
    <p style={{textAlign:"center"}}>
      No tasks found 
    </p>
  )
  
  if(task.length>1)
  {
    content=(
      <TaskList items={task} onDeleteItem={deleteTask}></TaskList>
    )
  };

  return (
    <div className="App">
      <section id="goal-form">
        <TaskInput onAddGoal={addTask} />
      </section>
      <section id="goals">{
        content
      }</section>
    </div>
  );
}

export default App;
