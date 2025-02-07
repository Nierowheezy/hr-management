import React, { useState, FormEvent } from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithGoogle,
  doSignInWithFacebook,
} from "../../../firebase/auth";

const Register: React.FC = () => {
  // const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false); // New state for terms acceptance

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      try {
        await doCreateUserWithEmailAndPassword(email, password);
      } catch (error) {
        setErrorMessage("Failed to register. Please try again.");
        setIsRegistering(false);
      }
    }
  };

  const onGoogleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      try {
        await doSignInWithGoogle();
      } catch (error) {
        setErrorMessage("Google sign-in failed. Please try again.");
        setIsRegistering(false);
      }
    }
  };

  const onFacebookSignIn = async (e: FormEvent) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      try {
        await doSignInWithFacebook();
      } catch (error) {
        setErrorMessage("Facebook sign-in failed. Please try again.");
        setIsRegistering(false);
      }
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to={"/dashboard"} replace={true} />}

      <main className="w-full flex self-center place-content-center place-items-center mt-10">
        <div className="">
          <div className="w-full max-w-[800px] bg-white rounded-xl shadow-lg p-48 space-y-6">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-8 h-8 rounded-lg relative">
                <img src="logo.png" alt="logo" className="w-10 h-10" />
              </div>
            </div>

            {/* Header */}
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-semibold">Create a New Account</h1>
              <p className="text-gray-500 text-sm">
                We'd love to have you on board. Join over 500+ customers around
                the globe and enhance productivity.
              </p>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3">
              <button
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 rounded-3xl hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={onFacebookSignIn}
                disabled={isRegistering}
              >
                <img
                  src="facebook.png"
                  alt="Facebook"
                  className="w-6 h-6 mr-4"
                />
                <span>Continue with Facebook</span>
              </button>

              <button
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 rounded-3xl hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={onGoogleSignIn}
                disabled={isRegistering}
              >
                <img src="google.png" alt="Google" className="w-5 h-5 mr-4" />
                <span>Continue with Google</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="space-y-4">
              <hr className="border-gray-300" />
              {/* <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div> */}

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password<span className="text-red-500">*</span>
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password<span className="text-red-500">*</span>
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Terms and Conditions Checkbox */}
              <div className="text-center">
                <div className="inline-flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={termsAccepted}
                    onChange={() => setTermsAccepted(!termsAccepted)}
                    required
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <Link
                      to="/terms"
                      className="text-indigo-600 hover:underline"
                    >
                      Terms and Conditions
                    </Link>
                  </label>
                </div>
              </div>

              {errorMessage && (
                <span className="text-red-600 font-bold">{errorMessage}</span>
              )}

              <button
                type="submit"
                disabled={isRegistering || !termsAccepted}
                className={`w-full px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-800 hover:shadow-xl transition duration-300 cursor-pointer ${
                  isRegistering ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                {isRegistering ? "Registering..." : "Register"}
              </button>
            </form>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-black hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
