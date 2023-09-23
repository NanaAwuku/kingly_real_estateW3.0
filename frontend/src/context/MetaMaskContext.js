import React, { createContext, useContext, useEffect, useState } from 'react';
import Web3 from 'web3';

const MetaMaskContext = createContext();

export const useMetaMask = () => useContext(MetaMaskContext);

export const MetaMaskProvider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [userAddress, setUserAddress] = useState(null);

  useEffect(() => {
    const connectToMetaMask = async () => {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const web3Instance = new Web3(window.ethereum);
          const accounts = await web3Instance.eth.getAccounts();
          const address = accounts[0];

          setWeb3(web3Instance);
          setUserAddress(address);

          console.log(`Connected to MetaMask. User address: ${address}`);
        } catch (error) {
          console.error('MetaMask connection error:', error);
        }
      } else {
        console.error('MetaMask is not installed');
      }
    };

    connectToMetaMask();
  }, []);

  return (
    <MetaMaskContext.Provider value={{ web3, userAddress }}>
      {children}
    </MetaMaskContext.Provider>
  );
};
