import { CircleCheck, MoreVertical, Clock, CirclePlus } from "lucide-react";

interface ProjectData {
  id: string;
  name: string;
  dueDate: string;
  members?: number;
  status: "todo" | "ongoing" | "complete";
}

interface TodoProps {
  onProjectClick: (project: ProjectData) => void;
}

const TaskCard = ({
  project,
  onClick,
}: {
  project: ProjectData;
  onClick: (project: ProjectData) => void;
}) => (
  <div
    onClick={() => onClick(project)}
    className="bg-white p-4 rounded-lg mb-4 cursor-pointer hover:shadow-md transition-shadow"
  >
    <div className="flex justify-between items-start mb-3">
      <h3 className="font-medium">{project.name}</h3>
      <button onClick={(e) => e.stopPropagation()}>
        <MoreVertical size={16} className="text-gray-400" />
      </button>
    </div>
    <div className="flex items-center gap-2 text-sm text-green-500 mb-3">
      <Clock size={14} />
      <span>{project.dueDate}</span>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex -space-x-2">
        {[...Array(project.members)].map((_, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white ring-2 ring-white"
          />
        ))}
        <div className="w-8 h-8 ml-2 rounded-full flex items-center justify-center">
          <CirclePlus size={28} className="text-gray-400" />
        </div>
      </div>
      <div className="w-8 h-8 rounded-full flex items-center justify-center">
        <CircleCheck size={28} className="text-gray-400" />
      </div>
    </div>
  </div>
);

const Todo = ({ onProjectClick }: TodoProps) => {
  const todoProjects: ProjectData[] = [...Array(8)].map((_, i) => ({
    id: `todo-${i}`,
    name: `Todo Task ${i + 1}`,
    dueDate: "2 Weeks Left, 7pm",
    members: 3,
    status: "todo",
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {todoProjects.map((project) => (
        <TaskCard key={project.id} project={project} onClick={onProjectClick} />
      ))}
    </div>
  );
};

export default Todo;
