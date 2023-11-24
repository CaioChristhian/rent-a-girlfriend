import React, { useState } from 'react';
import { 
  StatusBar, 
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { useTheme } from 'styled-components';
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';

import { Button } from '../../../components/Button';
import { InputPassword } from '../../../components/InputPassword';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { PropsStack } from '../../../routes/models';
import { api } from '../../../services/api';

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle
} from './styles';


interface Params {
  user: {
    name: string;
    email: string;
    cpf: string;
  }
}

export function SignUpSecondStep(){
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const theme = useTheme();
  const navigation = useNavigation<PropsStack>();
  const route = useRoute();

  const { user } = route.params as Params;

  function handleBack() {
    navigation.dispatch(CommonActions.goBack())
  }

  async function handleRegister() {
    if(!password || !confirmPassword) {
      return Alert.alert('Informe a senha e a confirmação.')
    }
    if(password != confirmPassword) {
      return Alert.alert('As senhas não são iguais.')
    }

    await api.post('/users', {
      name: user.name,
      email: user.email,
      cpf: user.cpf,
      password
    })
    .then(() => {
      navigation.navigate('Confirmation', { 
        title: 'Conta Criada!',
        message: `Agora é só fazer login\ne aproveitar.`,
        nextScreenRoute: 'SignIn'
      })
    })
    .catch((error) => {
      console.log(error)
      Alert.alert('Opa', 'Não foi possível cadastrar :/')
    })
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
              onChangeText={setPassword}
              value={password}
            />
            <InputPassword 
              iconName='lock'
              placeholder='Repetir Senha'
              onChangeText={setConfirmPassword}
              value={confirmPassword}
            />
          </Form>

          <Button 
            color={theme.colors.success}
            title='Cadastrar'
            onPress={handleRegister}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}