import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import FlowerSvg from '../../assets/lotus.svg';

import {
  Container, Details,
  Brand,Name,
  About, Rent,
  Period, Price,
  Type, WaifuImage
} from './styles';

interface WaifuData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  },
  thumbnail: string;
}

interface Props {
  data: WaifuData;
}

export function Waifu({ data }: Props){
  return (
    <Container>
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