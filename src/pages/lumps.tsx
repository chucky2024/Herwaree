import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import img2 from "../assets/flower2.png";

const Lump: React.FC = () => {
  const [firstQuestionOption, setFirstQuestionOption] = useState<string | null>(
    null
  );
  const [secondQuestionOption, setSecondQuestionOption] = useState<
    string | null
  >(null);
  const navigate = useNavigate();

  const firstQuestionOptions = ["Yes", "No", "Not sure"];
  const secondQuestionOptions = ["Yes", "No", "I'd like to learn more"];

  const handleConfirm = () => {
    if (firstQuestionOption || secondQuestionOption) {
      navigate("/herwaree/alcohol");
    }
  };

  const handleNotSure = () => {
    navigate("/herwaree/alcohol");
  };

  return (
    <div className="flex flex-col justify-between min-h-screen px-4 py-6 bg-white relative overflow-hidden">
      <div className="absolute -top-11 -right-10 w-28 h-28">
        <img src={img2} alt="flower" className="object-contain" />
      </div>

      <div className="flex items-center mb-4">
        <button className="text-purple-600">
          <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
        </button>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* First Question */}
        <div>
          <p className="text-lg text-purple-600 font-semibold mb-4">
            Have you noticed any lumps or changes in your breasts recently?
          </p>
          <div className="flex flex-col space-y-4">
            {firstQuestionOptions.map((option, idx) => (
              <button
                key={idx}
                onClick={() => setFirstQuestionOption(option)}
                className={`inline-flex items-center justify-start py-1 px-3 rounded-full text-sm font-medium border max-w-max ${
                  firstQuestionOption === option
                    ? "bg-purple-100 border-purple-500 text-purple-600"
                    : "bg-gray-100 border-gray-300 text-gray-600"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Second Question */}
        <div>
          <p className="text-lg text-purple-600 font-semibold mb-4">
            Are there any current concerns about your breast health?
          </p>
          <div className="flex flex-col space-y-4">
            {secondQuestionOptions.map((option, idx) => (
              <button
                key={idx}
                onClick={() => setSecondQuestionOption(option)}
                className={`inline-flex items-center justify-start py-1 px-3 rounded-full text-sm font-medium border max-w-max ${
                  secondQuestionOption === option
                    ? "bg-purple-100 border-purple-500 text-purple-600"
                    : "bg-gray-100 border-gray-300 text-gray-600"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center items-center space-x-4 mt-20">
        <span className="h-1 w-6 bg-gray-300 rounded-full"></span>
        <span className="h-1 w-6 bg-gray-300 rounded-full"></span>
        <span className="h-1 w-6 bg-purple-500 rounded-full"></span>
        <span className="h-1 w-6 bg-gray-300 rounded-full"></span>
        <span className="h-1 w-6 bg-gray-300 rounded-full"></span>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handleNotSure}
          className="text-gray-500 bg-gray-200 px-6 py-3 rounded-full"
        >
          Not Sure
        </button>
        <button
          onClick={handleConfirm}
          className="bg-purple-500 text-white px-6 py-3 rounded-full"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Lump;
