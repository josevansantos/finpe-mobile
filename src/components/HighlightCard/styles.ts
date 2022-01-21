import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import theme from "../../global/styles/theme";

interface TypeProps {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ type }) => type === 'total' ? theme.colors.secondary : theme.colors.shape};

  width: ${RFValue(300)}px;
  border-radius: 5px;

  padding: ${RFValue(19)}px ${RFValue(23)}px;
  padding-bottom: ${RFValue(42)}px;

  margin-right: ${RFValue(16)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Title = styled.Text<TypeProps>`
  font-family: ${theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ type }) => type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`;
export const Icon = styled(Feather) <TypeProps>`
    font-size: ${RFValue(40)}px;

    ${(props) => props.type === 'up' && css`
      color: ${theme.colors.success};
    `}

${(props) => props.type === 'down' && css`
      color: ${theme.colors.attention};
    `}

${(props) => props.type === 'total' && css`
      color: ${theme.colors.shape};
    `}


`;
export const Footer = styled.View``;
export const Amount = styled.Text<TypeProps>`
  font-family: ${theme.fonts.medium};
  font-size: ${RFValue(32)}px;

  color: ${({ type }) => type === 'total' ? theme.colors.shape : theme.colors.text_dark};

  margin-top: ${RFValue(38)}px;
`;
export const LastTransaction = styled.Text<TypeProps>`
  font-family: ${theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  color: ${({ type }) => type === 'total' ? theme.colors.shape : theme.colors.text};
`;
