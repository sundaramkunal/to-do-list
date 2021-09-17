import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTasks from './components/AddTasks';


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'task 1',
      day: 'feb 3',
      reminder: true,
    },
    {
      id: 2,
      text: 'task 2',
      day: 'feb 4',
      reminder: true,
    },
    {
      id: 3,
      text: 'task 3',
      day: 'feb 5',
      reminder: true,
    },
  ])

  const editTask=() =>{console.log('editTask') } 





  //add task
  const addTask=(task) =>{
    const id = Math.floor(Math.random()* 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks,newTask])
  }



  // delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id == id ? {
          ...task, reminder:
            !task.reminder
        } : task)
    )
  }
  console.log(tasks)

  return (
    <div className="App" style={{marginLeft:'50px'}}>
      <Header title={'title'} /> <AddTasks onAdd ={addTask} />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}

export default App;
