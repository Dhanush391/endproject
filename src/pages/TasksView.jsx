import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

export default function TasksView() {

  const { tasks } = useContext(TaskContext);

  const completed =
    tasks.filter(t => t.status === "Completed").length;

  return (
    <div>
      <h2>Tasks</h2>

      <p>Total: {tasks.length} | Completed: {completed}</p>

      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}