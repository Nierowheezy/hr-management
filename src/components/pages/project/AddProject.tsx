import { ArrowLeft, Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";
import type React from "react";

interface AddProjectProps {
  onBack: () => void;
}

export default function AddProject({ onBack }: AddProjectProps) {
  const [formData, setFormData] = useState({
    taskName: "Design app UI",
    startDate: "10/3/2023",
    endDate: "17/3/2023",
    teamMembers: [
      "Ruben Korsgaard",
      "Zaire Dorwart",
      "Adison George",
      "Tiana Vaccaro",
    ],
    statistic: "Ongoing",
    notes: [
      "Lorem ipsum dolor sit amet consectetur. Sed hendrerit dolor vitae",
      "Lorem ipsum dolor sit amet consectetur. Sed hendrerit dolor vitae felis ultrices venenatis curabitur.",
      "Lorem ipsum dolor sit amet consectetur. Sed hendrerit dolor vitae felis ultrices",
      "Lorem ipsum dolor sit amet consectetur",
    ],
    priority: "High",
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Commodo blandit pharetra vel sed tempor proin.",
    meeting: "12/06/2023, Monday, 09:00 PM",
  });

  const [expandedSections, setExpandedSections] = useState({
    teamMembers: true,
    statistic: true,
    note: true,
    priority: true,
    feedback: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="mr-2" size={20} />
          <span>Back</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-emerald-600">
              Task Name
            </label>
            <input
              type="text"
              value={formData.taskName}
              onChange={(e) =>
                setFormData({ ...formData, taskName: e.target.value })
              }
              className="w-full p-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-blue-600">
              Starting Date
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.startDate}
                onChange={(e) =>
                  setFormData({ ...formData, startDate: e.target.value })
                }
                className="w-full p-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Calendar
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-red-600">
              Ending Date
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.endDate}
                onChange={(e) =>
                  setFormData({ ...formData, endDate: e.target.value })
                }
                className="w-full p-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <Calendar
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-amber-600">
                Statistic
              </label>
              <button
                type="button"
                onClick={() => toggleSection("statistic")}
                className="text-gray-500 hover:text-gray-700"
              >
                <ChevronDown
                  size={20}
                  className={`transform transition-transform duration-200 ${
                    expandedSections.statistic ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            {expandedSections.statistic && (
              <select
                value={formData.statistic}
                onChange={(e) =>
                  setFormData({ ...formData, statistic: e.target.value })
                }
                className="w-full p-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option>Ongoing</option>
                <option>Completed</option>
                <option>On Hold</option>
              </select>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-indigo-600">
                Priority
              </label>
              <button
                type="button"
                onClick={() => toggleSection("priority")}
                className="text-gray-500 hover:text-gray-700"
              >
                <ChevronDown
                  size={20}
                  className={`transform transition-transform duration-200 ${
                    expandedSections.priority ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            {expandedSections.priority && (
              <select
                value={formData.priority}
                onChange={(e) =>
                  setFormData({ ...formData, priority: e.target.value })
                }
                className="w-full p-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-900">
              Team Members
            </label>
            <button
              type="button"
              onClick={() => toggleSection("teamMembers")}
              className="text-gray-500 hover:text-gray-700"
            >
              <ChevronDown
                size={20}
                className={`transform transition-transform duration-200 ${
                  expandedSections.teamMembers ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          {expandedSections.teamMembers && (
            <div className="border border-gray-200 rounded-lg divide-y">
              {formData.teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3"
                >
                  <span className="text-gray-900">{member}</span>
                  <button
                    type="button"
                    className="text-blue-600 text-sm hover:text-blue-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="p-3">
                <button
                  type="button"
                  className="text-blue-600 text-sm hover:text-blue-700"
                >
                  + Add
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-900">
              Note
            </label>
            <button
              type="button"
              onClick={() => toggleSection("note")}
              className="text-gray-500 hover:text-gray-700"
            >
              <ChevronDown
                size={20}
                className={`transform transition-transform duration-200 ${
                  expandedSections.note ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          {expandedSections.note && (
            <div className="border border-gray-200 rounded-lg divide-y">
              {formData.notes.map((note, index) => (
                <div key={index} className="p-3">
                  <p className="text-gray-600">{note}</p>
                </div>
              ))}
              <div className="p-3">
                <button
                  type="button"
                  className="text-blue-600 text-sm hover:text-blue-700"
                >
                  + Add
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-900">
              Feedback
            </label>
            <button
              type="button"
              onClick={() => toggleSection("feedback")}
              className="text-gray-500 hover:text-gray-700"
            >
              <ChevronDown
                size={20}
                className={`transform transition-transform duration-200 ${
                  expandedSections.feedback ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          {expandedSections.feedback && (
            <textarea
              value={formData.feedback}
              onChange={(e) =>
                setFormData({ ...formData, feedback: e.target.value })
              }
              className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
            />
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-900">
            Meeting <span className="text-gray-500">(Optional)</span>
          </label>
          <input
            type="text"
            value={formData.meeting}
            onChange={(e) =>
              setFormData({ ...formData, meeting: e.target.value })
            }
            className="w-full p-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-[#000201] text-white rounded-lg hover:bg-[#002E1D]/90 transition-colors"
        >
          Save
        </button>
      </form>
    </div>
  );
}
