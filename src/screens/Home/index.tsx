import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from '@expo/vector-icons'; //name="face-woman-shimmer"

import Logo from '../../assets/logo.svg';

import { api } from '../../services/api';
import { GirlDTO } from '../../dtos/GirlDTO';
import { PropsStack } from '../../routes/models';

import { Waifu } from '../../components/Waifu';
import { Load } from '../../components/Load';

import {
  Container, Header,
  TotalWaifus, HeaderContent,
  WaifuList
} from './styles';

export function Home(){
  const navigation = useNavigation<PropsStack>()
  const [cars, setCars] = useState<GirlDTO[]>([])
  const [load, setLoad] = useState(true)

  function handleWaifuDetails(girl: GirlDTO) {
    navigation.navigate("WaifuDetails", { name: 'WaifuDetails', girl: girl })
  }

  useEffect(() => {
    async function fetchGirls() {
      try {
        const response = await api.get('/girls')
        setCars(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoad(false)
      }
    }

    fetchGirls()
  }, [])

  return (
    <Container>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalWaifus>
            Total de 6 waifus
          </TotalWaifus>
        </HeaderContent>
      </Header>

      { load ? <Load /> : 
        <WaifuList
          data={cars}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Waifu data={item} onPress={() => handleWaifuDetails(item)} />}
        /> 
      }
    </Container>
  );
}