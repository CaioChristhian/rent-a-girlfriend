import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

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

export const ImageIndex = styled.View<ImageIndexProps>`
  width: 6px;
  height: 6px;

  background-color: ${({ theme, active }) => 
  active ? theme.colors.title : theme.colors.shape};

  margin-left: 8px;
  border-radius: 3px;
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