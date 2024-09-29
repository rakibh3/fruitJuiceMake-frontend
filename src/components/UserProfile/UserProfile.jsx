import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useRef } from "react";
import toast from "react-hot-toast";
import { BsCoin } from "react-icons/bs";

const UserProfile = ({ user }) => {
  console.log(user);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const { logout } = useAuth();
  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logout Successful!", { duration: 3000 });
      })
      .catch((error) => {
        toast.error("Error logging out user:", error);
      });
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center gap-2 rounded-2xl border-2 border-rose-500 px-[4px] py-[6px]">
          <BsCoin className="h-5 w-5 text-yellow-500" />
          <span className="font-bold text-gray-800">100</span>
        </div>
        <button
          type="button"
          className="relative h-8 w-8 rounded-full ring-2 ring-primary ring-offset-2"
          aria-expanded={isOpen}
          onClick={handleToggle}
        >
          <img src="" alt="" className="rounded-full object-fill" />
        </button>
      </div>

      <div
        className={`absolute right-0 z-10 mt-2 w-44 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
          isOpen ? "" : "hidden"
        }`}
      >
        {/* User name */}
        <div className="py-1">
          <span className="block px-4 py-2 text-sm text-gray-700">
            <p className="text-base font-medium">Rakib Hasan</p>
            <p>@rakib</p>
          </span>
        </div>

        {/* User Profile */}
        <div className="py-1">
          <Link href="#" className="block px-4 py-2 text-sm text-gray-700">
            Dashboard
          </Link>
          <Link href="#" className="block px-4 py-2 text-sm text-gray-700">
            Profile
          </Link>
          <Link href="#" className="block px-4 py-2 text-sm text-gray-700">
            Setting
          </Link>
        </div>

        {/* Logout Option */}
        <div className="py-1">
          <Link
            type="button"
            onClick={handleLogout}
            className="block px-4 py-2 text-sm text-gray-700"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
