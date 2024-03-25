import React, { createContext, useContext, ReactNode } from 'react';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import UserIdentityJson from '../blockchain/build/contracts/UserIdentity.json';

interface SmartContractContextType {
  web3: Web3;
  UserIdentityContract: Contract | null;
}

const defaultContext: SmartContractContextType = {
  web3: new Web3(Web3.givenProvider || 'http://127.0.0.1:7545'),
  UserIdentityContract: null,
};

const SmartContractContext = createContext<SmartContractContextType>(defaultContext);

interface SmartContractContextProviderProps {
  children: ReactNode; 
}

export const SmartContractContextProvider: React.FC<SmartContractContextProviderProps> = ({ children }) => {
  const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');
  const networkId = '5777'; // Define network ID as a variable for easy modification
  const userIdentityAddress = UserIdentityJson.networks[networkId]?.address;
  
  // Conditional initialization based on address existence
  const UserIdentityContract = userIdentityAddress
    ? new web3.eth.Contract(UserIdentityJson.abi as any, userIdentityAddress) // Correct casting of the ABI
    : null;

  const context: SmartContractContextType = { web3, UserIdentityContract };

  return (
    <SmartContractContext.Provider value={context}>
      {children}
    </SmartContractContext.Provider>
  );
};

// Custom hook for consuming context
export function useSmartContract() {
  return useContext(SmartContractContext);
}

export default SmartContractContext;


// import React, { createContext, useContext } from 'react';
// import Web3 from 'web3';
// import UserIdentityJson from '../blockchain/build/contracts/UserIdentity.json';


// interface SmartContractContextType {
//   web3: Web3;
//   UserIdentityContract: any;
// }

// const SmartContractContext = createContext<SmartContractContextType>({
//   web3: new Web3(Web3.givenProvider || 'http://127.0.0.1:7545'),
//   UserIdentityContract: null,
// });

// interface SmartContractContextProviderProps {
//   children: React.ReactNode; 
// }

// export const SmartContractContextProvider: React.FC<SmartContractContextProviderProps> = ({ children }) => {
//   const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');
//   const userIdentityAddress = UserIdentityJson.networks[5777].address;
//   const UserIdentityContract = new web3.eth.Contract(UserIdentityJson.abi, userIdentityAddress);
 
//   const context: SmartContractContextType = { web3, UserIdentityContract };

//   return (
//     <SmartContractContext.Provider value={context}>
//       {children} 
//     </SmartContractContext.Provider>
//   );
// };

// export default SmartContractContext;
