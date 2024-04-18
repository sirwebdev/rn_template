import { NavigationContainer } from "@react-navigation/native"

import { StackNavigationProvider } from "./navigation/stack"

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigationProvider />
    </NavigationContainer>
  )
}
