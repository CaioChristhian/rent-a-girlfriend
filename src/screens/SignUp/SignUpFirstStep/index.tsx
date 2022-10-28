import React from 'react';
import { 
  StatusBar, 
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { PropsStack } from '../../../routes/models';

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle
} from './styles';

import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';

export function SignUpFirstStep(){
  const navigation = useNavigation<PropsStack>();

  function handleBack() {
    navigation.dispatch(CommonActions.goBack())
  }

  function handleNextStep() {
    navigation.navigate('SignUpSecondStep', { name: 'SignUpSecondStep' })
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar 
            barStyle='dark-content'
            backgroundColor='transparent'
            translucent
          />
          <Header>
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>

          <Title>
            Crie sua {'\n'}conta
          </Title>
          <SubTitle>
            Faça seu Cadastro de {'\n'}
            forma rápida e fácil
          </SubTitle>

          <Form>
            <FormTitle>1. Dados</FormTitle>
            <Input 
              iconName='user'
              placeholder='Nome'
            />
            <Input 
              iconName='mail'
              placeholder='E-mail'
              keyboardType='email-address'
            />
            <Input 
              iconName='credit-card'
              placeholder='CPF'
              keyboardType='numeric'
            />
          </Form>

          <Button onPress={handleNextStep} title='Próximo' />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}