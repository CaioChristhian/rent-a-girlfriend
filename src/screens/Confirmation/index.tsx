import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
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

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

export function Confirmation(){
  const { width } = useWindowDimensions();

  const navigation = useNavigation<PropsStack>();
  const route = useRoute();
  const { title, message, nextScreenRoute } = route.params as Params;

  function handleConfirm() {
    if (nextScreenRoute === 'SignIn') {
      navigation.navigate('SignIn', { name: 'SignIn' })
    }
    if (nextScreenRoute === 'Home') {
      navigation.navigate('Home', { name: 'Home' })
    }
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
        <Title>{title}</Title>

        <Message>
          {message}
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title='OK' onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}