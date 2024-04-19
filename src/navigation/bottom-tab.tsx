import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { TabBottomBar } from "../components/tab-bottom-bar"
import { FolderMeaningScreen } from "../screens/folder-meaning"
import { FaceIDScreen } from "../screens/face-id"
import { BiometryScreen } from "../screens/biometry"
import { Platform } from "react-native"

const TabNavigation = createBottomTabNavigator()

export enum BOTTON_TAB_NAVIGATION {
  WELCOME = "welcome",
  FOLDER_MEANING = "folder-meaning",
  FACE_ID = "face-id",
  BIOMETRICS = "biometrics"
}

export const BottomTabNavigation = () => {
  return (
    <TabNavigation.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={TabBottomBar}
    >
      <TabNavigation.Screen name={BOTTON_TAB_NAVIGATION.FOLDER_MEANING} component={FolderMeaningScreen} />
      <TabNavigation.Screen name={BOTTON_TAB_NAVIGATION.FACE_ID} component={FaceIDScreen} />

      {Platform.OS === 'android' && (
        <TabNavigation.Screen name={BOTTON_TAB_NAVIGATION.BIOMETRICS} component={BiometryScreen} />
      )}
    </TabNavigation.Navigator>
  )
}
