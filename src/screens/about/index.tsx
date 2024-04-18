import { useCallback } from "react";
import { SafeArea } from "../../styles/safe-area"
import { AboutScreenView, HeaderButton, HeaderContainer, HeaderText } from "./style"

import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { Horse, Heart, Cube } from 'phosphor-react-native';

interface AboutScreenProps {
  navigation: NavigationProp<ParamListBase>
}

export const AboutScreen = ({ navigation }: AboutScreenProps) => {
  const handleGoBack = useCallback(() => {
    navigation.goBack()
  }, [])

  return (
    <SafeArea>
      <AboutScreenView>
        <HeaderContainer>
          <HeaderButton onPress={handleGoBack}>
            <Horse size={16} />
            <HeaderText>About</HeaderText>
          </HeaderButton>
        </HeaderContainer>
      </AboutScreenView>
    </SafeArea>
  )
}
