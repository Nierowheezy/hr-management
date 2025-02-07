"use client";

import { ArrowLeft, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

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

interface ProjectInfoProps {
  project: ProjectData;
  onBack: () => void;
}

const teamMembers = [
  {
    name: "Ruben Korsgaard",
    role: "Head of Design",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Ruben Korsgaard",
    role: "Designer",
    image:
      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Ruben Korsgaard",
    role: "Designer",
    image:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Ruben Korsgaard",
    role: "Developer",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Ruben Korsgaard",
    role: "Developer",
    image:
      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function ProjectInfo({ project, onBack }: ProjectInfoProps) {
  const [expandedSections, setExpandedSections] = useState({
    teamMembers: true,
    note: true,
    feedback: true,
    meeting: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="mr-2" size={20} />
          <span>Back</span>
        </button>
        <button className="px-4 py-2 bg-[#002E1D] text-white rounded-lg">
          Edit
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <div className="bg-indigo-50 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-indigo-600">T</span>
            </div>
            <div>
              <p className="text-sm text-indigo-600 font-medium">Task Name</p>
              <p className="text-gray-900">{project.name}</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600">S</span>
            </div>
            <div>
              <p className="text-sm text-blue-600 font-medium">Starting Date</p>
              <p className="text-gray-900">{project.created || "10/3/2023"}</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <span className="text-red-600">E</span>
            </div>
            <div>
              <p className="text-sm text-red-600 font-medium">Ending Date</p>
              <p className="text-gray-900">{project.deadline || "10/3/2023"}</p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <span className="text-amber-600">S</span>
            </div>
            <div>
              <p className="text-sm text-amber-600 font-medium">Statistic</p>
              <p className="text-gray-900 capitalize">{project.status}</p>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <span className="text-emerald-600">P</span>
            </div>
            <div>
              <p className="text-sm text-emerald-600 font-medium">Priority</p>
              <p className="text-gray-900">High</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm">
          <button
            onClick={() => toggleSection("teamMembers")}
            className="w-full px-6 py-4 text-left font-medium flex items-center justify-between"
          >
            <span>Team Members</span>
            <span
              className={`transform transition-transform ${
                expandedSections.teamMembers ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          {expandedSections.teamMembers && (
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {teamMembers.map((member, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-4 text-center shadow-sm"
                >
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-16 h-16 mx-auto mb-3 rounded-full object-cover"
                  />
                  <h4 className="font-medium mb-1 text-gray-900">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-500 mb-3">{member.role}</p>
                  <div className="flex justify-center gap-2">
                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                      <Phone size={16} />
                    </button>
                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                      <MessageCircle size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => toggleSection("note")}
            className="w-full px-6 py-4 text-left font-medium flex items-center justify-between"
          >
            <span>Note</span>
            <span
              className={`transform transition-transform ${
                expandedSections.note ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          {expandedSections.note && (
            <div className="px-6 py-4">
              <ul className="space-y-4 list-disc list-inside text-gray-600">
                <li>
                  Lorem ipsum dolor sit amet consectetur. Sed hendrerit dolor
                  vitae
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur. Sed hendrerit dolor
                  vitae felis ultrices venenatis curabitur.
                </li>
                <li>Lorem ipsum dolor sit amet consectetur. Sed hendrer</li>
                <li>
                  Lorem ipsum dolor sit amet consectetur. Sed hendrerit dolor
                  vitae felis ultrices
                </li>
              </ul>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => toggleSection("feedback")}
            className="w-full px-6 py-4 text-left font-medium flex items-center justify-between"
          >
            <span>Feedback</span>
            <span
              className={`transform transition-transform ${
                expandedSections.feedback ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          {expandedSections.feedback && (
            <div className="px-6 py-4">
              <ul className="space-y-4 list-disc list-inside text-gray-600">
                <li>
                  Lorem ipsum dolor sit amet consectetur. Commodo blandit
                  pharetra vel sed tempor proin.
                </li>
                <li>Lorem ipsum dolor sit amet consectetur. Commodo</li>
                <li>
                  Lorem ipsum dolor sit amet consectetur. Commodo blandit
                  pharetra vel sed
                </li>
                <li>Lorem ipsum dolor sit amet consectet</li>
              </ul>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => toggleSection("meeting")}
            className="w-full px-6 py-4 text-left font-medium flex items-center justify-between"
          >
            <span>Meeting</span>
            <span
              className={`transform transition-transform ${
                expandedSections.meeting ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          {expandedSections.meeting && (
            <div className="px-6 py-4">
              <p className="text-gray-600">12/09/2022, Monday, 09:00 PM</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
