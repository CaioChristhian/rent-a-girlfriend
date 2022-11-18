import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import FlowerSvg from '../../assets/lotus.svg';
import { GirlDTO } from '../../dtos/GirlDTO';

import {
  Container, Details,
  Brand,Name,
  About, Rent,
  Period, Price,
  Type, WaifuImage
} from './styles';

interface Props extends RectButtonProps {
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
            <Period>{data.period}</Period>
            <Price>{`R$ ${data.price}`}</Price>
          </Rent>

          <Type>
            <FlowerSvg 
              width={RFValue(20)}
              height={RFValue(20)}
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