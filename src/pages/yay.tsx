import { useNavigate } from "react-router-dom";
import img3 from "../assets/yay.png";
import img2 from "../assets/flower2.png";
import { AiOutlineEllipsis } from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Yay: React.FC = () => {
  const location = useLocation();
  const { name } = location.state || {};
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/herwaree/BirthdayPicker");
  };

  return (
    <div className="relative flex flex-col items-center justify-between h-screen p-6 bg-white overflow-x-hidden">
      {/* Chevron Left with Gradient */}
      <div className="absolute top-4 left-4">
        <div
          className="p-2 rounded-full"
          style={{
            background: "linear-gradient(to right, #b976c5, #b390c9)",
          }}
        >
          <FaChevronLeft className="text-2xl text-white cursor-pointer" />
        </div>
      </div>

      {/* Hello Name Text with Gradient (excluding emoji) */}
      <div className="text-center mt-16 px-4">
        <h1 className="text-4xl font-bold mb-2">
          <span
            className="text-transparent"
            style={{
              backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Hello {name}
          </span>{" "}
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </h1>
        <p className="text-xl text-gray-600">
          Warm Welcome, I would love to know you better, let's go!
        </p>
      </div>

      {/* Image */}
      <div className="flex flex-col items-center mt-6 mb-6">
        <img
          src={img3}
          alt="YAY"
          className="w-3/4 max-w-md h-auto object-contain"
        />
      </div>

      {/* Continue Button with Gradient */}
      <div className="flex flex-col items-center mb-6">
        <AiOutlineEllipsis className="text-5xl text-gray-400 mb-4" />
        <button
          className="px-6 py-3 rounded-lg w-full max-w-md text-white"
          style={{
            backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
          }}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>

      {/* Flower image */}
      <div className="absolute -top-10 -right-10 w-28 h-28">
        <img src={img2} alt="flower" className="object-contain" />
      </div>

      <div className="absolute -right-12 top-1/2 w-20 h-20 bg-purple-300 rounded-full"></div>
    </div>
  );
};

export default Yay;
