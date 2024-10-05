import {
  FaHome,
  FaHistory,
  FaCog,
  FaPaintBrush,
  FaEllipsisH,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-white fixed bottom-0 w-full border-t border-purple-200 shadow-lg">
      <ul className="flex justify-around py-1.5">
        <li className="group">
          <Link
            to="/herwaree/front"
            className="flex flex-col items-center text-gray-600 group-hover:text-purple-600"
          >
            <FaHome className="text-2xl" />
            <span className="text-xs mt-1">Home</span>
          </Link>
        </li>
        <li className="group">
          <Link
            to="/herwaree/history"
            className="flex flex-col items-center text-gray-600 group-hover:text-purple-600"
          >
            <FaHistory className="text-2xl" />
            <span className="text-xs mt-1">History</span>
          </Link>
        </li>
        <li className="group">
          <Link
            to="/herwaree/settingpage"
            className="flex flex-col items-center text-gray-600 group-hover:text-purple-600"
          >
            <FaCog className="text-2xl" />
            <span className="text-xs mt-1">Setting</span>
          </Link>
        </li>
        <li className="group">
          <Link
            to="/herwaree/theme"
            className="flex flex-col items-center text-gray-600 group-hover:text-purple-600"
          >
            <FaPaintBrush className="text-2xl" />
            <span className="text-xs mt-1">Theme</span>
          </Link>
        </li>
        <li className="group">
          <Link
            to="/herwaree/more"
            className="flex flex-col items-center text-gray-600 group-hover:text-purple-600"
          >
            <FaEllipsisH className="text-2xl" />
            <span className="text-xs mt-1">More</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
