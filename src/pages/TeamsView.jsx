import { useContext, useMemo } from "react";
import { TaskContext } from "../context/TaskContext";
import TeamMemberCard from "../components/TeamMemberCard";

export default function TeamsView() {
  const { teamMembers, tasks } = useContext(TaskContext);

  // SAFETY CHECK
  if (!teamMembers) return <p>Loading...</p>;

  const taskCounts = useMemo(() => {
    const counts = {};
    tasks.forEach(t => {
      counts[t.member] = (counts[t.member] || 0) + 1;
    });
    return counts;
  }, [tasks]);

  return (
    <div className="container">
      <h2 style={{ color: "white" }}>Team Overview</h2>

      <div className="team-grid">
        {teamMembers.map(member => (
          <TeamMemberCard
            key={member.id}
            member={member}
            taskCount={taskCounts[member.name] || 0}
          />
        ))}
      </div>
    </div>
  );
}