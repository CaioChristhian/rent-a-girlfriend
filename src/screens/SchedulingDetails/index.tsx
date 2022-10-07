import React from 'react';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import { PropsStack } from '../../routes/models';
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
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal
} from './styles';

export function SchedulingDetails(){
  const theme = useTheme();
  const navigation = useNavigation<PropsStack>();

  function handleConfirmSchedulingDetails() {
    navigation.navigate('SchedulingComplete', { name: 'SchedulingComplete' })
  }

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

        <RentalPeriod>
          <CalendarIcon>
            <Feather 
              name='calendar'
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>16/06/2021</DateValue>
          </DateInfo>

          <Feather 
            name='chevron-right'
            size={RFValue(24)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 500 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 1.500</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button title='Alugar agora' color={theme.colors.success} onPress={() => handleConfirmSchedulingDetails()} />
      </Footer>
    </Container>
  );
}