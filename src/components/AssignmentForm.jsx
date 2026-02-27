import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function AssignmentForm() {

  const { teamMembers, addTask, loading } =
    useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [member, setMember] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !member) return;

    addTask({
      title,
      member,
      status: "Pending"
    });

    setTitle("");
    setMember("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
      />

      <select
        value={member}
        onChange={(e) => setMember(e.target.value)}
      >
        <option value="">Select Member</option>
        {teamMembers.map(m => (
          <option key={m.id}>{m.name}</option>
        ))}
      </select>

      <button type="submit">
        {loading ? "Assigning..." : "Assign Task"}
      </button>
    </form>
  );
}