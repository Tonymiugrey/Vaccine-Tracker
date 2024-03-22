import { Tabs } from 'expo-router';
import { Syringe, History } from '@tamagui/lucide-icons'
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
        name="vaccinate"
        options={{
          title: 'Vaccinate',
          tabBarIcon: ({ color }) => <Syringe color={color} />,
          headerShown: false 
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color }) => <History color={color} />,
          headerShown: false 
        }}
      />
    </Tabs>
  );
}
