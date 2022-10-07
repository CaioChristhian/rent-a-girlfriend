import React from 'react';
import { useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/union.svg';
import DoneSvg from '../../assets/done.svg';

import {
  Container,
  Content,
  Title,
  Message,
  Footer
} from './styles';
import { ConfirmButton } from '../../components/ConfirmButton';

export function SchedulingComplete(){
  const { width } = useWindowDimensions();

  return (
    <Container>
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
        <ConfirmButton title='OK' />
      </Footer>
    </Container>
  );
}