import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../components/firebaseConfig";

const Screening: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);
  const [isHighRisk, setIsHighRisk] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const navigate = useNavigate();

  // Fetch authenticated user and load their screening data
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        loadScreeningResult(user.uid); // Load saved result if any
      }
    });
    return unsubscribe;
  }, []);

  // Function to load the screening result from Firestore
  const loadScreeningResult = async (uid: string) => {
    const userDoc = doc(db, "users", uid);
    const docSnap = await getDoc(userDoc);
    if (docSnap.exists()) {
      const savedResult = docSnap.data().screeningResult;
      setResult(savedResult);
      setIsHighRisk(savedResult === "high-risk");
    }
  };

  // Save screening result for the specific user
  const saveScreeningResult = async (uid: string, result: string) => {
    const userDoc = doc(db, "users", uid);
    await setDoc(
      userDoc,
      { screeningResult: result, timestamp: new Date() },
      { merge: true }
    );
  };

  // Function to evaluate the screening result
  const evaluateScreening = () => {
    const answers = getAnswers(); // Assume function that returns an array of "Yes" or "No"
    let yesCount = answers.filter((answer) => answer === "Yes").length;
    let noCount = answers.length - yesCount;

    let riskLevel;
    if (yesCount > noCount) {
      riskLevel = "high-risk";
    } else if (yesCount < noCount) {
      riskLevel = "low-risk";
    } else {
      riskLevel = "average-risk"; // Equal number of Yes and No
    }

    setIsHighRisk(riskLevel === "high-risk");
    setResult(riskLevel);

    if (userId) {
      saveScreeningResult(userId, riskLevel); // Save result to Firestore
    }
  };

  // Trigger evaluation once user ID is available
  useEffect(() => {
    if (userId) {
      evaluateScreening(); // Evaluate only when userId is available
    }
  }, [userId]);

  const handleRetakeTest = () => {
    navigate("/herwaree/walkthrough");
  };

  const handleReturnHome = () => {
    navigate("/herwaree/check");
  };

  const handleSpeakWithDoctor = () => {
    navigate("/herwaree/doctors-guide");
  };

  const handleShareResults = () => {
    // Implement functionality to share results with the doctor
    alert("Results shared with the doctor!");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-8">
      <h1 className="text-4xl font-bold text-purple-700 mb-8">
        Test Completed! 🎉
      </h1>

      {result && (
        <div className="text-center mb-8">
          {isHighRisk ? (
            <p className="text-2xl text-red-600">
              Based on your answers, we recommend seeing a doctor. Don't worry,
              we can help you connect with one.
            </p>
          ) : (
            <p className="text-2xl text-green-600">
              Great job! Based on your answers, you're in good health. Keep it
              up!
            </p>
          )}
          <p className="text-lg mt-4">
            Your result:{" "}
            <strong>{isHighRisk ? "High Risk" : "Low Risk"}</strong>
          </p>
        </div>
      )}

      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={handleRetakeTest}
          className="bg-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-600 transition duration-300"
        >
          Take Another Test
        </button>

        {isHighRisk && (
          <button
            onClick={handleShareResults}
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Share Results with Doctor
          </button>
        )}

        <button
          onClick={handleSpeakWithDoctor}
          className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-red-600 transition duration-300"
        >
          Speak with a Doctor
        </button>

        <button
          onClick={handleReturnHome}
          className="bg-gray-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-600 transition duration-300"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

// Placeholder function to simulate getting answers
const getAnswers = () => {
  return ["Yes", "No", "Yes", "No", "Yes"];
};

export default Screening;
