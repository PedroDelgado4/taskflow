// Tarea individual. Este componente no necesita saber nada del array completo.

function TaskItem({ task, deleteTask, toggleTask }){
    return (
        // Representamos la tarea
        <li className="task-item">
            <span onClick={() => toggleTask(task.id)}
                className={`task-text ${task.completed ? "completed" : ""}`}>
                {task.title}
            </span>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
        </li>
    )
}
export default TaskItem