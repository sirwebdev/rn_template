import { css } from "styled-components";
import { styled } from "styled-components/native";
import { primaryColor } from ".";

export const TabBottomBarView = styled.View`
  padding: 16px;
  flex-direction: row;
  align-tems: center;

  gap:8px;
  justify-content: space-around;
`;


export const TabBottonButton = styled.TouchableOpacity`
  align-items: center;
  gap:4px;
  padding: 8px;

`;

interface ButtonProps {
  isActive?: boolean
}

export const ButtonText = styled.Text<ButtonProps>`
  ${({ isActive }) => isActive && css`
    color: ${primaryColor}
  `}
`;
