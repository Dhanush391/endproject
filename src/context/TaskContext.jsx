import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const teamMembers = [
    { id: 1, name: "Dhanush" },
    { id: 2, name: "Srinivas" },
    { id: 3, name: "Bilavanth" }
  ];
//Async simulation
  const addTask = (task) => {
    setLoading(true);

    setTimeout(() => {
      setTasks(prev => [...prev, { ...task, id: Date.now() }]);
      setLoading(false);
    }, 800);
  };

  const completeTask = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, status: "Completed" } : t
    ));
  };

  return (
    <TaskContext.Provider value={{
      tasks,
      teamMembers,
      addTask,
      completeTask,
      loading
    }}>
      {children}
    </TaskContext.Provider>
  );
};