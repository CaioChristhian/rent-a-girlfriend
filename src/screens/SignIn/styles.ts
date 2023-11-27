import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  height: 100%;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.main_light};
`;

export const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + 115}px;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title};
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  line-height: 25px;
  margin-top: 16px;
`;

export const Form = styled.View`
  width: 100%;
  margin: 64px 0;
`;

export const Footer = styled.View``;