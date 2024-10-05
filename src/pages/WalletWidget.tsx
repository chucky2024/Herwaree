import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ToastNotification from "../components/notif";

const ConnectWalletButton: React.FC = () => {
  const { publicKey } = useWallet();
  const navigate = useNavigate();
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    if (publicKey) {
      setToast({ type: "success", message: "Wallet connected successfully!" });

      setTimeout(() => {
        navigate("/herwaree/introduce");
      }, 2000);
    }
  }, [publicKey, navigate]);

  return (
    <div>
      {toast && <ToastNotification toast={toast} />}
      <WalletMultiButton />
    </div>
  );
};

export default ConnectWalletButton;
