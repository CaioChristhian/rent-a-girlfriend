import React from 'react';
import { StatusBar } from 'react-native';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import HeightSvg from '../../assets/ruler.svg';
import HairSvg from '../../assets/hair-cut.svg';
import WaistSvg from '../../assets/waist.svg';
import EyesColors from '../../assets/eyes.svg';
import BustSvg from '../../assets/brassiere.svg';
import PeachSvg from '../../assets/peach.svg';

import {
  Container, 
  Header,
  GirlImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer
} from './styles';

export function WaifuDetails(){
  return (
    <Container>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <GirlImages>
        <ImageSlider imagesUrl={['https://64.media.tumblr.com/0f18a9079f39b8fb14c9d0677139a654/49952d61b86e3226-49/s1280x1920/cc2b62044b8d6a3147466710000d2241d82afed1.jpg']} />
      </GirlImages>

      <Content>
        <Details>
          <Description>
            <Brand>Kanojo</Brand>
            <Name>Mizuhara</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 500</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name='160cm' icon={HeightSvg} />
          <Accessory name='Liso Castanho' icon={HairSvg} />
          <Accessory name='63cm' icon={WaistSvg} />
          <Accessory name='Castanhos' icon={EyesColors} />
          <Accessory name='85cm' icon={BustSvg} />
          <Accessory name='Média' icon={PeachSvg} />
        </Accessories>

        <About>
          Chizuru tem cabelos castanhos na altura da cintura que são mais notavelmente amarrados com franja pendurada no lado direito e olhos castanhos claros.
          Ao posar como uma estudante diligente, ela usa óculos, um acessório de borboleta e ostenta o cabelo trançado duplo. Mais tarde é revelado que ela tem problemas de visão e usa um par de lentes de contato quando não está saindo com seus amigos.
          Sua apresentação é representada como sendo uma madonna, possuir uma beleza que só se pode sonhar em ter, roupas leves, maquiagem e acessórios.
        </About>
      </Content>

      <Footer>
        <Button title='Confirmar' />
      </Footer>
    </Container>
  );
}