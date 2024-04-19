import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { TabBottomBar } from "../components/tab-bottom-bar"
import { FolderMeaningScreen } from "../screens/folder-meaning"
import { FaceIDScreen } from "../screens/face-id"

const TabNavigation = createBottomTabNavigator()

export enum BOTTON_TAB_NAVIGATION {
  WELCOME = "welcome",
  FOLDER_MEANING = "folder-meaning",
  FACE_ID = "face-id"
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
    </TabNavigation.Navigator>
  )
}
