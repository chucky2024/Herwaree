import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

// Import your images and icons
import mammogramImage from "../assets/mammo.png";
import selfExamImage from "../assets/self.png";
import tamponImage from "../assets/tampons.png";
import fertilityImage from "../assets/track.png";
import videoImage from "../assets/vid.png";
import blogImage from "../assets/blogs.png";
import bookImage from "../assets/books.png";
import faqImage from "../assets/faqs.png";
import storyImage from "../assets/stores.png";
import img2 from "../assets/flower.png";
import join from "../assets/join.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import Navigation from "../components/navigation";

const MorePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-800 pb-16 relative overflow-x-hidden">
      {/* Header */}
      <div className="relative">
        <div className="absolute -top-10 -right-16 w-28 h-28">
          <img src={img2} alt="flower" className="object-contain" />
        </div>

        <div className="absolute top-6 left-4">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-2xl text-purple-700 cursor-pointer"
            onClick={() => navigate(-1)} // Navigate back on click
          />
        </div>

        {/* More text */}
        <h1 className="absolute top-8 left-0 right-0 text-center text-2xl font-bold text-purple-800 -mb-10">
          More
        </h1>
      </div>

      {/* HERWAREE Section */}
      <div className="p-4 space-y-6 mt-20">
        <div
          className="p-4 rounded-xl shadow-md flex items-center relative"
          style={{
            background:
              "linear-gradient(180deg, rgba(185, 118, 197, 0.92) 0%, rgba(179, 144, 201, 0.92) 100%)",
          }}
        >
          <img src={join} alt="HERWAREE" className="w-12 h-12 object-contain" />
          <div className="flex-1 flex flex-col items-center text-center">
            <h2 className="text-white font-semibold text-xl">HERWAREE</h2>
            <p className="text-white mt-4">
              {" "}
              {/* Increased margin-top to create space */}
              Set of features to keep track of health working as an insurance
              card.
            </p>
            <div className="mt-4">
              <button className="bg-white text-purple-600 rounded-md px-6 py-2">
                Admin
              </button>
            </div>
          </div>
        </div>

        {/* Breast Health Monitoring Tools */}
        <Section
          title="Breast Health Monitoring Tools"
          items={[
            { label: "Mammograms", img: mammogramImage, path: "/mammograms" },
            {
              label: "Self-examination",
              img: selfExamImage,
              path: "/herwaree/self-examination",
            },
          ]}
        />

        {/* Menstrual Cycle */}
        <Section
          title="Menstrual Cycle"
          items={[
            {
              label: "Learn about Tampons",
              img: tamponImage,
              path: "/herwaree/tampons",
            },
            {
              label: "Fertility Tracking",
              img: fertilityImage,
              path: "/herwaree/fertility-tracking",
            },
          ]}
        />

        {/* Learn with Herware */}

        <Section
          title="Learn with Herware"
          items={[
            { label: "Video", img: videoImage, path: "/herwaree/video" },
            { label: "Blogs", img: blogImage, path: "/herwaree/blog" },
            { label: "Books", img: bookImage, path: "/herwaree/books" },
          ]}
        />

        {/* Educational Resources */}
        <Section
          title="Educational Resources"
          items={[
            { label: "FAQs", img: faqImage, path: "/herwaree/faqs" },
            { label: "Stories", img: storyImage, path: "/herwaree/stories" },
          ]}
        />
      </div>

      <Navigation />
    </div>
  );
};

// Section Component
const Section: React.FC<{
  title: string;
  items: { label: string; img: string; path: string }[];
}> = ({ title, items }) => {
  const navigate = useNavigate(); // React Router hook for navigation

  return (
    <div className="mt-6">
      <h3 className="font-bold text-lg text-purple-900 mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-6">
        {items.map((item, index) => (
          <button
            key={index}
            className="text-white flex flex-col items-center justify-center rounded-md shadow-md p-4"
            style={{
              background:
                "linear-gradient(180deg, rgba(185, 118, 197, 0.92) 0%, rgba(179, 144, 201, 0.92) 100%)",
            }}
            onClick={() => navigate(item.path)} // Navigate to new page when clicked
          >
            <img src={item.img} alt={item.label} className="w-12 h-12 mb-2" />
            <span className="text-center text-sm font-medium">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MorePage;
