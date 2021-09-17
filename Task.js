import { useState } from 'react'
//import { FaTimes } from 'react-icons/fa'

const Task = ({ task,tasks, onToggle }) => {
    const [editable,setEditable]=useState(false)
    const [val,setValue]=useState(task.text)
    const [textArray, editTask] = useState(true)
    
    const handleChange=(e)=>{
       //set( e.target.value)
       setValue(e.target.value)

    }
    const handleClick=()=>{
        setEditable(true)
    }
    const handleKeyPress=(e)=>{
        if (e.key === 13 || e.key === "Enter") {
        setEditable(false)
        }
    }
    const changeTasksArray = (task)=> {
        editTask((task)=>tasks.text=task)
    }      
    return (
        <div className={`task 
            ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() =>onToggle(task.id)}
            
         >
             {editable?
             (<input value={val} onChange={handleChange} onKeyPress={handleKeyPress}
                />)
            :
            (<div onDoubleClick={handleClick}>{val}</div>)}
            <p>{task.day}</p>
        </div>
    )
}

export default Task

{/* {<FaTimes style={    
                    { color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}
                /> }  */}

