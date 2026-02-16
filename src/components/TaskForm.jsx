import { useState } from "react"
// Componente que representa el formulario
function TaskForm( {addTask} ){
    
    // Estado interno para el input
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e) => {
        // Evitamos que el formulario recargue la página
        e.preventDefault()
        console.log("submit funcionando")
        // Llamamos a la función que viene desde Dashboard
        addTask(inputValue)

        // Limpiamos input
        setInputValue("")
    }
    
    return(
        <form onSubmit={handleSubmit} className="task-form">
            <input 
                type="text"
                placeholder="Nueva tarea..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">
                Agregar
            </button>
        </form>
    )
}

export default TaskForm