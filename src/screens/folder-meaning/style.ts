import { styled } from "styled-components/native";

export const primaryColor = "#5c01e8"

export const AboutScreenView = styled.View`
  flex: 1;
  width: 100%;

  padding: 16px;
  padding-bottom: 0;
`;

export const HeaderButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  gap: 8px;
`;

export const SectionView = styled.ScrollView`
  margin-top: 16px
`;

export const SectionTitle = styled.Text`
  font-size: 32px;
  font-weight: bold;

  color: ${primaryColor};

  margin-bottom: 16px;
  text-align: center;
`;
