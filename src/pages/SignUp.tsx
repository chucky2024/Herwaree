import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ConnectWalletButton from "./WalletWidget";
import ToastNotification from "../components/notif";

import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

interface Toast {
  type: "success" | "error";
  message: string;
}

const SignUp: React.FC = () => {
  const [showWalletWidget, setShowWalletWidget] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [toast, setToast] = useState<Toast | null>(null);
  const navigate = useNavigate();
  const auth = getAuth();

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const handleSignUp = async () => {
    if (!email || !password) {
      showToast("error", "Please enter both email and password.");
      return;
    }

    if (password.length < 8) {
      showToast("error", "Password must be at least 8 characters long.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User ID:", userCredential.user.uid);

      // const response = await fetch("http://localhost:5000/herwaree/SignUp", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     userId: userCredential.user.uid,
      //     email,
      //     password,
      //   }),
      // });

      // if (!response.ok) {
      //   const errorData = await response.json().catch(() => null);
      //   const errorMessage = errorData?.message || "Sign up failed.";
      //   showToast("error", errorMessage);
      //   return;
      // }

      showToast("success", "Sign up successful!");
      setTimeout(() => {
        navigate("/herwaree/introduce");
      }, 2000);
    } catch (error) {
      console.error("Error signing up:", error);
      showToast("error", "Something went wrong. Please try again.");
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      console.log("Google User ID:", userCredential.user.uid);

      showToast("success", "Google sign-up successful!");
      setTimeout(() => {
        navigate("/herwaree/introduce");
      }, 2000);
    } catch (error) {
      console.error("Error signing up with Google:", error);
      showToast("error", "Google sign-up failed. Please try again.");
    }
  };

  const handleWalletSignUp = async (walletAddress: string) => {
    try {
      const response = await fetch("http://localhost:5000/herwaree/SignUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          walletAddress,
        }),
      });

      if (response.ok) {
        showToast("success", "Wallet sign-up successful!");
        setTimeout(() => {
          navigate("/herwaree/introduce");
        }, 2000);
      } else {
        const errorData = await response.json().catch(() => null);
        showToast("error", errorData?.message || "Wallet sign-up failed.");
      }
    } catch (error) {
      console.error("Error signing up with wallet:", error);
      showToast("error", "Something went wrong with wallet sign-up.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-100 p-8">
      {toast && <ToastNotification toast={toast} />}
      <h1
        className="text-2xl font-bold italic text-center mb-6 bg-clip-text text-transparent"
        style={{
          backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
        }}
      >
        Welcome to Herwaree
      </h1>

      <h2
        className="text-xl text-left mb-8 bg-clip-text text-transparent"
        style={{
          backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
        }}
      >
        Create your account
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp();
        }}
      >
        <div className="mb-4">
          <label
            className="block text-xl font-bold mb-2 bg-clip-text text-transparent"
            htmlFor="email"
            style={{
              backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
            }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Type your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-xl font-bold mb-2 bg-clip-text text-transparent"
            htmlFor="password"
            style={{
              backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
            }}
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Set a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            minLength={8}
            required
          />
          <p className="text-gray-600 text-lg mt-2">
            Password must be at least 8 characters
          </p>
        </div>

        <button
          type="submit"
          className="w-full text-xl text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
          style={{
            backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
          }}
        >
          Sign up
        </button>
      </form>

      <p className="text-center text-gray-700 my-4">Or</p>

      <div className="flex flex-col text-xl items-center w-full max-w-md mx-auto space-y-4">
        <button
          className="flex items-center justify-center w-full bg-white-500 text-black py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
          onClick={handleGoogleSignUp}
        >
          <FaGoogle className="h-5 w-5 mr-2" />
          Sign up with Google
        </button>

        <button
          onClick={() => setShowWalletWidget(!showWalletWidget)}
          className="flex items-center text-xl justify-center w-full text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
          style={{
            backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
          }}
        >
          Connect Wallet
        </button>

        {showWalletWidget && (
          <ConnectWalletButton onWalletConnect={handleWalletSignUp} />
        )}
      </div>
    </div>
  );
};

export default SignUp;
