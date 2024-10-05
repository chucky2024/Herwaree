// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import Img4 from "../assets/sol.png";
// import ConnectWalletButton from "./WalletWidget";
// import React, { useState } from "react";
// import img2 from "../assets/flower.png";
// import { useNavigate } from "react-router-dom";

// const WelcomeBack: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showWalletWidget, setShowWalletWidget] = useState(false);

//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     console.log("Email:", email);
//     console.log("Password:", password);
//     navigate("/herwaree/Calendar");
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-white-50 shadow-lg overflow-x-hidden">
//       <div className="p-6 rounded-lg max-w-md w-full">
//         <h1 className="text-2xl font-bold text-center text-purple-700 mb-8 mt-10">
//           Welcome to Herwaree
//         </h1>

//         <p className="text-center text-gray-500 mb-6">
//           Enter your email and password to login to Herwaree
//         </p>

//         <div className="absolute -top-12 -right-10 w-28 h-28">
//           <img src={img2} alt="flower" className="object-contain" />
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-purple-700 text-opacity-90">
//               Email
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
//             />
//           </div>

//           <div className="mb-6 relative">
//             <label className="block text-purple-700 text-opacity-90">
//               Password
//             </label>
//             <input
//               type={showPassword ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
//             />
//             <div
//               className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 cursor-pointer"
//               style={{ top: "70%", transform: "translateY(-50%)" }}
//               onClick={togglePasswordVisibility}
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center text-gray-500 mt-6">
//           Don't have an account?{" "}
//           <a
//             href="/herwaree/signup"
//             className="text-purple-700 hover:underline"
//           >
//             Sign up
//           </a>
//         </p>

//         <div className="text-center mt-4">
//           <button
//             onClick={() => setShowWalletWidget(!showWalletWidget)} // Toggle WalletWidget visibility
//             className=" w-full flex items-center justify-center  bg-purple-600 text-white py-2 rounded-lg mt-2 hover:bg-purple-300 transition-colors"
//           >
//             <img src={Img4} alt="Wallet" className="h-5 w-5 mr-2" />
//             Sign in with wallet
//           </button>
//         </div>

//         {/* Centralize and style the WalletWidget */}
//         {showWalletWidget && (
//           <div className="flex justify-center mt-8">
//             <div className="p-4 bg-purple-100 rounded-lg">
//               <ConnectWalletButton />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WelcomeBack;
