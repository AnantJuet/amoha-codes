import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaMoon, FaSun, FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import LoginSignup from "./LoginSignup";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [userName, setUserName] = useState("");

  const links = [
    { name: "Home", path: "/" },
    { name: "Tutorials", path: "/tutorial" },
    { name: "Practice", path: "/practice" },
    { name: "Courses", path: "/courses" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const checkAuthStatus = () => {
    const token = localStorage.getItem("access_token");
    const user = localStorage.getItem("user");
    if (token && user) {
      setIsLoggedIn(true);
      try {
        const userData = JSON.parse(user);
        setUserName(userData.first_name || userData.email || "User");
      } catch {
        setUserName("User");
      }
    } else {
      setIsLoggedIn(false);
      setUserName("");
    }
  };

  useEffect(() => {
    checkAuthStatus();

    const handleAuthChange = () => {
      checkAuthStatus();
    };

    window.addEventListener("authChanged", handleAuthChange);
    window.addEventListener("storage", handleAuthChange);

    return () => {
      window.removeEventListener("authChanged", handleAuthChange);
      window.removeEventListener("storage", handleAuthChange);
    };
  }, []);

  const handleLogout = () => {
    // Clear all auth-related data from localStorage
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");

    // Reset all auth-related state
    setIsLoggedIn(false);
    setUserName("");
    setShowDropdown(false);

    // Dispatch event to notify other components
    window.dispatchEvent(new Event("authChanged"));

    // Small delay to ensure state is cleared before navigation
    setTimeout(() => {
      navigate("/");
    }, 100);
  };

  const handleLoginSuccess = () => {
    checkAuthStatus();
    setModalOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20 ">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 md:px-20 py-4 sm:py-6 ">
          {/* LEFT CODES */}
          <h1 className="text-xl sm:text-2xl font-bold">
            <a href="/" className="flex items-center space-x-1 hover:opacity-80 transition-opacity">
              <span style={{ color: "#6334B9" }}>Amoha</span>{" "}
              <span className={`${darkMode ? "text-white" : "text-black"}`}>Codes</span>
            </a>
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <ul className="flex flex-wrap gap-4 lg:gap-6 font-inter text-base lg:text-lg">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`cursor-pointer transition-colors duration-300
                    ${darkMode
                        ? "text-white hover:text-[#6334B9]"
                        : "text-gray-900 hover:text-[#6334B9]"
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Right Icons */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {/* Dark Mode */}
            <div
              className={`w-10 h-5 sm:w-12 sm:h-6 rounded-full flex items-center p-1 cursor-pointer transition-all ${darkMode ? "bg-yellow-400" : "bg-[#6334B9] "
                }`}
              onClick={() => setDarkMode(!darkMode)}
            >
              <div
                className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-xs transition-transform ${darkMode
                    ? "translate-x-5 sm:translate-x-6 bg-yellow-400 text-black"
                    : "bg-gray-800  text-white"
                  }`}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </div>
            </div>

            {/* User Icon / Profile Dropdown */}
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#6334B9] text-white hover:bg-[#5028a0] transition-colors"
                >
                  <span className="text-sm font-semibold">{userName.charAt(0).toUpperCase()}</span>
                </button>

                {showDropdown && (
                  <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg py-2 z-50 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-semibold">{userName}</p>
                    </div>
                    <Link
                      to="/profile"
                      onClick={() => setShowDropdown(false)}
                      className={`block px-4 py-2 text-sm hover:bg-gray-100 ${darkMode ? "hover:bg-gray-700" : ""}`}
                    >
                      <FaUser className="inline mr-2" /> Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className={`w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 ${darkMode ? "hover:bg-gray-700" : ""}`}
                    >
                      <FaSignOutAlt className="inline mr-2" /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#6334B9] text-[#6334B9] hover:bg-[#6334B9] hover:text-white transition-colors"
              >
                <FaUser size={16} className="sm:size-[18px]" />
              </button>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={`md:hidden fixed inset-0 flex flex-col items-center justify-center space-y-6 z-50 px-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
            }`}>
            <button
              className="absolute top-6 right-6 text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>
            <ul className="flex flex-col items-center gap-6 text-lg">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`cursor-pointer transition-colors duration-300 ${darkMode
                        ? 'text-white hover:text-[#6334B9]'
                        : 'text-gray-900 hover:text-[#6334B9]'
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Mobile Auth Buttons */}
            <div className="mt-4">
              {isLoggedIn ? (
                <div className="flex flex-col items-center gap-4">
                  <Link
                    to="/profile"
                    onClick={() => setMenuOpen(false)}
                    className="px-6 py-2 bg-[#6334B9] text-white rounded-full"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                    className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setModalOpen(true);
                  }}
                  className="px-6 py-2 bg-[#6334B9] text-white rounded-full"
                >
                  Login / Signup
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      {/* Modal */}
      {modalOpen && (

        <><div className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6">
          <div
            className="relative w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <LoginSignup onClose={() => setModalOpen(false)} onLoginSuccess={handleLoginSuccess} />
          </div>
        </div></>

      )}

      {/* Click outside to close dropdown */}
      {showDropdown && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setShowDropdown(false)}
        />
      )}
    </>
  );
};

export default Navbar;
