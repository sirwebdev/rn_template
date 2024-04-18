import { useCallback } from "react";
import { View } from "react-native";
import { CaretLeft } from "phosphor-react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

import { SafeArea } from "../../styles/safe-area"
import { FaceIDScreenView, HeaderButton, primaryColor } from "./style"

interface FaceIDScreenProps {
  navigation: NavigationProp<ParamListBase>
}

export const FaceIDScreen = ({ navigation }: FaceIDScreenProps) => {
  const handleGoBack = useCallback(() => {
    navigation.goBack()
  }, [])

  return (
    <SafeArea>
      <FaceIDScreenView>
        <View>
          <HeaderButton onPress={handleGoBack}>
            <CaretLeft size={20} weight="bold" color={primaryColor} />
          </HeaderButton>
        </View>

      </FaceIDScreenView>
    </SafeArea>
  )
}
