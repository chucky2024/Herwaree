import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/flower.png";
import img2 from "../assets/flower2.png";
import logo from "../assets/mam1.jpg";

const Mammogram: React.FC = () => {
  const navigate = useNavigate();
  const handleGotcha = () => {
    navigate("/herwaree/Further");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen relative bg-white overflow-hidden">
      <style>
        {`
          .star-bullet::before {
            content: '★';  /* Star character */
            color: #6b21a8;  /* Beautiful star purple */
            font-size: 1.5rem;
            margin-right: 10px;
          }
          .central-list {
            display: flex;
            flex-direction: column;
            align-items: center;  /* Center align the list items */
          }
        `}
      </style>

      <div className="absolute -top-11 -right-10 w-28 h-28">
        <img src={img2} alt="flower" className="object-contain" />
      </div>

      {/* /* Hey */}
      <div className="absolute -top-11 -left-10 w-28 h-28">
        <img src={img1} alt="flower" className="object-contain" />
      </div>
      <div className="text-center z-10 w-full px-8">
        <img
          src={logo}
          alt="Herwaree Logo"
          className="inline-block w-60 h-auto rounded-xl mb-8"
        />

        <h1 className="text-purple-500 text-2xl font-bold">
          <span className="block">
            When is it necessary to get a mammogram or other tests?
          </span>
        </h1>

        <ul className="text-purple-500 text-2xl font-bold mt-4 central-list">
          <li className="relative list-none mb-2 flex items-center">
            <span className="star-bullet"></span> Uncertainty factors
          </li>
          <li className="relative list-none flex items-center">
            <span className="star-bullet"></span> Area of residence
          </li>
        </ul>

        <button
          onClick={handleGotcha}
          className="px-11 py-2 -mb-11 max-w-xs w-full bg-purple-600 text-white rounded-full text-lg absolute bottom-20 left-1/2 transform -translate-x-1/2 focus:outline-none"
        >
          Gotcha!, Let's get going
        </button>
      </div>
      {
        // <>
        //   <div className="absolute bottom-5 left-4 w-24 h-24 bg-purple-300 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
        //   <div className="absolute -right-11 w-24 h-24 bg-purple-300 rounded-full"></div>
        // </>
      }
    </div>
  );
};

export default Mammogram;
