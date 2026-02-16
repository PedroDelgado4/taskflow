// Importación de componentes
import Header from "../components/Header"
import TaskForm from "../components/TaskForm"
import TaskList from "../components/TaskList"
import Filters from "../components/Filters"
import { useTasks } from "../hooks/useTasks"

function Dashboard() {

  const {
    addTask,
    deleteTask,
    toggleTask,
    clearCompleted,
    filteredTasks,
    filter,
    setFilter,
    activeCount
  } = useTasks()

  return (
    <div className="dashboard">
      <Header />
      <TaskForm addTask={addTask} />

      <Filters
        filter={filter}
        setFilter={setFilter}
        activeCount={activeCount}
        clearCompleted={clearCompleted}
      />

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </div>
  )
}

export default Dashboard
