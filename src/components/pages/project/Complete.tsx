import { MoreHorizontal } from "lucide-react";

interface ProjectData {
  id: string;
  name: string;
  date: string;
  members?: number;
  progress: number;
  status: "todo" | "ongoing" | "complete";
  colorIndex: number;
}

interface CompleteProps {
  onProjectClick?: (project: ProjectData) => void;
}

const colors = [
  { bar: "bg-indigo-600", text: "text-indigo-600" },
  { bar: "bg-blue-600", text: "text-blue-600" },
  { bar: "bg-red-600", text: "text-red-600" },
  { bar: "bg-teal-600", text: "text-teal-600" },
];

const TaskCard = ({
  project,
  onClick,
}: {
  project: ProjectData;
  onClick?: (project: ProjectData) => void;
}) => {
  const color = colors[project.colorIndex % colors.length];

  return (
    <div
      onClick={() => onClick?.(project)}
      className="bg-white p-6 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="font-medium text-base">{project.name}</h3>
          <p className="text-gray-500 text-sm">{project.date}</p>
        </div>
        <button
          onClick={(e) => e.stopPropagation()}
          className="text-gray-400 hover:text-gray-600"
        >
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="flex items-center justify-between mb-2">
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

      <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
        <div className={`${color.bar} h-1.5 rounded-full w-full`} />
      </div>

      <div className="flex justify-end">
        <span className={`text-sm ${color.text}`}>Complete</span>
      </div>
    </div>
  );
};

const Complete = ({ onProjectClick }: CompleteProps) => {
  const completeProjects: ProjectData[] = [...Array(12)].map((_, i) => ({
    id: `complete-${i}`,
    name: "Web Design",
    date: "July 2,2023",
    members: 3,
    progress: 100,
    status: "complete",
    colorIndex: i,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {completeProjects.map((project) => (
        <TaskCard key={project.id} project={project} onClick={onProjectClick} />
      ))}
    </div>
  );
};

export default Complete;
