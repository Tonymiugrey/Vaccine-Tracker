import { YStack } from 'tamagui';

import {Green} from '../../constants/Colors'
import LargeTitle from '../../components/LargeTitle'

export default function MyID() {

  return (
    <YStack flex={1} bg={Green.bg}>
      <YStack marginTop={90} marginHorizontal={20}>
        <LargeTitle>Username</LargeTitle>
      </YStack>
    </YStack>
  )
}
