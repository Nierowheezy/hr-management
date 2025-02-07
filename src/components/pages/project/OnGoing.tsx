import { MoreHorizontal } from "lucide-react";

interface ProjectData {
  id: string;
  name: string;
  created: string;
  teamLead: string;
  deadline: string;
  description: string;
  members?: number;
  progress?: number;
  status: "todo" | "ongoing" | "complete";
}

interface OnGoingProps {
  onProjectClick?: (project: ProjectData) => void;
}

const TaskCard = ({
  project,
  onClick,
}: {
  project: ProjectData;
  onClick?: (project: ProjectData) => void;
}) => (
  <div
    onClick={() => onClick?.(project)}
    className="bg-white p-6 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow"
  >
    <div className="flex justify-between items-start mb-6">
      <div>
        <h3 className="font-medium text-base mb-1">{project.name}</h3>
        <p className="text-gray-500 text-sm">{project.description}</p>
      </div>
      <button
        onClick={(e) => e.stopPropagation()}
        className="text-gray-400 hover:text-gray-600"
      >
        <MoreHorizontal size={20} />
      </button>
    </div>

    <div className="space-y-4">
      <div className="flex justify-between text-sm">
        <div>
          <p className="text-gray-500 mb-1">Created</p>
          <p className="text-gray-900">{project.created}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-500 mb-1">Team Lead</p>
          <p className="text-indigo-600">{project.teamLead}</p>
        </div>
      </div>

      <div className="flex justify-between text-sm">
        <p className="text-gray-500">Deadline</p>
        <p className="text-red-500">{project.deadline}</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex -space-x-2">
          {[...Array(project.members)].map((_, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white ring-2 ring-white"
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">{project.progress}%</span>
      </div>

      <div className="w-full bg-gray-100 rounded-full h-1.5">
        <div
          className={`bg-indigo-600 h-1.5 rounded-full`}
          style={{ width: `${project.progress}%` }}
        />
      </div>
    </div>
  </div>
);

const OnGoing = ({ onProjectClick }: OnGoingProps) => {
  const ongoingProjects: ProjectData[] = [...Array(8)].map((_, i) => ({
    id: `ongoing-${i}`,
    name: "Web Design",
    created: "July 2,2023",
    teamLead: "Jens Brink",
    deadline: "June 12,2023",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45.",
    members: 3,
    progress: 40,
    status: "ongoing",
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {ongoingProjects.map((project) => (
        <TaskCard key={project.id} project={project} onClick={onProjectClick} />
      ))}
    </div>
  );
};

export default OnGoing;
