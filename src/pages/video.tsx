import React from "react";
import Vid from "../assets/video.mp4";

const Video: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <video className="w-full max-w-4xl h-auto" controls>
        <source src={Vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
