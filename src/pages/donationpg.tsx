import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img2 from "../assets/flower2.png"; // Top flower image
import img3 from "../assets/ribbon.png";
import img4 from "../assets/box.png";
import img5 from "../assets/arrow.png";
import cryptoImg from "../assets/btc.png"; // Cryptocurrency icon
import fiatImg from "../assets/moneywing.png"; // Fiat Currency icon
import { FaChevronLeft } from "react-icons/fa";

const DonationPage = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState(""); // Track the selected payment method

  const handleDonateClick = () => {
    if (!selectedMethod) {
      alert("Please select a payment method!");
      return;
    }
    // Navigate to the confirmation page
    navigate("/herwaree/donation-confirmation", { state: { method: selectedMethod } });
  };

  const handleSelectMethod = (method: string) => {
    setSelectedMethod(method);
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

      {/* Content */}
      <div className="max-w-md mx-auto text-center mt-12">
        {/* Title */}
        <h1
          className="text-2xl  font-semibold"
          style={{
            color: "rgba(179, 95, 189, 1)",
          }}
        >
          Donation details
        </h1>

        {/* Info Card */}
        <div
          className="mt-4 p-4 rounded-lg shadow-md"
          style={{
            background: "rgba(179, 95, 189, 0.21)", // Tip Card background color
          }}
        >
          <p
            className="text-xl font-semibold"
            style={{
              color: "rgba(179, 95, 189, 1)",
            }}
          >
            We rise by lifting others
          </p>
          <div className="flex justify-center items-center space-x-4 mt-4">
            <div className="flex justify-center items-center space-x-4">
              <img src={img3} alt="Breast Cancer" className="w-20 h-20" />
              <img src={img5} alt="Breast Cancer" className="w-20 h-20" />
              <img src={img4} alt="Heart Donation" className="w-24 h-24" />
            </div>
          </div>
        </div>

        {/* Price Input */}
        <div className="mt-6">
          <label
            htmlFor="price"
            className="block text-lg  font-semibold"
            style={{
              color: "rgba(179, 95, 189, 1)",
            }}
          >
            How much do you want to donate?
          </label>
          <input
            id="price"
            type="number"
            className="mt-2 w-full p-2 border border-gray-300 rounded-full text-center text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ba56e5]"
            placeholder="Enter Price"
          />
        </div>

        {/* Payment Methods */}
        <div className="mt-6 text-left">
          <h2
            className="text-lg  font-semibold mb-2"
            style={{
              color: "rgba(179, 95, 189, 1)",
            }}
          >
            Payment method
          </h2>
          <div className="flex flex-col space-y-4">
            {/* Cryptocurrency Option */}
            <div
              className={`flex items-center p-2 rounded-lg cursor-pointer ${
                selectedMethod === "crypto" ? "bg-purple-200" : ""
              }`}
              onClick={() => handleSelectMethod("crypto")}
            >
              <img src={cryptoImg} alt="Cryptocurrency" className="w-8 h-8" />
              <span className="ml-4 text-gray-700 text-lg">Cryptocurrency</span>
            </div>

            {/* Fiat Currency Option */}
            <div
              className={`flex items-center p-2 rounded-lg cursor-pointer ${
                selectedMethod === "fiat" ? "bg-purple-200" : ""
              }`}
              onClick={() => handleSelectMethod("fiat")}
            >
              <img src={fiatImg} alt="Fiat Currency" className="w-8 h-8" />
              <span className="ml-4 text-gray-700 text-lg">Fiat Currency</span>
            </div>
          </div>
        </div>

        {/* Donate Now Button */}
        <button
          className="mt-6 w-full text-white py-3 rounded-full text-lg shadow-lg"
          style={{
            background: "rgba(179, 95, 189, 1)",
          }}
          onClick={handleDonateClick}
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default DonationPage;
