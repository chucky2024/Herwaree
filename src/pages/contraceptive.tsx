import React from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../assets/flower.png";
import img2 from "../assets/flower2.png";

const Contraceptives: React.FC = () => {
  return (
    <div className="flex flex-col h-screen relative bg-white overflow-x-hidden pt-12 pb-6">
      <div className="absolute -top-11 -right-10 w-28 h-28">
        <img src={img2} alt="flower" className="object-contain" />
      </div>
      <div className="absolute -top-11 -left-10 w-28 h-28">
        <img src={img1} alt="flower" className="object-contain" />
      </div>

      {/* Back Button */}
      <div className="absolute top-24 left-4 mb-6">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="text-2xl text-purple-400 cursor-pointer"
        />
      </div>

      {/* Main content  */}
      <div className="w-1/2 ml-6 mt-14">
        {" "}
        {/* */}
        {/* On Contraceptives Section */}
        <div className="mt-10">
          {" "}
          <h2 className="text-purple-500 text-lg font-semibold mb-3">
            {" "}
            On Contraceptives
          </h2>
          <div className="flex flex-col space-y-3">
            {" "}
            {[
              "Hormones",
              "Pills",
              "Patches",
              "Implants",
              "Injections",
              "Intrauterine devices",
            ].map((item) => (
              <button
                key={item}
                className="bg-gray-200 text-gray-500 rounded-full py-2 px-4 text-left w-full"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        {/* e Divider Line */}
        <div className="border-t-2 border-purple-500 my-3 w-full"></div>{" "}
        {/* Emergency Contraception Section */}
        <div className="mb-4">
          {" "}
          <h2 className="text-purple-500 text-lg font-semibold mb-3 whitespace-nowrap">
            {" "}
            Emergency Contraception
          </h2>
          <div className="flex flex-col space-y-3">
            {" "}
            {["Pills", "Copper IUC"].map((item) => (
              <button
                key={item}
                className="bg-gray-200 text-gray-500 rounded-full py-2 px-4 text-left w-full"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center px-4 mt-4">
        {" "}
        <button className="bg-gray-200 text-gray-500 rounded-full w-1/2 h-10  mt-12">
          Apply
        </button>
      </div>

      {/* Bottom Right Circle Decoration
      <div className="absolute bottom-0 right-0 mb-6 mr-6">
        <div className="w-16 h-16 bg-purple-300 rounded-full"></div>
      </div> */}
    </div>
  );
};

export default Contraceptives;
