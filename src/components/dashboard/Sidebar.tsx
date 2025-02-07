import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/authContext";
import { doSignOut } from "../../firebase/auth";
import {
  LayoutGrid,
  Users,
  MessageSquare,
  FolderKanban,
  Ticket,
  UserCircle,
  ClipboardList,
  Building2,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  //   const { userLoggedIn } = useAuth();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { icon: LayoutGrid, text: "Overview", path: "/dashboard" },
    { icon: Users, text: "Meeting", path: "/dashboard/meeting" },
    { icon: MessageSquare, text: "Message", path: "/dashboard/message" },
    { icon: FolderKanban, text: "Project", path: "/dashboard/project" },
    { icon: Ticket, text: "Ticket", path: "/dashboard/ticket" },
    { icon: UserCircle, text: "Employee", path: "/dashboard/employee" },
    { icon: ClipboardList, text: "Attendance", path: "/dashboard/attendance" },
    { icon: Building2, text: "Notice", path: "/dashboard/notice" },
    { icon: Users, text: "HR Tab", path: "/dashboard/hr" },
    { icon: Building2, text: "Organization", path: "/dashboard/organization" },
    { icon: User, text: "Account", path: "/dashboard/account" },
    { icon: Settings, text: "Setting", path: "/dashboard/settings" },
  ];

  return (
    <div className="w-64 h-screen bg-white flex flex-col shadow-md">
      <div className="p-6 flex items-center ">
        <img src="/logo.png" alt="Floopyinn" className="h-8 w-8 mr-2" />
        <span className="text-xl font-semibold text-[#002E1D]">Floopyinn</span>
      </div>
      <nav className="flex-1 px-3 py-2 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200 ease-in-out ${
              isActive(item.path)
                ? "bg-[#001c12] text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <item.icon size={20} />
            <span>{item.text}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4 ">
        <button
          onClick={() => {
            doSignOut().then(() => {
              navigate("/login");
            });
          }}
          className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors duration-200 ease-in-out cursor-pointer"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
