import { useCallback } from "react";
import { View } from "react-native";
import { CaretLeft, Function, RoadHorizon, Lightbulb, PuzzlePiece, ShareNetwork, WebhooksLogo } from "phosphor-react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

import { SafeArea } from "../../styles/safe-area"
import { AboutScreenView, HeaderButton, SectionTitle, SectionView, primaryColor } from "./style"

import { SectionItem } from "./components/section-item";

interface AboutScreenProps {
  navigation: NavigationProp<ParamListBase>
}

export const FolderMeaningScreen = ({ navigation }: AboutScreenProps) => {
  const handleGoBack = useCallback(() => {
    navigation.goBack()
  }, [])

  return (
    <SafeArea>
      <AboutScreenView>
        <View>
          <HeaderButton onPress={handleGoBack}>
            <CaretLeft size={20} weight="bold" color={primaryColor} />
          </HeaderButton>
        </View>

        <SectionView
          contentContainerStyle={{
            gap: 16
          }}
          showsVerticalScrollIndicator={false}
        >
          <SectionTitle>Folder's Meaning</SectionTitle>

          <SectionItem
            title="Components"
            description="Component's folder are the global components used in more than 3 screens/component."
            icon={
              <PuzzlePiece
                size={32}
                weight="bold"
                color={primaryColor}
              />
            }
          />

          <SectionItem
            title="Screens"
            description="Have all Component related at Screen, and each screen's folder may have or not a component folder one to organiaze the main screen component"
            icon={
              <Lightbulb
                size={32}
                weight="bold"
                color={primaryColor}
              />
            }
          />

          <SectionItem
            title="Services"
            description="Here we can have all integrations and custom services for all application"
            icon={
              <Function
                size={32}
                weight="bold"
                color={primaryColor}
              />
            }
          />

          <SectionItem
            title="Providers"
            description="Have all providers from React Native"
            icon={
              <RoadHorizon
                size={32}
                weight="bold"
                color={primaryColor}
              />
            }
          />

          <SectionItem
            title="Hooks"
            description="Have all from React an it can be a React Native or custom one"
            icon={
              <WebhooksLogo
                size={32}
                weight="bold"
                color={primaryColor}
              />
            }
          />

          <SectionItem
            title="Navigations"
            description="Navigation contains all route navigation from application"
            icon={
              <ShareNetwork
                size={32}
                weight="bold"
                color={primaryColor}
              />
            }
          />
        </SectionView>
      </AboutScreenView>
    </SafeArea>
  )
}
