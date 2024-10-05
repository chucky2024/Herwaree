import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import WalletProviderWrapper from "./pages/wallet_provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WalletProviderWrapper>
     <App />
    </WalletProviderWrapper>
  </StrictMode>
);
