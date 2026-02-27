export default function TeamMemberCard({ member, taskCount }) {
  return (
    <div className="card">
      <h3>{member.name}</h3>
      <p>Tasks Assigned: {taskCount}</p>
    </div>
  );
}