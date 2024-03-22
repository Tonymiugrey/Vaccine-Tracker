import { Tabs } from 'expo-router';
import { LineChart, UserRoundSearch } from '@tamagui/lucide-icons'
import {Green} from '../../constants/Colors'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: Green.tabBarAccent, 
      tabBarInactiveTintColor: Green.accent,
      tabBarStyle: {
        backgroundColor: Green.bg,
      }
      }}>
      <Tabs.Screen
        name="stat"
        options={{
          title: 'Statistics',
          tabBarIcon: ({ color }) => <LineChart color={color} />,
          headerShown: false 
        }}
      />
      <Tabs.Screen
        name="check"
        options={{
          title: 'Check',
          tabBarIcon: ({ color }) => <UserRoundSearch color={color} />,
          headerShown: false 
        }}
      />
    </Tabs>
  );
}
