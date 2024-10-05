import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaHistory,
  FaPalette,
  FaCog,
  FaEllipsisH,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    category: "Fertility and Menstrual Health Tracking",
    title: "My menstrual flow not heavy anymore, why?",
    description:
      "Experiencing lighter-than-usual menstrual bleeding can be caused by various factors...",
    image: "",
  },
  {
    id: 2,
    category: "Fertility and Menstrual Health Tracking",
    title: "Fertility rate unstable",
    description:
      "Hormones like estrogen, progesterone, and thyroid hormones play a crucial role in...",
    image: "",
  },
  {
    id: 3,
    category: "Breast Health Monitoring",
    title: "Manual breast examinations",
    description:
      "The frequency of this could be monthly, typically a few days after your period...",
    image: "",
  },
  {
    id: 4,
    category: "Breast Health Monitoring",
    title: "Explore mammogram",
    description:
      "X-ray imaging technique specifically designed to examine breast tissue...",
    image: "",
  },
  {
    id: 5,
    category: "Holistic Wellness Coaching",
    title: "Holistic and wellness coaching",
    description:
      "Personalized approach to health and well-being that considers the whole person...",
    image: "",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const navigateToArticle = (id: number) => {
    navigate(`/article/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-purple-500 text-white p-4 text-center text-xl font-semibold">
        Blogs
      </header>

      <div className="p-4 pb-24">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="mb-6 bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => navigateToArticle(blog.id)}
          >
            <h3 className="text-md font-bold text-purple-600 mb-2">
              {blog.category}
            </h3>
            <div className="flex items-start space-x-4">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-800">
                  {blog.title}
                </h4>
                <p className="text-sm text-gray-600 mt-2">{blog.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="bg-white shadow-md py-4 fixed bottom-0 inset-x-0 flex justify-around border-t border-purple-200">
        <Link
          to="/herwaree/calendar"
          className="flex flex-col items-center text-gray-600 group-hover:text-purple-600"
        >
          <FaHome className="text-2xl" />
          <span className="text-sm">Home</span>
        </Link>
        <Link
          to="/history"
          className="flex flex-col items-center text-gray-600 group-hover:text-purple-600"
        >
          <FaHistory className="text-2xl" />
          <span className="text-sm">History</span>
        </Link>
        <Link
          to="/theme"
          className="flex flex-col items-center  text-gray-600 group-hover:text-purple-600"
        >
          <FaPalette className="text-2xl" />
          <span className="text-sm">Theme</span>
        </Link>
        <Link
          to="/herwaree/settings"
          className="flex flex-col items-center text-gray-600 group-hover:text-purple-600"
        >
          <FaCog className="text-2xl" />
          <span className="text-sm">Settings</span>
        </Link>
        <Link
          to="/herwaree/more"
          className="flex flex-col items-center text-gray-600 group-hover:text-purple-600"
        >
          <FaEllipsisH className="text-2xl" />
          <span className="text-sm">More</span>
        </Link>
      </footer>
    </div>
  );
};

export default Home;
