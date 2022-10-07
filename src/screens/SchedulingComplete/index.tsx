import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import { ConfirmButton } from '../../components/ConfirmButton';
import { PropsStack } from '../../routes/models';

import LogoSvg from '../../assets/union.svg';
import DoneSvg from '../../assets/done.svg';

import {
  Container,
  Content,
  Title,
  Message,
  Footer
} from './styles';


export function SchedulingComplete(){
  const { width } = useWindowDimensions();
  const navigation = useNavigation<PropsStack>();

  function handleConfirmRental() {
    navigation.navigate('Home', { name: 'Home' })
  }

  return (
    <Container>
      <StatusBar 
        barStyle='light-content' 
        backgroundColor='transparent'
        translucent
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Namorada Alugada!</Title>

        <Message>
          Tenha um ótimo encontro, {'\n'}
          agora apenas aguarde a resposta da {'\n'}
          sua namorada de aluguel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title='OK' onPress={() => handleConfirmRental()} />
      </Footer>
    </Container>
  );
}