import { styled } from "styled-components/native";

export const primaryColor = "#5c01e8"

export const FaceIDScreenView = styled.View`
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

export const TitleContainer = styled.View`
  align-items: center;

  margin-top: 32px;
`

export const TitleText = styled.Text`
  font-weight: bold;
  color: ${primaryColor};

  text-align: center;
  font-size: 40px;
`

export const SmallText = styled.Text`
  font-size: 16px;
  font-weight: 200;
  
  color: ${primaryColor}
`

export const SectionView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const FaceIdButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;

  width: 100%;
  padding: 16px;

  background-color: ${primaryColor};
  border-radius: 10px;
`

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`
