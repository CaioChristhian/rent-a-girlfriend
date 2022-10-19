import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';

import { PropsStack } from '../../routes/models';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';
import { GirlDTO } from '../../dtos/GirlDTO';
import { getDetailsIcon } from '../../utils/getDetailsIcon';

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
import { format } from 'date-fns';
import { getPlatformDate } from '../../utils/getPlatformDate';

interface Params {
  girl: GirlDTO;
  dates: string[];
}

interface RentalPeriod {
  start: string;
  end: string;
}

export function SchedulingDetails(){
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

  const theme = useTheme();
  const navigation = useNavigation<PropsStack>();
  const route = useRoute();
  const { girl, dates } = route.params as Params;

  const rentalTotal = Number(dates.length * girl.rent.price)

  function handleConfirmSchedulingDetails() {
    navigation.navigate('SchedulingComplete', { name: 'SchedulingComplete' })
  }

  function handleBack() {
    navigation.dispatch(CommonActions.goBack())
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
    })
  }, [])

  return (
    <Container>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <BackButton onPress={handleBack} />
      </Header>

      <GirlImages>
        <ImageSlider imagesUrl={girl.photos} />
      </GirlImages>

      <Content>
        <Details>
          <Description>
            <Brand>{girl.brand}</Brand>
            <Name>{girl.name}</Name>
          </Description>

          <Rent>
            <Period>{girl.rent.period}</Period>
            <Price>R$ {girl.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {
            girl.details.map(accessory => (
              <Accessory key={accessory.type} name={accessory.name} icon={getDetailsIcon(accessory.type)} />
            ))
          }
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
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <Feather 
            name='chevron-right'
            size={RFValue(24)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>{`R$ ${girl.rent.price} x${dates.length} diárias`}</RentalPriceQuota>
            <RentalPriceTotal>R$ {rentalTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button title='Alugar agora' color={theme.colors.success} onPress={() => handleConfirmSchedulingDetails()} />
      </Footer>
    </Container>
  );
}