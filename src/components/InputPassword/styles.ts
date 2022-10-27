import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
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
