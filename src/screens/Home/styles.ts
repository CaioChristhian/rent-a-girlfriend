import { FlatList, TouchableOpacity } from 'react-native';
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
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};

`;

export const WaifuList = styled(FlatList<GirlDTO>).attrs({
  contentContainerStyle: {
    padding: 24
  },
  showsVerticalScrollIndicator: false,
})``;

export const MyGirlsButton = styled(TouchableOpacity)`
  width: 60px;
  height: 60px;

  border-radius: 30px;

  background-color: ${({ theme }) => theme.colors.main};

  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 13px;
  right: 22px;
`;