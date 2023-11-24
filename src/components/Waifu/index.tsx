import React from 'react';

import FlowerSvg from '../../assets/lotus.svg';
import { GirlDTO } from '../../dtos/GirlDTO';

import {
  Container, Details,
  Brand,Name,
  About, Rent,
  Period, Price,
  Type, WaifuImage
} from './styles';
import { TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
  data: GirlDTO;
}

export function Waifu({ data, ...rest }: Props){
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <FlowerSvg 
              width={20}
              height={20}
            />
          </Type>
        </About>
      </Details>

      <WaifuImage 
        source={{ uri: data.thumbnail }} 
      />

    </Container>
  );
}