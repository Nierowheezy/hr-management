"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Todo from "./project/Todo";
import OnGoing from "./project/OnGoing";
import Complete from "./project/Complete";
import ProjectInfo from "./project/ProjectInfo";
import AddProject from "./project/AddProject";

type View = "list" | "info" | "add";

interface ProjectData {
  id: string;
  name: string;
  created?: string;
  teamLead?: string;
  deadline?: string;
  date?: string;
  dueDate?: string;
  description?: string;
  status: "todo" | "ongoing" | "complete";
  progress?: number;
  members?: number;
}

const Project = () => {
  const [activeTab, setActiveTab] = useState("todo");
  const [currentView, setCurrentView] = useState<View>("list");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );

  const handleProjectClick = (project: ProjectData) => {
    setSelectedProject(project);
    setCurrentView("info");
  };

  const handleBack = () => {
    setCurrentView("list");
    setSelectedProject(null);
  };

  const handleAddClick = () => {
    setCurrentView("add");
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "todo":
        return <Todo onProjectClick={handleProjectClick} />;
      case "ongoing":
        return <OnGoing onProjectClick={handleProjectClick} />;
      case "complete":
        return <Complete onProjectClick={handleProjectClick} />;
      default:
        return <Todo onProjectClick={handleProjectClick} />;
    }
  };

  if (currentView === "info" && selectedProject) {
    return <ProjectInfo project={selectedProject} onBack={handleBack} />;
  }

  if (currentView === "add") {
    return <AddProject onBack={handleBack} />;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Project</h1>
        <button
          onClick={handleAddClick}
          className="px-4 py-2 bg-[#000000] text-white rounded-lg flex items-center gap-2 cursor-pointer"
        >
          <Plus size={20} />
          Add Tasks
        </button>
      </div>
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("todo")}
          className={`px-6 py-2 rounded-lg  cursor-pointer transition-colors ${
            activeTab === "todo"
              ? "bg-[#000000] text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          To Do
        </button>
        <button
          onClick={() => setActiveTab("ongoing")}
          className={`px-6 py-2 rounded-lg cursor-pointer transition-colors ${
            activeTab === "ongoing"
              ? "bg-[#000000] text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          On Going
        </button>
        <button
          onClick={() => setActiveTab("complete")}
          className={`px-6 py-2 rounded-lg cursor-pointer transition-colors ${
            activeTab === "complete"
              ? "bg-[#000000] text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Complete
        </button>
      </div>
      {renderActiveTab()}
    </div>
  );
};

export default Project;
