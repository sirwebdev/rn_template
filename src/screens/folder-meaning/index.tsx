import { useCallback } from "react";
import { View } from "react-native";
import {
  CaretLeft,
  Function,
  RoadHorizon,
  Lightbulb,
  PuzzlePiece,
  ShareNetwork,
  WebhooksLogo
} from "phosphor-react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

import { SafeArea } from "../../styles/safe-area";
import { AboutScreenView, HeaderButton, SectionTitle, SectionView, primaryColor } from "./style";
import { SectionItem } from "./components/section-item";

interface AboutScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

export const FolderMeaningScreen = ({ navigation }: AboutScreenProps) => {
  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

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
            gap: 16,
          }}
          showsVerticalScrollIndicator={false}
        >
          <SectionTitle>Folder's Meaning</SectionTitle>

          <SectionItem
            title="Components"
            description="This folder contains globally reusable components that are used across three or more screens or other components."
            icon={<PuzzlePiece size={32} weight="bold" color={primaryColor} />}
          />

          <SectionItem
            title="Screens"
            description="This folder stores all screen-specific components. Each screen folder may contain a subfolder for organizing components that are exclusive to that particular screen."
            icon={<Lightbulb size={32} weight="bold" color={primaryColor} />}
          />

          <SectionItem
            title="Services"
            description="Services folder houses all the integration logic and custom services utilized throughout the application."
            icon={<Function size={32} weight="bold" color={primaryColor} />}
          />

          <SectionItem
            title="Providers"
            description="Contains all context providers used in the application, facilitating state management across different components and screens."
            icon={<RoadHorizon size={32} weight="bold" color={primaryColor} />}
          />

          <SectionItem
            title="Hooks"
            description="Includes custom hooks and those provided by React, enhancing functionality with reusable logic blocks."
            icon={<WebhooksLogo size={32} weight="bold" color={primaryColor} />}
          />

          <SectionItem
            title="Navigations"
            description="Manages all routing and navigation logic, defining the navigational structure of the application."
            icon={<ShareNetwork size={32} weight="bold" color={primaryColor} />}
          />
        </SectionView>
      </AboutScreenView>
    </SafeArea>
  );
};
