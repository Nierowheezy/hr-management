import React from "react";
import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";

import { doSignOut } from "../../firebase/auth";

const Home: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  return (
    <>
      {/* Nav starts here*/}
      <nav className="flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-12 border-b place-content-center items-center bg-gray-200">
        {userLoggedIn ? (
          <>
            <button
              onClick={() => {
                doSignOut().then(() => {
                  navigate("/login");
                });
              }}
              className="text-sm text-blue-600 underline cursor-pointer"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="text-sm text-blue-600 underline" to={"/login"}>
              Login
            </Link>
            <Link className="text-sm text-blue-600 underline" to={"/register"}>
              Register New Account
            </Link>
          </>
        )}
      </nav>
      {/* Nav ends here */}
      <div className="text-2xl font-bold pt-14">
        Hello{" "}
        {currentUser?.displayName
          ? currentUser.displayName
          : currentUser?.email}
        , you are now logged in.
      </div>
    </>
  );
};

export default Home;
