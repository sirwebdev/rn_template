import { NavigationContainer } from "@react-navigation/native"

import { StackNavigation } from "./navigation/stack"

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}
