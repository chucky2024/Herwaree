/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faCamera,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Navigation from "../components/navigation";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import img2 from "../assets/flower.png";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../pages/UserContext"; // Importing the context

const Profile: React.FC = () => {
  const { user, setUser } = useUser(); // Accessing user and setUser from context
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>(user?.email || "");
  const [loading, setLoading] = useState<boolean>(false);
  const [showYearPicker, setShowYearPicker] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");

  const [profilePic, setProfilePic] = useState<string | null>(null);

  const handleProfilePicUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailPattern.test(value) ? "" : "Invalid email address");
    if (!emailError) {
      setUser({ email: value });
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate("/herwaree/signup");
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        navigate("/");
      } catch (error) {
        console.error("Delete account failed", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-6 px-4 relative overflow-x-hidden -mb-14">
      <div className="w-full flex justify-center items-center mb-6">
        <Link to="/herwaree/settingspage" className="text-purple-500"></Link>
        <h1 className="text-xl font-bold text-purple-500">My Profile</h1>
      </div>

      <div className="relative mb-6">
        {profilePic ? (
          <img
            src={profilePic}
            alt="Profile"
            className="rounded-full w-24 h-24 object-cover border-2 border-purple-500"
          />
        ) : (
          <FontAwesomeIcon
            icon={faUserCircle}
            className="text-purple-500 w-24 h-24"
            size="6x"
          />
        )}
        <label
          htmlFor="profile-pic-upload"
          className="absolute bottom-0 right-0 bg-white p-1 rounded-full"
        >
          <FontAwesomeIcon icon={faCamera} className="text-gray-600" />
          <input
            id="profile-pic-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleProfilePicUpload}
          />
        </label>
      </div>

      <div className="w-full space-y-4">
        <EditableField
          label="First Name"
          value={user?.name || ""}
          onChange={(value) => setUser({ name: value })} // Update name in user context
        />
        <EditableField
          label="Email"
          value={email}
          onChange={(value) => handleEmailChange(value)} // Handle email validation and update
        />
        {emailError && (
          <span className="text-red-500 text-sm">{emailError}</span>
        )}
        <EditableField
          label="Year of Birth"
          value={user?.yearOfBirth.toString() || ""}
          onChange={() => setShowYearPicker(true)}
          isYear
        />
        {showYearPicker && (
          <Calendar
            onChange={(value: unknown) => {
              if (value instanceof Date) {
                const selectedYear = value.getFullYear();
                setUser({ yearOfBirth: selectedYear }); // Update year of birth in user context
              }
              setShowYearPicker(false);
            }}
            view="decade"
            maxDetail="decade"
            value={new Date(user?.yearOfBirth || new Date())}
            className="year-picker"
          />
        )}
        <EditableField
          label="Cycle Length"
          value={user?.cycleLength.toString() || ""}
          onChange={
            (value) => setUser({ cycleLength: Number(value) }) // Update cycle length in user context
          }
        />
        <EditableField
          label="Breast Examination Date"
          value={user?.breastExamDate || ""}
          onChange={(value) => setUser({ breastExamDate: value })} // Update breast exam date in user context
        />
      </div>

      <div className="mt-8 w-full space-y-4">
        <button
          onClick={handleLogout}
          className={`w-full py-3 bg-gray-200 text-gray-500 rounded-md ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Logging Out..." : "Log Out"}
        </button>
        <button
          onClick={handleDeleteAccount}
          className={`w-full py-3 text-red-500 rounded-md ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Deleting..." : "Delete Account"}
        </button>
      </div>

      <div className="absolute top-6 left-4">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="text-2xl text-purple-400 cursor-pointer"
          onClick={() => navigate(-1)}
        />
      </div>

      <div className="absolute -top-10 -right-16 w-28 h-28">
        <img src={img2} alt="flower" className="object-contain" />
      </div>

      <div className="fixed bottom-0 left-0 right-0">
        <Navigation />
      </div>
    </div>
  );
};

interface EditableFieldProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  isEmail?: boolean;
  isYear?: boolean;
}

const EditableField: React.FC<EditableFieldProps> = ({
  label,
  value,
  onChange,
  isEmail = false,
  isYear = false,
}) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-300 py-3">
      <span className="text-gray-600">{label}</span>
      {isYear ? (
        <button
          onClick={() => onChange(value)}
          className="text-gray-500 underline outline-none bg-transparent"
        >
          {value}
        </button>
      ) : (
        <input
          type={isEmail ? "email" : "text"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-grow ml-2 text-gray-700 outline-none"
        />
      )}
    </div>
  );
};

export default Profile;
