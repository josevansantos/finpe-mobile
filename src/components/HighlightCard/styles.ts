import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import theme from "../../global/styles/theme";

export const Container = styled.View`
  background-color: ${theme.colors.shape};

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
export const Title = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${theme.colors.text_dark};
`; 
export const Icon = styled(Feather)`
    font-size: ${RFValue(40)}px;
`; 
export const Footer = styled.View``; 
export const Amount = styled.Text`
  font-family: ${theme.fonts.medium};
  font-size: ${RFValue(32)}px;

  color: ${theme.colors.text_dark};

  margin-top: ${RFValue(38)}px;
`; 
export const LastTransaction = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  color: ${theme.colors.text};
`;