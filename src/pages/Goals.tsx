// import React from 'react';
// import { FaChevronLeft } from 'react-icons/fa';
// import { AiOutlineEllipsis } from 'react-icons/ai';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const Goals: React.FC = () => {
//   const navigate = useNavigate(); // Initialize navigate function

//   // Handler for card clicks
//   const handleCardClick = (path: string) => {
//     navigate(path); // Navigate to the given path
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-between bg-gray-100 p-8 relative">
//       {/* Back Icon */}
//       <div className="absolute py-10 top-4 left-4">
//         <FaChevronLeft className="text-3xl text-gray-400 cursor-pointer" />
//       </div>

//       {/* Title and Description */}
//       <div className="flex flex-col items-center text-center mb-6 mt-12">
//         <h1 className="text-3xl text-purple-700 mb-4">What would you like to achieve with us?</h1>
//         <p className="text-lg font-medium text-gray-700">We have amazing features for you</p>
//       </div>

//       {/* Options */}
//       <div className="flex flex-col space-y-6">
//         {/* Fertility and Menstrual Health Tracking Card */}
//         <div
//           className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md cursor-pointer"
//           onClick={() => handleCardClick('/herwaree/lmp')}
//         >
//           <img src="path/to/your/image1.png" alt="Fertility and Menstrual Health Tracking" className="w-20 h-20 rounded-md"/>
//           <div>
//             <h2 className="text-xl font-semibold text-gray-800">Fertility and Menstrual Health Tracking</h2>
//             <p className="text-md text-gray-600">We help track your cycle and you get to learn more about fertility...</p>
//           </div>
//           <input type="checkbox" className="w-6 h-6"/>
//         </div>

//         <div
//           className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md cursor-pointer"
//           onClick={() => handleCardClick('/herwaree/BreastFront')}
//         >
//           <img src="path/to/your/image2.png" alt="Breast Health Monitoring" className="w-20 h-20 rounded-md"/>
//           <div>
//             <h2 className="text-xl font-semibold text-gray-800">Breast Health Monitoring</h2>
//             <p className="text-md text-gray-600">We can help detect and prevent breast diseases...</p>
//           </div>
//           <input type="checkbox" className="w-6 h-6"/>
//         </div>

//         {/* Holistic Wellness Coaching Card */}
//         <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
//           <img src="path/to/your/image3.png" alt="Holistic Wellness Coaching" className="w-20 h-20 rounded-md"/>
//           <div>
//             <h2 className="text-xl font-semibold text-gray-800">Holistic Wellness Coaching</h2>
//             <p className="text-md text-gray-600">We provide a comprehensive approach to health...</p>
//           </div>
//           <input type="checkbox" className="w-6 h-6"/>
//         </div>

//         {/* Understand My Body Better Card */}
//         <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
//           <img src="path/to/your/image4.png" alt="Understand My Body Better" className="w-20 h-20 rounded-md"/>
//           <div>
//             <h2 className="text-xl font-semibold text-gray-800">I'm Here To Understand My Body Better</h2>
//             <p className="text-md text-gray-600">Get personalized health insights</p>
//           </div>
//           <input type="checkbox" className="w-6 h-6"/>
//         </div>
//       </div>

//       {/* Navigation Dots and Confirm Button */}
//       <div className="flex flex-col items-center mt-8">
//         <AiOutlineEllipsis className="text-4xl text-gray-400 mb-4" />
//         <button className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 font-semibold text-lg">Confirm</button>
//       </div>
//     </div>
//   );
// };

// export default Goals;
