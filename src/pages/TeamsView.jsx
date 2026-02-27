import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TeamMemberCard from "../components/TeamMemberCard";

export default function TeamsView() {

  const { teamMembers, tasks } =
    useContext(TaskContext);

  return (
    <div>
      <h2>Team Overview</h2>

      {teamMembers.map(member => {const count=tasks.filter(t=>t.member===member.name).length;
        return (
          <TeamMemberCard
            key={member.id}
            member={member}
            taskCount={count}
          />
        );
      })}
    </div>
  );
}