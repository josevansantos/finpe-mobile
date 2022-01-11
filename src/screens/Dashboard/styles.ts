import styled from "styled-components/native";
import { RFPercentage } from 'react-native-responsive-fontsize'

import theme from "../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`

export const Header = styled.View`
width: 100%;
height: ${RFPercentage(42)};

background-color: ${theme.colors.primary}
`