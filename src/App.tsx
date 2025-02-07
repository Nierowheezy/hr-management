import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Dashboard from "./components/dashboard";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <AuthProvider>
      <div className="w-full min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
