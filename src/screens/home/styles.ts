import { styled } from "styled-components/native";

const primaryColor = "#5c01e8"


export const HomeScreenView = styled.ScrollView`
  width: 100%;
  padding: 32px;
`;

export const HeaderView = styled.View`
  align-items: center;
`

export const LightText = styled.Text`
  font-size: 60px;
  font-weight: 100;

  color: ${primaryColor}
`;

export const BolderText = styled.Text`
  font-size: 48px;
  font-weight: bold;

  color: ${primaryColor}
`;

export const FooterView = styled.View`
  items: center;
  gap: 8px;

  align-items: center;
  width: 100%;
`;

export const ContinueButton = styled.TouchableOpacity`
  padding: 16px;
  border-radius: 10px;
  background-color: ${primaryColor};

  width: 100%;
`;

export const ContinueButtonText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #fff;

  text-align: center;
`;

export const FooterText = styled.Text`
  font-weight: 300;
  font-size: 16px;
`;

