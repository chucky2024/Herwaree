// Import necessary modules
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import React, { useEffect, useState } from "react";

// Import the Firebase configuration and auth module
import { auth } from "../src/components/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

// Import your UserContext
import { UserProvider } from "./pages/UserContext";
import WalletWidget from "./pages/WalletWidget";
import SignUp from "./pages/SignUp";
import Introduce from "./pages/Introduce";
import WeightHeight from "./pages/WeightHeight";
import Calendar from "./pages/Calendar";
import Front from "./pages/front";
import Login from "./pages/login";
import Yay from "./pages/yay";
import BirthdayPicker from "./pages/birthday";
import PeriodUpsAndDowns from "./pages/periods";
import Profile from "./pages/profile";
import BreastFront from "./pages/BreastFront";
import Contraceptives from "./pages/contraceptive";
import AchieveWithUs from "./pages/achieve";
import Cycle from "./pages/cycle";
import CycleTracker from "./pages/cycletracker";
import Symptom from "./pages/symptom";
import FlowChanges from "./pages/flowchanges";
import Lump from "./pages/lumps";
import Supplement from "./pages/supplement";
import Health from "./pages/health";
import NoticedSymptoms from "./pages/noticedsymptoms";
import BreastMonitor from "./pages/BreastMonitor";
import Mammogram from "./pages/mammogram";
import Further from "./pages/Further";
import Symptomor from "./pages/symptomor";
import Check from "./pages/check";
import Conditions from "./pages/conditions";
import Walkthrough from "./pages/Walkthrough";
import Screening from "./pages/screening";
import Birthcontrol from "./pages/birthcontrol";
import MorePage from "./pages/more";
import Blog from "./pages/blog";
import Community from "./pages/community";
import Video from "./pages/video";
import SettingsPage from "./pages/settingpage";
import ChatScreen from "./pages/chatbot";
import Doctors from "./pages/doctors-guide";
import Donations from "./pages/donation";
import DonationPage from "./pages/donationpg";
import DonationConfirmation from "./pages/donation-confirmation";

// App Component
function App() {
  const [isFirebaseInitialized, setIsFirebaseInitialized] = useState(false);

  useEffect(() => {
    //  Firebase initialization with Firebase Auth
    const checkFirebaseInitialization = () => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("User is signed in:", user);
        }
        console.log("Firebase initialized successfully");
        setIsFirebaseInitialized(true);
      });

      return () => unsubscribe();
    };

    checkFirebaseInitialization();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Front />} />
        <Route path="/herwaree/signUp" element={<SignUp />} />
        <Route path="/herwaree/introduce" element={<Introduce />} />
        <Route path="/herwaree/WeightHeight" element={<WeightHeight />} />
        <Route path="/herwaree/Calendar" element={<Calendar userName={""} />} />
        <Route path="/herwaree/login" element={<Login />} />
        <Route path="/herwaree/yay" element={<Yay />} />
        <Route path="/herwaree/BirthdayPicker" element={<BirthdayPicker />} />
        <Route path="/herwaree/BreastFront" element={<BreastFront />} />
        <Route path="/herwaree/periods" element={<PeriodUpsAndDowns />} />
        <Route path="/herwaree/profile" element={<Profile />} />
        <Route path="/herwaree/contraceptives" element={<Contraceptives />} />
        <Route path="/herwaree/achieve" element={<AchieveWithUs />} />
        <Route path="/herwaree/cycle" element={<Cycle />} />
        <Route path="/herwaree/cycletracker" element={<CycleTracker />} />
        <Route path="/herwaree/symptom" element={<Symptom />} />
        <Route path="/herwaree/flowchanges" element={<FlowChanges />} />
        <Route path="/herwaree/lumps" element={<Lump />} />
        <Route path="/herwaree/supplement" element={<Supplement />} />
        <Route path="/herwaree/health" element={<Health />} />
        <Route path="/herwaree/noticedsymptoms" element={<NoticedSymptoms />} />
        <Route path="/herwaree/WalletWidget" element={<WalletWidget />} />
        <Route path="/herwaree/BreastMonitor" element={<BreastMonitor />} />
        <Route path="/herwaree/mammogram" element={<Mammogram />} />
        <Route path="/herwaree/Further" element={<Further />} />
        <Route path="/herwaree/symptomor" element={<Symptomor />} />
        <Route path="/herwaree/check" element={<Check />} />
        <Route path="/herwaree/conditions" element={<Conditions />} />
        <Route path="/herwaree/Walkthrough" element={<Walkthrough />} />
        <Route path="/herwaree/screening" element={<Screening />} />
        <Route path="/herwaree/birthcontrol" element={<Birthcontrol />} />
        <Route path="/herwaree/more" element={<MorePage />} />
        <Route path="/herwaree/blog" element={<Blog />} />
        <Route path="/herwaree/community" element={<Community />} />
        <Route path="/herwaree/video" element={<Video />} />
        <Route path="/herwaree/settingpage" element={<SettingsPage />} />
        <Route path="/herwaree/chatbot" element={<ChatScreen />} />
        <Route path="/herwaree/doctors-guide" element={<Doctors />} />
        <Route path="/herwaree/donation" element={<Donations />} />
        <Route path="/herwaree/donationpg" element={<DonationPage />} />
        <Route path="/herwaree/donation-confirmation" element={<DonationConfirmation />} />
      </>
    )
  );

  if (!isFirebaseInitialized) {
    return <div>Loading...</div>;
  }

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
