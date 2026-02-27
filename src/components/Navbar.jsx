import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2>Task Manager</h2>
      <div>
        <Link to="/">Tasks</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/assign">Assign</Link>
      </div>
    </nav>
  );
}