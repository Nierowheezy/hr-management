import { Bell, Moon, Search } from "lucide-react";

const Header = () => {
  return (
    <div>
      <header className="h-16 bg-white  flex items-center justify-between px-6">
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search here"
              className="w-full pl-10 pr-4 py-2  rounded-lg focus:outline-none focus:border-[#002E1D]"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative">
            <Bell size={20} className="text-gray-600 cursor-pointer" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              5
            </span>
          </button>
          <button>
            <Moon size={20} className="text-gray-600 cursor-pointer" />
          </button>
          <div className="flex items-center gap-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Project-To%20Do%201-Fmdoj3wikci7UqtwDloQXd62B2ZUdi.png"
              alt="Profile"
              className="w-8 h-8 rounded-full cursor-pointer"
            />
            <span className="font-medium">Masum Khan</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
