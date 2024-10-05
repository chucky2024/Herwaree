import React, { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa'; 

const Lmp: React.FC = () => {
  const [cycleDuration, setCycleDuration] = useState<string>('');
  const [otherDuration, setOtherDuration] = useState<string>('');

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 p-8 relative">
      <div className="absolute top-4 py-10 left-4">
        <FaChevronLeft className="text-2xl text-gray-400 cursor-pointer" />
      </div>

  
      <div className="flex flex-col items-center space-y-10 mt-20"> 
        <div className="w-full py-10 text-center">
          <h1 className="text-2xl text-purple-600 mb-2">
            When was your last menstural period? (The first day)
          </h1>
          <input
            type="date"
            className="border rounded-s-2xl px-3 py-2 w-full max-w-md text-center"
          />
        </div>

        <div className="w-full text-center">
          <h2 className="text-2xl text-purple-600 mb-2">
            How long does your period usually last?
          </h2>
          <div className="overflow-y-scroll w-full max-w-md flex flex-col text-xl space-y-3 px-4 h-40">
            {['21-24 days', '25-30 days', '31-35 days', 'Others'].map((duration) => (
              <div
                key={duration}
                className={`px-4 py-2 border rounded-lg cursor-pointer ${
                  cycleDuration === duration ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => {
                  setCycleDuration(duration);
                  if (duration !== 'Others') {
                    setOtherDuration(''); 
                  }
                }}
              >
                {duration}
              </div>
            ))}
          </div>

          {cycleDuration === 'Others' && (
            <div className="mt-4">
              <input
                type="text"
                placeholder="Specify your cycle duration"
                value={otherDuration}
                onChange={(e) => setOtherDuration(e.target.value)}
                className="border rounded-lg px-3 py-2 w-full max-w-md text-center"
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <div className="flex justify-between w-full max-w-md">
          <button className="text-blue-500 hover:underline">Skip for now</button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lmp;