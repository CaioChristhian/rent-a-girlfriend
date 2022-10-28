import React from 'react';
import { 
  StatusBar, 
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useTheme } from 'styled-components';
import { CommonActions, useNavigation } from '@react-navigation/native';

import { Button } from '../../../components/Button';
import { InputPassword } from '../../../components/InputPassword';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle
} from './styles';


export function SignUpSecondStep(){
  const theme = useTheme();
  const navigation = useNavigation();

  function handleBack() {
    navigation.dispatch(CommonActions.goBack())
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
              <Bullet />
              <Bullet active />
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
            <FormTitle>2. Senha</FormTitle>
            
            <InputPassword 
              iconName='lock'
              placeholder='Senha'
            />
            <InputPassword 
              iconName='lock'
              placeholder='Repetir Senha'
            />
          </Form>

          <Button 
            color={theme.colors.success}
            title='Cadastrar' 
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}