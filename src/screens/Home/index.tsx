import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { PropsStack } from '../../routes/models';
import { Waifu } from '../../components/Waifu';

import {
  Container, Header,
  TotalWaifus, HeaderContent,
  WaifuList
} from './styles';

export function Home(){
  const navigation = useNavigation<PropsStack>()

  const waifuDataOne = {
    brand: 'Kanojo',
    name: 'Mizuhara Chizuru',
    rent: {
      period: 'ao dia',
      price: 500
    },
    thumbnail: 'https://64.media.tumblr.com/0f18a9079f39b8fb14c9d0677139a654/49952d61b86e3226-49/s1280x1920/cc2b62044b8d6a3147466710000d2241d82afed1.jpg'
  }
  const waifuDataTwo = {
    brand: 'One piece',
    name: 'Nico Robin',
    rent: {
      period: 'ao dia',
      price: 180
    },
    thumbnail: 'https://i.pinimg.com/736x/f0/83/5e/f0835ed43a4fa8063f38490aa04d396b.jpg'
  }

  function handleWaifuDetails() {
    navigation.navigate("WaifuDetails", { name: 'WaifuDetails' })
  }

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

      <WaifuList
        data={[1,2,3,4,5,6]}
        keyExtractor={item => String(item)}
        renderItem={({item}) => <Waifu data={waifuDataOne} onPress={handleWaifuDetails} />}
      />
     </Container>
  );
}