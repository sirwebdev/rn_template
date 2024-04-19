import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import { ButtonText, TabBottomBarView, TabBottonButton } from "./style"
import { Fingerprint, FingerprintSimple, Folder } from "phosphor-react-native"
import { BOTTON_TAB_NAVIGATION } from "../../navigation/bottom-tab"
import { Platform } from "react-native"

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
        <Folder size={22} weight="bold" color={getIconColor(BOTTON_TAB_NAVIGATION.FOLDER_MEANING)} />
        <ButtonText isActive={isActive(BOTTON_TAB_NAVIGATION.FOLDER_MEANING)}>Folders</ButtonText>
      </TabBottonButton>

      {
        Platform.OS === 'ios' && (
          <>
            <TabBottonButton onPress={() => handleNavigateTo(BOTTON_TAB_NAVIGATION.FACE_ID)}>
              <Fingerprint size={22} weight="bold" color={getIconColor(BOTTON_TAB_NAVIGATION.FACE_ID)} />
              <ButtonText isActive={isActive(BOTTON_TAB_NAVIGATION.FACE_ID)}>Face ID</ButtonText>
            </TabBottonButton>
          </>
        )
      }

      {
        Platform.OS === 'android' && (
          <TabBottonButton onPress={() => handleNavigateTo(BOTTON_TAB_NAVIGATION.BIOMETRICS)}>
            <FingerprintSimple size={22} weight="bold" color={getIconColor(BOTTON_TAB_NAVIGATION.BIOMETRICS)} />
            <ButtonText isActive={isActive(BOTTON_TAB_NAVIGATION.BIOMETRICS)}>Biometrics</ButtonText>
          </TabBottonButton>
        )
      }
    </TabBottomBarView>
  )
}
