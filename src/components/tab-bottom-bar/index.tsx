import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import { ButtonText, TabBottomBarView, TabBottonButton } from "./style"
import { Fingerprint, House } from "phosphor-react-native"
import { BOTTON_TAB_NAVIGATION } from "../../navigation/bottom-tab"

export const primaryColor = "#5c01e8"

export const TabBottomBar = ({ navigation, state }: BottomTabBarProps) => {
  const currentRoute = state.routeNames[state.index]

  console.log(currentRoute, state.routeNames)

  const handleNavigateTo = (route: string) => {
    navigation.navigate(route)
  }

  const isActive = (route: string) => {
    return route === currentRoute
  }

  const getIconColor = (route: string) => {
    return isActive(route) ? primaryColor : "black"
  }

  return (
    <TabBottomBarView>
      <TabBottonButton onPress={() => handleNavigateTo(BOTTON_TAB_NAVIGATION.FOLDER_MEANING)}>
        <House size={22} weight="bold" color={getIconColor(BOTTON_TAB_NAVIGATION.FOLDER_MEANING)} />
        <ButtonText isActive={isActive(BOTTON_TAB_NAVIGATION.FOLDER_MEANING)}>Folders</ButtonText>
      </TabBottonButton>

      <TabBottonButton onPress={() => handleNavigateTo(BOTTON_TAB_NAVIGATION.FACE_ID)}>
        <Fingerprint size={22} weight="bold" color={getIconColor(BOTTON_TAB_NAVIGATION.FACE_ID)} />
        <ButtonText isActive={isActive(BOTTON_TAB_NAVIGATION.FACE_ID)}>Face ID</ButtonText>
      </TabBottonButton>
    </TabBottomBarView>
  )
}
