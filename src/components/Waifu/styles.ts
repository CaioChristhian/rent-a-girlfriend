import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 126px;
  
  background-color: ${({ theme }) => theme.colors.background_primary};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px;

  margin-bottom: 16px;
  border-radius: 8px;
`;

export const Details = styled.View``;

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: 10px;
  
  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: 15px;
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 16px;
`;

export const Rent = styled.View`
  margin-right: 24px;
`;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: 10px;

  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.main};
  font-size:15px;
`;

export const Type = styled.View`
  position: absolute;
  left: 100px;
`;

export const WaifuImage = styled.Image`
  width: 150px;
  height: 100px;
  border-radius: 8px;
  margin-top: 8px;
`;
