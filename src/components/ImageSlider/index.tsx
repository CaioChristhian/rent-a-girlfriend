import React, { useState, useRef } from 'react';
import { ViewToken } from 'react-native';

import { Bullet } from '../Bullet';

import {
  Container,
  ImageIndexes,
  GirlImageWrapper,
  GirlImage,
  CardSlider
} from './styles';

export interface PhotoProps {
  id: string;
  photo: string;
}

export interface ImageSliderProps {
  imagesUrl: PhotoProps[];
};

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
};

export function ImageSlider({imagesUrl}: ImageSliderProps){
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });

  return (
    <Container>
      <ImageIndexes>
        {imagesUrl.map((item, index) => (
          <Bullet key={item.id} active={index === imageIndex} />
        ))}        
      </ImageIndexes>

      <CardSlider 
        pagingEnabled={true}
        data={imagesUrl}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GirlImageWrapper>
            <GirlImage 
              source={{ uri: item.photo }}
            />
          </GirlImageWrapper>
        )}
        onViewableItemsChanged={indexChanged.current}
      />
    </Container>
  );
}