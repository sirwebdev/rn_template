import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/home";
import { BottomTabNavigation } from "./bottom-tab";

const Stack = createNativeStackNavigator()

export enum STACK_NAVIGATION_ROUTES {
  HOME = "home",
  ABOUT = "about"
}

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name={STACK_NAVIGATION_ROUTES.HOME} component={HomeScreen} />
      <Stack.Screen name={STACK_NAVIGATION_ROUTES.ABOUT} component={BottomTabNavigation} />
    </Stack.Navigator>
  )
}


