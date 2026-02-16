import TaskItem from "./TaskItem"

// Recibimos tareas (tasks) como props
function TaskList({ tasks, deleteTask, toggleTask }) {
    if (tasks.length === 0) { return <p>No hay tareas todavía.</p> }
    return(
        // Usamos <ul> por que estamos representando una lista real
        // .map() es la forma estándar de React para renderizar listas dinámicas
        <ul className="task-list">
            {tasks.map(task => (
                // Cada elemento necesita una key única
                <TaskItem key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask}/>
            ))}



        </ul>
        
    )
}
export default TaskList