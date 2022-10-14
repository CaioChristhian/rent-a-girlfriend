import React from 'react';
import { useTheme } from 'styled-components';
import { CommonActions, useNavigation } from '@react-navigation/native';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import { PropsStack } from '../../routes/models';


import ArrowSvg from '../../assets/arrow-right.svg';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValueWrapper,
  DateValue,
  Content,
  Footer
} from './styles';


export function Scheduling(){
  const theme = useTheme();
  const navigation = useNavigation<PropsStack>();

  function handleConfirmScheduling() {
    navigation.navigate('SchedulingDetails', { name: 'SchedulingDetails' })
  }

  function handleBack() {
    navigation.dispatch(CommonActions.goBack())
  }

  return (
    <Container>
      <Header>
        <BackButton 
          onPress={handleBack}
          color={theme.colors.shape}
        />

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValueWrapper selected={false}>
              <DateValue>
                16/06/2021
              </DateValue>
            </DateValueWrapper>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValueWrapper selected={false}>
              <DateValue>
                18/06/2021
              </DateValue>
            </DateValueWrapper>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={() => handleConfirmScheduling()} />
      </Footer>
    </Container>
  );
}