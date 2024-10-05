// src/pages/WalletAddress.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WalletAddress: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/herwaree/introduce");
    // Handle wallet address submission here
    console.log('Wallet Address:', walletAddress);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-100 p-8">
      <h1 className="text-2xl font-bold italic text-center text-purple-600 mb-6">Input Your Wallet Address</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-purple-600 text-xl font-bold mb-2" htmlFor="walletAddress">
            Wallet Address
          </label>
          <input
            id="walletAddress"
            type="text"
            placeholder="Enter your wallet address"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full text-xl bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default WalletAddress;