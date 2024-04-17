import { useCallback } from "react"
import { LightText, HomeScreenView, HeaderView, BolderText, FooterView, ContinueButton, ContinueButtonText, FooterText } from "./styles"

export const HomeScreen = () => {
  const handleNavigateToPresentationScreen = useCallback(() => { }, [])

  return (
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
  )
}
