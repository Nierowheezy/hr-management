"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Todo from "./project/Todo";
import OnGoing from "./project/OnGoing";
import Complete from "./project/Complete";

const Project = () => {
  const [activeTab, setActiveTab] = useState("todo");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "todo":
        return <Todo />;
      case "ongoing":
        return <OnGoing />;
      case "complete":
        return <Complete />;
      default:
        return <Todo />;
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Project</h1>
        <button className="px-4 py-2 bg-[#002E1D] text-white rounded-lg flex items-center gap-2">
          <Plus size={20} />
          Add Tasks
        </button>
      </div>
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("todo")}
          className={`px-6 py-2 rounded-lg transition-colors ${
            activeTab === "todo"
              ? "bg-[#002E1D] text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          To Do
        </button>
        <button
          onClick={() => setActiveTab("ongoing")}
          className={`px-6 py-2 rounded-lg transition-colors ${
            activeTab === "ongoing"
              ? "bg-[#002E1D] text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          On Going
        </button>
        <button
          onClick={() => setActiveTab("complete")}
          className={`px-6 py-2 rounded-lg transition-colors ${
            activeTab === "complete"
              ? "bg-[#002E1D] text-white"
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
