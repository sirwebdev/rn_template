import { styled } from "styled-components/native";
import { primaryColor } from "../../style";

export const SectionItemView = styled.View`
  width: 100%;
  flex-direction: row;

  gap:8px;
  align-items: center;
`;

export const SectionDescriptionContainer = styled.View`
  width: 100%;
  gap: 4px;
`;

export const DescriptionTitle = styled.Text`
  color: ${primaryColor};
  font-weight: bold;

  font-size: 16px;
`;

export const DescriptionText = styled.Text``;
