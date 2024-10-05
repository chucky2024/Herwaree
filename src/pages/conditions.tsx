import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import img2 from "../assets/flower2.png";

const Conditions: React.FC = () => {
  const [supplementQuestionOption, setSupplementQuestionOption] = useState<
    string | null
  >(null);
  const [fedQuestionOption, setFedQuestionOption] = useState<string | null>(
    null
  );
  const navigate = useNavigate(); // Initialize navigate function

  const supplementQuestionOptions = ["Yes", "No", "Not sure"];
  const fedQuestionOptions = ["Yes", "No", "Presently Pregnant/breastfeeding"];

  // Handle Confirm button click
  const handleConfirm = () => {
    if (supplementQuestionOption || fedQuestionOption) {
      navigate("/herwaree/check");
    }
  };

  const handleNotSure = () => {
    navigate("/herwaree/check");
  };

  return (
    <div className="flex flex-col justify-between min-h-screen px-4 py-6 bg-white relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-28 h-28">
        <img src={img2} alt="flower" className="object-contain" />
      </div>

      <div className="flex items-center mb-4">
        <button className="text-purple-500">
          <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
        </button>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-lg text-purple-600 font-semibold mb-4">
            Do you have any chronic health conditions (e.g diabetes,
            hypertension)?
          </p>
          <div className="flex flex-col space-y-4">
            {supplementQuestionOptions.map((option, idx) => (
              <button
                key={idx}
                onClick={() => setSupplementQuestionOption(option)}
                className={`inline-flex items-center justify-start py-1 px-3 rounded-full text-sm font-medium border max-w-max ${
                  supplementQuestionOption === option
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
            Do you have family history of breast cancer or other breast-related
            conditions?
          </p>
          <div className="flex flex-col space-y-4">
            {fedQuestionOptions.map((option, idx) => (
              <button
                key={idx}
                onClick={() => setFedQuestionOption(option)}
                className={`inline-flex items-center justify-start py-1 px-3 rounded-full text-sm font-medium border max-w-max ${
                  fedQuestionOption === option
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
      <div className="flex justify-between items-center mt-16">
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

export default Conditions;
