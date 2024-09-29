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
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <img src="" alt="" className="rounded-full object-fill" />
        </button>
      </div>

      <div
        className={`absolute right-0 z-10 mt-2 w-44 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
          isOpen ? "" : "hidden"
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="py-1" role="none">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            id="menu-item-4"
          >
            Share
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            id="menu-item-5"
          >
            Add to favorites
          </a>
        </div>
        <div className="py-1" role="none">
          <Link
            type="button"
            onClick={handleLogout}
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
