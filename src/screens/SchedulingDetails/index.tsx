import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { Alert, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';

import { getPlatformDate } from '../../utils/getPlatformDate';
import { api } from '../../services/api';
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

interface Params {
  girl: GirlDTO;
  dates: string[];
}

interface RentalPeriod {
  start: string;
  end: string;
}

export function SchedulingDetails(){
  const [loading, setLoading] = useState(false);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

  const theme = useTheme();
  const navigation = useNavigation<PropsStack>();
  const route = useRoute();
  const { girl, dates } = route.params as Params;

  const rentalTotal = Number(dates.length * girl.price)

  async function handleConfirmSchedulingDetails() {
    const schedulesByGirl = await api.get(`/schedules_bygirls/${girl.id}`);

    const unavailable_dates = [
      ...schedulesByGirl.data.unavailable_dates,
      ...dates
    ]

    api.post(`/schedules_byuser`, {
      user_id: 1,
      girl,
      startDate: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      endDate: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy')
    })

    api.put(`/schedules_bygirls/${girl.id}`, {
      id: girl.id,
      unavailable_dates
    })
    .then(() =>  {
      navigation.navigate('Confirmation', {
        title: 'Namorada Alugada!',
        message: `Tenha um ótimo encontro,\n agora apenas aguarde a resposta da\n sua namorada de aluguel.`,
        nextScreenRoute: 'Home'
      })
    })
    .catch(() => {
      setLoading(false);
      Alert.alert('Não foi possível confirmar o agendamento.');
    })
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
            <Period>{girl.period}</Period>
            <Price>R$ {girl.price}</Price>
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
            <RentalPriceQuota>{`R$ ${girl.price} x${dates.length} diárias`}</RentalPriceQuota>
            <RentalPriceTotal>R$ {rentalTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
    
      <Footer>
        <Button 
          title='Alugar agora' 
          color={theme.colors.success} 
          onPress={handleConfirmSchedulingDetails} 
          enabled={!loading}
          loading={loading}
        />
      </Footer>
    </Container>
  );
}