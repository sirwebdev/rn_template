import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { TabBottomBar } from "../components/tab-bottom-bar"
import { FolderMeaningScreen } from "../screens/folder-meaning"
import { FaceIDScreen } from "../screens/face-id"
import { Folder } from "phosphor-react-native"

const TabNavigation = createBottomTabNavigator()

export enum BOTTON_TAB_NAVIGATION {
  WELCOME = "welcome",
  FOLDER_MEANING = "folder-meaning",
  FACE_ID = "face-id"
}

export const TAB_NAVIGATION_ROUTES = [
  { name: BOTTON_TAB_NAVIGATION.FOLDER_MEANING, component: FolderMeaningScreen, label: "Folders" },
  { name: BOTTON_TAB_NAVIGATION.FACE_ID, component: FaceIDScreen, label: "Face ID" },
]

export const BottomTabNavigation = () => {
  return (
    <TabNavigation.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={TabBottomBar}
    >

      {TAB_NAVIGATION_ROUTES.map(route => (
        <TabNavigation.Screen key={route.name} name={route.name} component={route.component} />

      ))}
    </TabNavigation.Navigator>
  )
}
