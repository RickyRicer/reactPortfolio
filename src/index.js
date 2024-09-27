import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

// # Initialize Coinbase Wallet SDK
const sdk = new CoinbaseWalletSDK({appName: "Ricky Ricer Portfolio", appChainIds: [84532]});

// # Make web3 provider
const provider = sdk.makeWeb3Provider();

// # Initialize wallet connection
const addresses = provider.request("eth_requestAccounts");


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


