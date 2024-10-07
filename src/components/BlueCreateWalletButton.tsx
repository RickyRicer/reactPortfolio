import React, { useCallback } from 'react';
import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk';
import { CoinbaseWalletLogo } from './CoinbaseWalletLogo';
 
const buttonStyles = {
  background: 'transparent',
  border: '1px solid transparent',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 200,
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'bold',
  fontSize: 18,
  backgroundColor: '#0052FF',
  paddingLeft: 15,
  paddingRight: 30,
  borderRadius: 10,
};
 
const sdk = new CoinbaseWalletSDK({
  appName: 'Ricky Ricer Portfolio',
  appChainIds: [84532],
});
 
const provider = sdk.makeWeb3Provider();

interface HandleSuccessProps {
  (address: string): void;
};

type ErrorType = Error;
 
export function BlueCreateWalletButton({ handleSuccess, handleError }: {handleSuccess: HandleSuccessProps; handleError: (error: Error) => void}) {
  const buttonStyles: React.CSSProperties = {
    background: 'transparent',
    border: '1px solid transparent',
    boxSizing: 'border-box' as const,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 200,
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: '#0052FF',
    paddingLeft: 15,
    paddingRight: 30,
    borderRadius: 10,
  };
  const createWallet = useCallback(async () => {
    try {
      const [address] = await provider.request({
        method: 'eth_requestAccounts',
      }) as string[];
      handleSuccess(address);
    } catch (error) {
      handleError(error as ErrorType);
    }
  }, [handleSuccess, handleError]);
 
  return (
    <button style={buttonStyles} onClick={createWallet}>
      <CoinbaseWalletLogo />
      Create Wallet
    </button>
  );
}