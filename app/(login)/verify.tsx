import React, { useState, useCallback, useEffect } from 'react';
import { View, YStack, Text, Button, Input, Spinner } from 'tamagui';
import {Green} from '../../constants/Colors'
import * as LocalAuthentication from 'expo-local-authentication'
import { TouchableOpacity } from 'react-native';

import Item from '../../components/Item'

export default function VerifyScreen() {
  const [isPassed, setIsPassed] = useState(false)
  // wherever the useState is located 
  const [isBiometricSupported, setIsBiometricSupported] = React.useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false)

  // Check if hardware supports biometrics
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
      const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
      setIsEnrolled(savedBiometrics);
    })();
  });

  const handleBiometricAuth = async () => {
    const auth = await LocalAuthentication.authenticateAsync();
    if (auth.success) setIsPassed(true);
    else setIsPassed(false);
  }

  return (
    <YStack flex={1} bg={Green.bg}>
      <YStack marginTop={90} marginLeft={20}>
        <Text style={ {fontWeight: 500, fontSize:32} } color={Green.dark}>Welcome,</Text>
        <Text style={ {fontWeight: 'bold', fontSize:48} } color={Green.dark}>Userame</Text>   
      </YStack>

      <YStack ai='center' gap="$5" marginTop={20}>

      <View>
          {(isBiometricSupported && isEnrolled) ? (
            <>
              <Button       
                backgroundColor={Green.accent}
                color={Green.lightText} 
                onPress={handleBiometricAuth}
              >
                { (isPassed) ? 'Passed' : 'Test Biometrics Login' }
              </Button>
            </>
          ) : (
            <Text>
              Not support biometrics
            </Text>
          )}
        </View>

        <Text>临时测试页面用：</Text>

        <Item
          title={"Citizen"}
          subtitle={"To test citizen page"}
          action={'(citizen)/myID'}
        />

        <Item
          title={"Security"}
          subtitle={"To test sec page"}
          action={'(sec)/check'}
        />

        <Item
          title={"Goverment"}
          subtitle={"To test gov page"}
          action={'(gov)/stat'}
        />

        <Item
          title={"Vac Site"}
          subtitle={"To test vac page"}
          action={'(vac)/vaccinate'}
        />

      </YStack>

    </YStack>
  )
}
