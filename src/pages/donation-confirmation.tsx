import React from "react";
import { useLocation } from "react-router-dom";

interface DonationConfirmationState {
  method: string;
  amount: string;
  result: any; 
}

const DonationConfirmation: React.FC = () => {
  const location = useLocation();
  const { method, amount, result } = location.state as DonationConfirmationState;

  return (
    <div className="p-4">
      <h1>Donation Confirmation</h1>
      <p>Method: {method}</p>
      <p>Amount: {amount} USDC</p>
      <p>Transaction Details: {JSON.stringify(result)}</p>
      {/* Add any additional confirmation UI */}
    </div>
  );
};

export default DonationConfirmation;
