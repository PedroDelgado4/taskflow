import { useState, useEffect } from "react";

export function useTasks(){
    // Estado principal
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks")
        return savedTasks ? JSON.parse(savedTasks) : []
    })

    // Estado del filtro
    const [filter, setFilter] = useState("all")

    // Persistencia
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    // CRUD
    const addTask = (title) => {
        if (!title.trim()) return
        const newTask = {
            id: Date.now(),
            title,
            completed : false
        }
        setTasks(prev => [...prev, newTask])
    }

    const deleteTask = (id) => {
        setTasks(prev => prev.filter(task => task.id !== id))
    }

    const toggleTask = (id) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? {...task, completed: !task.completed} : task
            )
        )
    }

    const clearCompleted = () => {
        setTasks(prev => prev.filter(task => !task.completed))
    }

    // Derivados
    const filteredTasks = tasks.filter(task => {
        if (filter === "active") return !task.completed
        if (filter === "completed") return task.completed
        return true
    })

    const activeCount = tasks.filter(task => !task.completed).length

    return {
        tasks,
        addTask,
        deleteTask,
        toggleTask,
        clearCompleted,
        filteredTasks,
        filter,
        setFilter,
        activeCount
    }

}