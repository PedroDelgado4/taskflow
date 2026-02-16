function Filters({filter, setFilter, activeCount, clearCompleted}){
    return (
        <div className="filters">
            <div className="tasks-counter">{activeCount} tareas pendientes</div>
            <div className="filter-buttons">
                <button className={filter === "all" ? "active-filter" : ""} onClick={() => setFilter("all")}>Todas</button>
                <button className={filter === "active" ? "active-filter" : ""} onClick={() => setFilter("active")}>Activas</button>
                <button className={filter === "completed" ? "active-filter" : ""} onClick={() => setFilter("completed")}>Completadas</button>
                <button className="clear-button" onClick={clearCompleted}>Limpiar completadas</button>
            </div>
            

        </div>
    )
}

export default Filters