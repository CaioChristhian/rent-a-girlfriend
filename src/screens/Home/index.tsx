import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

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

  const waifuDataOne = {
    brand: 'Kanojo',
    name: 'Mizuhara Chizuru',
    rent: {
      period: 'ao dia',
      price: 500
    },
    thumbnail: 'https://64.media.tumblr.com/0f18a9079f39b8fb14c9d0677139a654/49952d61b86e3226-49/s1280x1920/cc2b62044b8d6a3147466710000d2241d82afed1.jpg'
  }

  function handleWaifuDetails() {
    navigation.navigate("WaifuDetails", { name: 'WaifuDetails' })
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
          renderItem={({item}) => <Waifu data={item} onPress={handleWaifuDetails} />}
        /> 
      }

      
    </Container>
  );
}