import React from "react";

import Doc from "../assets/DoctorsCard.png";

interface DoctorProps {
  doctor: {
    name: string;
    specialty: string;
    description: string;
    location: string;
  };
}

const DoctorCard: React.FC<DoctorProps> = ({ doctor }) => {
  return (
    <div className="bg-white rounded-lg shadow-md mb-6 p-4">
      <div className="flex items-center">
        <img
          src={Doc}
          alt={doctor.name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h2 className="font-semibold text-lg">{doctor.name}</h2>
          <p className="text-purple-700">{doctor.specialty}</p>
          <p className="text-gray-600 text-sm">{doctor.description}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <button className="bg-purple-600 text-white py-2 px-4 rounded-full shadow hover:bg-purple-700">
          Book a session
        </button>
        <p className="text-gray-500 text-sm">{doctor.location}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
