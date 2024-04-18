import { useCallback } from "react"
import { LightText, HomeScreenView, HeaderView, BolderText, FooterView, ContinueButton, ContinueButtonText, FooterText } from "./styles"
import { SafeArea } from "../../styles/safe-area"
import { NavigationProp, ParamListBase } from "@react-navigation/native"
import { STACK_NAVIGATION_ROUTES } from "../../navigation/stack"

interface HomeScreenProps {
  navigation: NavigationProp<ParamListBase>
}

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const handleNavigateToPresentationScreen = useCallback(() => {
    navigation.navigate(STACK_NAVIGATION_ROUTES.ABOUT)
  }, [])

  return (
    <SafeArea>
      <HomeScreenView contentContainerStyle={{
        flex: 1,
        justifyContent: "space-between"
      }}>
        <HeaderView>
          <LightText>Welcome to</LightText>
          <BolderText>RN Template</BolderText>
        </HeaderView>


        <FooterView>
          <ContinueButton
            onPress={handleNavigateToPresentationScreen}
          >
            <ContinueButtonText>Continue</ContinueButtonText>
          </ContinueButton>

          <FooterText>Made by pmartinsdev</FooterText>
        </FooterView>
      </HomeScreenView>
    </SafeArea>
  )
}
