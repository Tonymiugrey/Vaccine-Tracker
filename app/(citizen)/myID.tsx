import { Button, YStack } from 'tamagui';

import {Green} from '../../constants/Colors'
import LargeTitle from '../../components/LargeTitle'
// import SmartContractContext from '../smartContractContent';
import SmartContractContext from '../../blockchain/scripts/smartcontract';
import React, { useState, useContext, useEffect } from 'react';

export default function MyID() {
  const { UserIdentityContract } = useContext(SmartContractContext);
  const User = '';
  const getUsers = async () => {
    const response = await UserIdentityContract.methods.getIdentity().call();
    console.log(response);
  };
  
  return (
    <YStack flex={1} bg={Green.bg}>
      <YStack marginTop={90} marginHorizontal={20}>
        <LargeTitle>{User}</LargeTitle>
        <Button onPress={getUsers}>
          getUsers
        </Button>
      </YStack>
    </YStack>
  )
}
