import React, { useState } from "react";
import DoctorCard from "../components/DoctorCard"; // Adjust the import path
import { BiSearch } from "react-icons/bi"; // Importing the search icon

const initialDoctors = [
  {
    name: "Dr Ovia Sarah",
    specialty: "Oncologist",
    description:
      "An oncologist is a medical doctor who specializes in diagnosing and treating cancer. They manage a patient's care...",
    location: "Ilorin, Kwara State",
  },
  // Add more doctor objects here if necessary
];

const Doctors: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [doctors] = useState(initialDoctors);

  const handleBookSession = (name: string) => {
    console.log(`Booking a session with ${name}`);
  };

  // Function to filter doctors based on the search term
  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-purple-50">
      <header className="bg-white py-4 shadow-md">
        <h1 className="text-center text-2xl font-semibold text-purple-800">
          List of Doctors
        </h1>
      </header>

      <div className="max-w-lg mx-auto mt-6">
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search a doctor"
            className="w-full rounded-full border border-gray-300 py-2 px-4 pl-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          />
          <span className="absolute left-4 top-2.5 text-gray-400">
            <BiSearch />
          </span>
        </div>

        {/* Mapping through filtered doctors array to display DoctorCard */}
        {filteredDoctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            doctor={doctor}
            onBookSession={handleBookSession}
          />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
