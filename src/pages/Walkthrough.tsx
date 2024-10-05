import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Slide {
  type: string;
  content: string;
  image?: string;
  options?: string[];
}

const Walkthrough: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const navigate = useNavigate();

  const slides: Slide[] = [
    { type: "text", content: "Bestie, welcome to your screening quiz!" },
    {
      type: "text",
      content: "Screening is a lovely way to care for your body.",
    },
    {
      type: "text",
      content:
        "Find out more from your quiz results, chat with your doctor, and make plans together!",
    },
    {
      type: "text",
      content:
        "Gender: Being a woman means we face unique health risks. Risk increases as we age.",
    },
    {
      type: "question",
      content: "Have you ever had breast cancer?",
      options: ["Yes", "No"],
    },
    { type: "text", content: "Lifestyle" },
    {
      type: "question",
      content: "Do you consume alcohol?",
      options: ["Yes", "No"],
    },
    {
      type: "text",
      content:
        "Alcohol can increase estrogen levels, so it's good to know where we stand!",
    },
    { type: "question", content: "Are you obese?", options: ["Yes", "No"] },
    {
      type: "text",
      content: "Being obese after menopause can impact estrogen levels too.",
    },
    { type: "question", content: "Do you smoke?", options: ["Yes", "No"] },
    {
      type: "text",
      content:
        "Smoking may increase risk, but we can always work together on wellness!",
    },
    { type: "text", content: "You're doing great, love! Keep going!" },
    { type: "text", content: "Genetics" },
    {
      type: "question",
      content:
        "Has anyone in your family had genetic testing for BRCA mutations?",
      options: ["Yes", "No"],
    },
    {
      type: "text",
      content:
        "BRCA1/2 can increase the chance of breast cancer, but knowledge is power!",
    },
    {
      type: "question",
      content: "Are you aware of any hereditary cancers in your family?",
      options: ["Yes", "No"],
    },
    { type: "text", content: "Hormonal and Reproductive Factors" },
    {
      type: "question",
      content: "At what age did you start menstruation?",
      options: ["Before age 12", "Between age 12 and 14", "After age 14"],
    },
    {
      type: "text",
      content:
        "The earlier you started, the longer your exposure to estrogen. Knowing is caring!",
    },
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setSelectedOption(null);
      toast.info(`Slide ${currentSlide + 1} completed!`, { autoClose: 1000 });
    } else {
      toast.success("You've completed the quiz!", { autoClose: 2000 });
      setTimeout(() => {
        navigate("/herwaree/screening");
      }, 2000);
    }
  };

  const handleBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setSelectedOption(null);
      toast.info(`Back to slide ${currentSlide - 1}`, { autoClose: 1000 });
    }
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    toast.success(`Selected: ${option}`, { autoClose: 1000 });
  };

  const renderSlideContent = () => {
    const slide = slides[currentSlide];
    switch (slide.type) {
      case "text":
        return (
          <p className="text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text font-medium text-2xl">
            {slide.content}
          </p>
        );
      case "image":
        return (
          <img
            src={slide.content}
            alt="Slide"
            className="w-full h-full object-cover rounded-lg"
          />
        );
      case "textImage":
        return (
          <div className="text-center">
            <p className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text font-medium text-2xl mb-4">
              {slide.content}
            </p>
            <img
              src={slide.image}
              alt="Slide"
              className="w-3/4 h-auto mx-auto rounded-lg"
            />
          </div>
        );
      case "video":
        return (
          <video
            src={slide.content}
            controls
            className="w-full h-full rounded-lg"
          />
        );
      case "question":
        return (
          <div className="text-center">
            <p className="text-xl mb-4">{slide.content}</p>
            <div className="flex justify-center space-x-4">
              {slide.options?.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionSelect(option)}
                  className={`px-4 py-2 rounded-lg ${
                    selectedOption === option
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "bg-gradient-to-r from-pink-100 to-purple-100 text-gray-700"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleClose = () => {
    navigate("/herwaree/check");
  };

  const canProceed =
    slides[currentSlide].type === "question" ? !!selectedOption : true;

  const getBackgroundColor = () => {
    const slideColorIndex = Math.floor(currentSlide / 3) % 3;
    switch (slideColorIndex) {
      case 0:
        return "from-pink-100 to-purple-100";
      case 1:
        return "from-purple-100 to-pink-200";
      case 2:
        return "from-pink-200 to-purple-200";
      default:
        return "from-pink-100 to-purple-100";
    }
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b ${getBackgroundColor()} overflow-hidden`}
    >
      <ToastContainer />
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 bg-white bg-gradient-to-r from-purple-400 to-pink-500 text-white text-2xl p-2 rounded-full shadow-lg"
      >
        <FaTimes />
      </button>

      {/* Slide Content */}
      {renderSlideContent()}

      {/* Progress Dots */}
      <div className="absolute bottom-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide
                ? "bg-gradient-to-r from-purple-500 to-pink-500"
                : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-4 flex justify-between w-full px-4">
        <button
          onClick={handleBack}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={canProceed ? handleNext : undefined}
          className={`bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full ${
            canProceed ? "" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!canProceed}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Walkthrough;
