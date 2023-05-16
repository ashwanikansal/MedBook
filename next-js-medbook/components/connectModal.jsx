import React from "react";
import { ConnectButton } from "web3uikit";

const ConnectModal = () => {

  return (
    <div className="flex justify-center items-center min-h-screen bg-texture">
      <div className="bg-light p-10 rounded-lg shadow-md">
        <h1 className="text-gray-700 mb-8">Please connect to your wallet</h1>
        <div className="flex justify-center">
          <ConnectButton moralisAuth={false}/>
        </div>
      </div>
    </div>
  );
};

export default ConnectModal;
