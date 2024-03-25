import React, { createContext } from 'react';
import Web3 from 'web3';
import UserIdentityBuild from '../blockchain/build/contracts/UserIdentity.json';

// Create context and set default values.
const SmartContractContext = createContext({});

export const SmartContractContextProvider = ({ children }) => {
	const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');

	// Smart Contract Addresses
	const userIdentityAddress = UserIdentityBuild.networks[5777].address;

	// Smart Contracts
	const UserIdentityContract = new web3.eth.Contract(UserIdentityBuild.abi, userIdentityAddress);
	
	const context = { web3, UserIdentityContract };

	return (
		<SmartContractContext.Provider value={context}>
			{children}
		</SmartContractContext.Provider>
	);
};

export default SmartContractContext;
