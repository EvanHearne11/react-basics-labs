import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { id: 3, title: "Tidy up", deadline: "Today" }
    ]
  });


  return (
    <div className="container">
      <h1>Tasky</h1>
     {tasksState.tasks.map((task) => (
      <Task 
    title ={task.title}
    description={task.description}
    deadline={task.deadline}
    key={task.id}
      />

      ))}
    </div>
  );

}

export default App
