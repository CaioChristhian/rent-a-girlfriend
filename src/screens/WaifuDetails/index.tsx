import React from 'react';
import { BackButton } from '../../components/BackButton';

import {
  Container, Header
} from './styles';

export function WaifuDetails(){
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
    </Container>
  );
}