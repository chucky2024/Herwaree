import { useLocation } from "react-router-dom";
import img2 from "../assets/flower2.png";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import img3 from "../assets/ribbon.png";
import img4 from "../assets/box.png";
import img5 from "../assets/arrow.png";
import bulletImg from "../assets/bullet.png";

const DonationDetails = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name") || "Guest";
  const navigate = useNavigate();
  const handleDonateNowClick = () => {
    navigate("/herwaree/donationpg");
  };

  return (
    <div className="p-4 bg-[#f8f2ff] min-h-screen relative overflow-x-hidden">
      {/* Top Flower */}
      <div className="absolute -top-8 -right-10 w-28 h-28">
        <img src={img2} alt="flower" className="object-contain" />
      </div>

      {/* Back Button */}
      <div className="absolute top-4 left-4">
        <div
          className="p-2 rounded-full"
          style={{
            background: "linear-gradient(to right, #b976c5, #b390c9)",
          }}
          onClick={() => navigate(-1)} // Navigate back
        >
          <FaChevronLeft className="text-2xl text-white cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="flex justify-center mt-12 mb-8">
        {" "}
        {/* Increased top space */}
        <h1
          className="text-2xl  font-semibold text-center"
          style={{
            color: "rgba(179, 95, 189, 1)",
          }}
        >
          Donation details
        </h1>
      </div>

      {/* Content Container */}
      <div className="max-w-md mx-auto">
        {/* Greeting (Aligned to left) */}
        <p className="text-gray-700 text-lg mb-4 text-left">
          Hello, <span className="font-bold text-[#ba56e5]">{name}</span>
        </p>

        {/* Info Card */}
        <div
          className="p-6 rounded-lg shadow-md mb-6"
          style={{
            background: "rgba(179, 95, 189, 0.21)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p
            className="text-xl font-semibold mb-4 text-center" // Centered text
            style={{
              color: "rgba(179, 95, 189, 1)",
            }}
          >
            We rise by lifting others
          </p>

          <div className="flex justify-center items-center space-x-4">
            <img src={img3} alt="Breast Cancer" className="w-20 h-20" />
            <img src={img5} alt="Breast Cancer" className="w-20 h-20" />
            <img src={img4} alt="Heart Donation" className="w-24 h-24" />
          </div>
        </div>

        {/* Donation Info */}
        <h2
          className="text-lg font-semibold mb-2"
          style={{
            color: "rgba(179, 95, 189, 1)",
          }}
        >
          Donate for the treatment of Breast cancer
        </h2>
        <p className="text-gray-600 mb-6">
          Financial contributions help provide critical care and support
          services for patients who may not be able to afford treatment or
          specialized care.
        </p>

        {/* Causes Section */}
        <div className="text-left mb-6">
          <h3
            className="text-lg font-semibold  mb-2"
            style={{
              color: "rgba(179, 95, 189, 1)",
            }}
          >
            Causes
          </h3>
          <ul className="list-none text-gray-600 space-y-2">
            <li className="flex items-center">
              <img
                src={bulletImg}
                alt="Bullet Point"
                className="w-4 h-4 mr-2"
              />
              Research and Development (R&D)
            </li>
            <li className="flex items-center">
              <img
                src={bulletImg}
                alt="Bullet Point"
                className="w-4 h-4 mr-2"
              />
              Patient Support and Services
            </li>
            <li className="flex items-center">
              <img
                src={bulletImg}
                alt="Bullet Point"
                className="w-4 h-4 mr-2"
              />
              <span className="font-bold">Public Awareness and Education</span>
            </li>
            <li className="flex items-center">
              <img
                src={bulletImg}
                alt="Bullet Point"
                className="w-4 h-4 mr-2"
              />
              Administrative and Operational Costs
            </li>
            <li className="flex items-center">
              <img
                src={bulletImg}
                alt="Bullet Point"
                className="w-4 h-4 mr-2"
              />
              Advocacy and Policy Work
            </li>
            <li className="flex items-center">
              <img
                src={bulletImg}
                alt="Bullet Point"
                className="w-4 h-4 mr-2"
              />
              Screening and Early Detection Programs
            </li>
          </ul>
        </div>

        {/* Donate Now Button */}
        <button
          className="text-white py-3 px-8 rounded-full text-lg shadow-lg w-full"
          style={{
            background: "rgba(179, 95, 189, 1)",
          }}
          onClick={handleDonateNowClick}
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default DonationDetails;
