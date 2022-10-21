import { useNavigation, CommonActions } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';

import { BackButton } from '../../components/BackButton';
import { Load } from '../../components/Load';
import { Waifu } from '../../components/Waifu';
import { GirlDTO } from '../../dtos/GirlDTO';
import { PropsStack } from '../../routes/models';
import { api } from '../../services/api';

import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  GirlWrapper,
  GirlFooter,
  GirlFooterTitle,
  GirlFooterPeriod,
  GirlFooterDate
} from './styles';

interface GirlProps {
  id: string;
  user_id: string;
  girl: GirlDTO;
  startDate: string;
  endDate: string;
}

export function MyGirls(){
  const theme = useTheme();
  const [girls, setGirls] = useState<GirlProps[]>([])
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation<PropsStack>();

  function handleBack() {
    navigation.dispatch(CommonActions.goBack())
  }

  useEffect(() => {
    async function fetchGirls() {
      try {
        const response = await api.get('/schedules_byuser?user_id=1');
        setGirls(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchGirls();
  }, [])

  return (
     <Container>
      <Header>
        <StatusBar 
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
        <BackButton 
          onPress={handleBack}
          color={theme.colors.shape}
        />
        

        <Title>
          Sempre trate {'\n'}
          bem sua namorada {'\n'}
          de aluguel
        </Title>

        <SubTitle>
          Conforto, segurança e privacidade.
        </SubTitle>
      </Header>
      { loading ? <Load /> : 
        <Content>
        <Appointments>
          <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
          <AppointmentsQuantity>{girls.length}</AppointmentsQuantity>
        </Appointments>

        <FlatList 
          data={girls}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <GirlWrapper>
              <Waifu data={item.girl} />
              <GirlFooter>
                <GirlFooterTitle>Período</GirlFooterTitle>
                <GirlFooterPeriod>
                  <GirlFooterDate>{item.startDate}</GirlFooterDate>
                  <AntDesign 
                    name='arrowright'
                    size={20}
                    color={theme.colors.success}
                    style={{ marginHorizontal: 10 }}
                  />
                  <GirlFooterDate>{item.endDate}</GirlFooterDate>
                </GirlFooterPeriod>
              </GirlFooter>
            </GirlWrapper>
          )}
        />
        </Content>
       }
     </Container>
  );
}