import React from 'react';
import { StatusBar } from 'react-native';
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';
import { PropsStack } from '../../routes/models';
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
  About,
  Accessories,
  Footer
} from './styles';

interface Params {
  girl: GirlDTO;
}

export function WaifuDetails(){
  const navigation = useNavigation<PropsStack>();
  const route = useRoute();
  const { girl } = route.params as Params;

  function handleConfirmRental() {
    navigation.navigate('Scheduling', { name: 'Scheduling' })
  }
  
  function handleBack() {
    navigation.dispatch(CommonActions.goBack())
  }

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
            girl.details.map(detail => (
              <Accessory 
                key={detail.type}
                name={detail.name}
                icon={getDetailsIcon(detail.type)} 
              />
            ))
          }
        </Accessories>

        <About>{girl.about}</About>
      </Content>

      <Footer>
        <Button title='Escolher período do aluguel' onPress={() => handleConfirmRental()} />
      </Footer>
    </Container>
  );
}
