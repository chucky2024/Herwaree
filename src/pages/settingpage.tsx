import {
  faBell,
  faTasks,
  faGift,
  faLanguage,
  faUnlockAlt,
  faComments,
  faChartLine,
  faChevronLeft,
  faTint,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import cycleImg from "../assets/cycle.png";
import fertilityImg from "../assets/fertility.png";
import breastHealthImg from "../assets/breast--health.png";
import img2 from "../assets/flower2.png";

import { Link } from "react-router-dom";

// Define the type for TipCard props
interface TipCardProps {
  label: string;
  image: string;
}

// Define the type for SettingsOption props
interface SettingsOptionProps {
  label: string;
  to: string;
  icon?: IconProp;
  iconColor?: string;
}

const SettingsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative justify-center overflow-x-hidden pt-8">
      <div className="flex items-center justify-between px-4 py-4 relative">
        <div>
          <Link to="/herwaree/calendar" className="text-purple-500">
            <div className="absolute -top-2 left-4">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-2xl text-purple-400 cursor-pointer"
              />
            </div>
          </Link>
        </div>
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
          <h1 className="text-center font-bold text-purple-600 text-2xl">
            Settings
          </h1>
        </div>
        <div className="absolute -top-16 -right-10 w-28 h-28">
          <img src={img2} alt="flower" className="object-contain" />
        </div>
      </div>

      <div className="flex justify-between space-x-2 px-4 mt-14">
        <TipCard label="Day of Cycle" image={cycleImg} />
        <TipCard label="Fertility Updates" image={fertilityImg} />
        <TipCard label="Breast Health" image={breastHealthImg} />
      </div>

      <div className="px-4 mt-6">
        <SettingsOption
          label="My Cycle"
          to="/my-cycle"
          icon={faTint}
          iconColor="text-red-500"
        />
        <SettingsOption label="Period possible date" to="/period-date" />
        <SettingsOption
          label="Fertility predictions"
          to="/fertility-predictions"
        />
        <SettingsOption
          label="Self breast examination guide"
          to="/breast-exam-guide"
        />
        <SettingsOption label="My Profile" to="/herwaree/profile" />
        <SettingsOption label="Schedule a mammogram" to="/schedule-mammogram" />
        <SettingsOption
          label="Activities"
          to="/activities"
          icon={faChartLine}
        />
        <SettingsOption label="Streaks" to="/streaks" icon={faTasks} />
        <SettingsOption label="Rewards" to="/rewards" icon={faGift} />
        <SettingsOption
          label="Donation"
          to="/herwaree/donation"
          icon={faUnlockAlt}
        />
        <SettingsOption
          label="Chat"
          to="/herwaree/community"
          icon={faComments}
        />
        <SettingsOption label="Reminders" to="/reminders" icon={faBell} />
        <SettingsOption
          label="Fertility Updates"
          to="/fertility-updates"
          icon={faChartLine}
        />
        <SettingsOption label="Language" to="/language" icon={faLanguage} />
      </div>
    </div>
  );
};

// TipCard component with type definition
const TipCard: React.FC<TipCardProps> = ({ label, image }) => (
  <div className="flex flex-col items-center bg-pink-100 rounded-lg shadow-md w-24 p-2">
    <img
      src={image}
      alt={label}
      className="w-16 h-16 object-cover rounded-lg"
    />
    <span className="text-xs text-center text-purple-600 mt-1">{label}</span>
  </div>
);

// SettingsOption component with type definition
const SettingsOption: React.FC<SettingsOptionProps> = ({
  label,
  icon,
  to,
  iconColor,
}) => (
  <Link to={to} className="flex justify-between items-center py-3 border-b">
    <span className="text-gray-600">{label}</span>
    {icon ? (
      <FontAwesomeIcon
        icon={icon}
        className={`${iconColor || "text-purple-500"}`}
      />
    ) : (
      <span className="text-purple-500">›</span>
    )}
  </Link>
);

export default SettingsPage;
