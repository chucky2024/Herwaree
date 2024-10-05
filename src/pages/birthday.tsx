import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaChevronLeft } from "react-icons/fa";
import img2 from "../assets/flower2.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Value = Date | Date[] | [Date, Date] | null; // Define Value here if you didn't create a separate declaration file

const BirthdayPicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (selectedDate) {
      toast.success("Date confirmed successfully!", { position: "top-center" });
      setTimeout(() => {
        navigate("/herwaree/achieve");
      }, 2000);
    } else {
      toast.error("Please select a date first.", { position: "top-center" });
    }
  };

  const handleSkip = () => {
    toast.info("You skipped the date selection.", { position: "top-center" });
    setTimeout(() => {
      navigate("/herwaree/achieve");
    }, 2000);
  };

  const handleDateChange = (value: Value) => {
    if (Array.isArray(value)) {
      setSelectedDate(value[0]);
    } else {
      setSelectedDate(value);
    }
    setShowCalendar(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white relative overflow-hidden">
      <ToastContainer />

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

      <h1
        className="text-2xl font-bold text-left mb-6 mt-16"
        style={{
          backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Enter your Birthdate
      </h1>

      <div className="mb-8 relative w-64">
        <button
          onClick={() => setShowCalendar(!showCalendar)}
          className="w-full py-3 px-6 border-2 border-purple-300 rounded-lg font-semibold bg-white hover:bg-purple-100"
          style={{
            backgroundImage: selectedDate
              ? "linear-gradient(to right, #b976c5, #b390c9)"
              : "",
            color: selectedDate ? "white" : "inherit",
          }}
        >
          {selectedDate ? selectedDate.toDateString() : "Select a date"}
        </button>
        {showCalendar && (
          <div className="absolute top-full left-0 mt-2 w-full z-50">
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              className="bg-white rounded-lg shadow-xl border border-gray-300"
            />
          </div>
        )}
      </div>

      <div className="flex justify-center items-center space-x-4 mt-20">
        <span className="h-1 w-6 bg-gray-300 rounded-full"></span>
        <span
          className="h-1 w-6 rounded-full"
          style={{
            background: "linear-gradient(to right, #b976c5, #b390c9)",
          }}
        ></span>
        <span className="h-1 w-6 bg-gray-300 rounded-full"></span>
      </div>

      <div className="absolute bottom-20 flex space-x-4">
        <button
          className="px-12 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-all"
          onClick={handleSkip}
        >
          Skip
        </button>
        <button
          className="px-12 py-2 rounded-full text-white hover:bg-purple-800 transition-all"
          style={{
            background: "linear-gradient(to right, #b976c5, #b390c9)",
          }}
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>

      <div className="absolute -top-8 -right-10 w-28 h-28">
        <img src={img2} alt="flower" className="object-contain" />
      </div>

      <div className="absolute bottom-5 left-4 w-20 h-20 bg-purple-300 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="absolute -right-11 top-60 w-20 h-20 bg-purple-300 rounded-full"></div>
    </div>
  );
};

export default BirthdayPicker;
