import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { GirlDTO } from '../../dtos/GirlDTO';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.line};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  background-color: ${({ theme }) => theme.colors.header};
  justify-content: flex-end;
  padding: 32px 24px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalWaifus = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};

`;

export const WaifuList = styled(FlatList<GirlDTO>).attrs({
  contentContainerStyle: {
    padding: 24
  },
  showsVerticalScrollIndicator: false,
})``;