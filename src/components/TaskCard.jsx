import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {

  const { completeTask } = useContext(TaskContext);

  return (
    <div className="card">
      <h3>{task.title}</h3>
      <p>Assigned to: {task.member}</p>
      <p>Status: {task.status}</p>

      {task.status !== "Completed" && (
        <button onClick={() => completeTask(task.id)}>
          Mark Complete
        </button>
      )}
    </div>
  );
}

export default TaskCard;