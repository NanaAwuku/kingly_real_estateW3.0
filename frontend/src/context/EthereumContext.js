import React, { createContext, useContext, useState, useEffect } from "react";
import { Web3Provider } from "@ethersproject/providers";

const EthereumContext = createContext();

export function EthereumProvider({ children }) {
  const [provider, setProvider] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const connectToMetaMask = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const ethProvider = new Web3Provider(window.ethereum);
        setProvider(ethProvider);
        setIsConnected(true);
      } else {
        console.error("MetaMask not found");
      }
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  };

  const disconnectFromMetaMask = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.send("eth_accounts");
        setIsConnected(false);
        setProvider(null);
      } else {
        console.error("MetaMask not found");
      }
    } catch (error) {
      console.error("Error disconnecting from MetaMask:", error);
    }
  };

  useEffect(() => {
    const checkMetaMaskConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });

          if (accounts.length > 0) {
            const ethProvider = new Web3Provider(window.ethereum);
            setProvider(ethProvider);
            setIsConnected(true);
          }
        } catch (error) {
          console.error("Error checking MetaMask connection:", error);
        }
      }
    };

    checkMetaMaskConnection();
  }, []);

  return (
    <EthereumContext.Provider
      value={{ provider, isConnected, connectToMetaMask, disconnectFromMetaMask }}
    >
      {children}
    </EthereumContext.Provider>
  );
}

export function useEthereum() {
  const context = useContext(EthereumContext);
  if (!context) {
    throw new Error("useEthereum must be used within an EthereumProvider");
  }
  return context;
}
