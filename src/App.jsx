import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TasksView from "./pages/TasksView";
import TeamsView from "./pages/TeamsView";
import AssignTask from "./pages/AssignTask";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<TasksView />} />
        <Route path="/teams" element={<TeamsView />} />
        <Route path="/assign" element={<AssignTask />} />
      </Routes>
    </>
  );
}