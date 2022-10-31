import React, { useState } from 'react';
import { 
  StatusBar, 
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import * as Yup from 'yup';
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCPF] = useState('');

  const navigation = useNavigation<PropsStack>();

  function handleBack() {
    navigation.dispatch(CommonActions.goBack())
  }

  async function handleNextStep() {
    try {
      const schema = Yup.object().shape({
        cpf: Yup.string()
        .required('CPF é obrigatório'),
        email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail é obrigatório'),
        name: Yup.string()
        .required('Nome é obrigatório')
      })

      const data = { name, email, cpf }
      await schema.validate(data);

      navigation.navigate('SignUpSecondStep', { name: 'SignUpSecondStep', user: data })
    } catch (error) {
      if(error instanceof Yup.ValidationError) {
        return Alert.alert('Opa', error.message)
      }
    }
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
              onChangeText={setName}
              value={name}
            />
            <Input 
              iconName='mail'
              placeholder='E-mail'
              keyboardType='email-address'
              onChangeText={setEmail}
              value={email}
            />
            <Input 
              iconName='credit-card'
              placeholder='CPF'
              keyboardType='numeric'
              onChangeText={setCPF}
              value={cpf}
            />
          </Form>

          <Button onPress={handleNextStep} title='Próximo' />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}