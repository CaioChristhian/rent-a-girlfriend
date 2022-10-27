import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;

  ${({ isFocused, theme }) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.main};
  `};
`;

export const IconContainer = styled.View`
  height: 56px;
  width: 55px;
  margin-right: 2px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const InputText = styled(TextInput)`
  flex: 1;

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background_primary};
  padding: 0 23px;
`;
