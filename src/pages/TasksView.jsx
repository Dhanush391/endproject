import { useContext, useState, useMemo } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

export default function TasksView() {
  const { tasks } = useContext(TaskContext);

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const matchStatus =
        filter === "All" || task.status === filter;

      const matchSearch =
        task.title.toLowerCase().includes(search.toLowerCase());

      return matchStatus && matchSearch;
    });
  }, [tasks, filter, search]);

  return (
    <div className="container">
      <h2 style={{ color: "white" }}>Tasks</h2>

      {/* Controls */}
      <div className="controls">
        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <p style={{ color: "white", marginTop: "10px" }}>
        Total: {tasks.length}
      </p>

      {/* EMPTY STATE */}
      {filteredTasks.length === 0 ? (
        <p className="empty">No matching tasks found 🚫</p>
      ) : (
        filteredTasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))
      )}
    </div>
  );
}