import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { SplashScreen, Stack } from 'expo-router'
import { useColorScheme } from 'react-native'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import { TamaguiProvider } from 'tamagui'

import '../tamagui-web.css'
import { config } from '../tamagui.config'


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(login)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [fontLoaded, fontError] = useFonts({
    font: require('../assets/fonts/LexendDeca-VariableFont_wght.ttf'),
  })

  useEffect(() => {
    if (fontLoaded || fontError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync()
    }
  }, [fontLoaded, fontError])

  if (!fontLoaded && !fontError) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <TamaguiProvider config={config} defaultTheme={colorScheme as any}>
      <ThemeProvider value={DefaultTheme}>
        <Stack>
          <Stack.Screen name="(login)" options={{ headerShown: false }} />
          <Stack.Screen name="(citizen)" options={{ headerShown: false }} />
          <Stack.Screen name="(gov)" options={{ headerShown: false }} />
          <Stack.Screen name="(sec)" options={{ headerShown: false }} />
          <Stack.Screen name="(vac)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </TamaguiProvider>
  )
}
