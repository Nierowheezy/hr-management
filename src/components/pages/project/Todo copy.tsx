import { Plus, MoreVertical, Clock } from "lucide-react";

const TaskCard = ({
  name,
  dueDate,
  members = 3,
}: {
  name: string;
  dueDate: string;
  members?: number;
}) => (
  <div className="bg-white p-4 rounded-lg  mb-4">
    <div className="flex justify-between items-start mb-3">
      <h3 className="font-medium">{name}</h3>
      <button>
        <MoreVertical size={16} className="text-gray-400" />
      </button>
    </div>
    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
      <Clock size={14} />
      <span>{dueDate}</span>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex -space-x-2">
        {[...Array(members)].map((_, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full bg-gray-200  border-white"
          />
        ))}
      </div>
      <div className="w-8 h-8 rounded-full border-2  flex items-center justify-center">
        <Plus size={16} className="text-gray-400" />
      </div>
    </div>
  </div>
);

const Todo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[...Array(8)].map((_, i) => (
        <TaskCard
          key={i}
          name={`Todo Task ${i + 1}`}
          dueDate="2 Weeks Left, 7pm"
        />
      ))}
    </div>
  );
};

export default Todo;
