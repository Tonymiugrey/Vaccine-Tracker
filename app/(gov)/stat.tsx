import { YStack } from 'tamagui';

import {Green} from '../../constants/Colors'
import LargeTitle from '../../components/LargeTitle'

export default function GovStatistics() {

  return (
    <YStack flex={1} bg={Green.bg}>
      <YStack marginTop={90} marginLeft={20}>
        <LargeTitle>Username</LargeTitle>
      </YStack>
    </YStack>
  )
}
