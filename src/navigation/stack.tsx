import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/home";
import { AboutScreen } from "../screens/about";

const Stack = createNativeStackNavigator()

export enum STACK_NAVIGATION_ROUTES {
  HOME = "home",
  ABOUT = "about"
}

export const StackNavigationProvider = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name={STACK_NAVIGATION_ROUTES.HOME} component={HomeScreen} />
      <Stack.Screen name={STACK_NAVIGATION_ROUTES.ABOUT} component={AboutScreen} />
    </Stack.Navigator>
  )
}


