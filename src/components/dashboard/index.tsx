import { Routes, Route } from "react-router-dom";

import Overview from "../pages/Overview";
import Meeting from "../pages/Meeting";
import Message from "../pages/Message";
import Project from "../pages/Project";
import TicketPage from "../pages/Ticket";
import Employee from "../pages/Employee";
import Attendance from "../pages/Attendance";
import Notice from "../pages/Notice";
import HRTab from "../pages/HRTab";
import Organization from "../pages/Organization";
import Account from "../pages/Account";
import SettingsPage from "../pages/Settings";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <Routes>
            <Route index element={<Overview />} />
            <Route path="meeting" element={<Meeting />} />
            <Route path="message" element={<Message />} />
            <Route path="project" element={<Project />} />
            <Route path="ticket" element={<TicketPage />} />
            <Route path="employee" element={<Employee />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="notice" element={<Notice />} />
            <Route path="hr" element={<HRTab />} />
            <Route path="organization" element={<Organization />} />
            <Route path="account" element={<Account />} />
            <Route path="settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
