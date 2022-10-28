import styled from 'styled-components/native';
import { FlatList, Dimensions } from 'react-native';

interface ImageIndexProps {
  active: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding: 24px;
`;

export const GirlImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: 150px;

  justify-content: center;
  align-items: center;
`;

export const GirlImage = styled.Image`
  width: 350px;
  height: 150px;
  border-radius: 8px;
`;

export const CardSlider = styled(FlatList<string>).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})``;