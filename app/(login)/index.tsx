import { useState } from 'react';
import { YStack, Text, Button, Input, Spinner} from 'tamagui';
import { ChevronRight } from '@tamagui/lucide-icons'
import { router } from 'expo-router'

import {Green} from '../../constants/Colors'

export default function UsernameScreen() {
  const [userId, setUserId] = useState('')
  const [idLogin, setIDLogin] = useState(false)

  const handleLogin = () => {
    if (userId) {
      console.log('登录按钮被按下');
      setIDLogin(true);
      setTimeout(() => {
        setIDLogin(false);
        router.push('/verify')
      }, 2000); 
    } else {
      console.log('userId为空，按钮不可用');
    }
  }

  return (
    <YStack flex={1} bg={Green.bg}>
      <YStack marginTop={90} marginLeft={20}>
        <YStack>
          <Text style={ {fontWeight: '200', fontSize:32} } color={Green.dark}>Welcome to</Text>
          <Text style={ {fontWeight: 'bold', fontSize:48} } color={Green.dark}>Project Name</Text>
        </YStack>

        <YStack marginTop={9}>
          <Text style={ {fontSize:24} } color={Green.dark}>
            Check your COVID-19
          </Text>
          <Text style={ {fontSize:24} } color={Green.dark}>
            vaccine status
          </Text>
          <Text style={ {fontSize:24} } color={Green.dark}>
            with Blockchain technology.
          </Text>
        </YStack>
      </YStack>
      
      <YStack marginTop={40} ai="center">
        <YStack
          style={{width: 280, borderRadius: 12}}
        >
          <YStack paddingHorizontal={"$6"} marginVertical={"$8"}>
            <Input
              placeholder={'Your ID'}
              placeholderTextColor={Green.dark}
              value={userId} 
              onChangeText={setUserId}
              cursorColor={Green.dark}
              selectionColor={Green.dark}
              backgroundColor={Green.light}
              borderWidth={0}
            />
          </YStack>
        </YStack>

        <Button 
          icon={idLogin ? <Spinner/> : <ChevronRight size={"$1.5"} />}
          circular
          size={'$6'} 
          backgroundColor={Green.accent}
          color={Green.lightText}
          onPress={handleLogin}
        />

      </YStack>
    </YStack>
  )
}
