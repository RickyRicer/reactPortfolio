import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import * as CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import Web3 from 'web3';

const APP_NAME = 'My Awesome App';
const APP_LOGO_URL = 'https://example.com/logo.png'
const APP_SUPPORTED_CHAIN_IDS = [8453, 84532];

// Initialize Coinbase Wallet SDK
export const coinbaseWallet = new CoinbaseWalletSDK ({
  appName: APP_NAME,
  appLogoUrl: APP_LOGO_URL,
  appChainIds: APP_SUPPORTED_CHAIN_IDS
});


// Initialize a Web3 Provider object
export const ethereum = coinbaseWallet.makeWeb3Provider();

ethereum.request({ method: 'eth_requestAccounts' }).then((response) => {
  const accounts: string[]

// ethereum.on('connect', (info) => {
//   setConnect(info);
// });

// ethereum.on('disconnect', (error) => {
//   setDisconnect({ code: error.code, message: error.message });
// });

// ethereum.on('accountsChanged', (accounts) => {
//   setAccountsChanged(accounts);
// });

// ethereum.on('chainChanged', (chainId) => {
//   setChainChanged(chainId);
// });

// ethereum.on('message', (message) => {
//   setMessage(message);
// });

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
