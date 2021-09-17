import Task from './Task';
const Tasks = ({ tasks, onDelete, onToggle }) => {
    const list = []

  
    return ( 
        <div style ={{width:'25%'}}> 
            
            {tasks.map((task) => (
                <Task key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle} />
            ))}
        </div>
    )
}

export default Tasks


