import Web3 from "web3/dist/web3.min.js"; 

import UserContract from "./truffle/build/contracts/UserContract.json"


export const loadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    window.alert(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
};

export const loadBlockchainData = async () => {
  const web3 = window.web3;
  // Load account
  const accounts = await web3.eth.getAccounts();

  // Network ID

  

  const networkId = await web3.eth.net.getId();

 
  // Network data

  if (networkId && UserContract.networks[networkId]) {
    const userContract = new web3.eth.Contract(
      UserContract.abi,
      UserContract.networks[networkId].address
    );
    return { userContract, accounts: accounts };
  }
};
