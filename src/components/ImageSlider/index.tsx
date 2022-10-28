import React, { useState, useRef } from 'react';
import { ViewToken } from 'react-native';

import {
  Container,
  ImageIndexes,
  ImageIndex,
  GirlImageWrapper,
  GirlImage,
  CardSlider
} from './styles';

export interface ImageSliderProps {
  imagesUrl: string[];
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
          <ImageIndex key={item} active={index === imageIndex} />
        ))}        
      </ImageIndexes>

      <CardSlider 
        pagingEnabled={true}
        data={imagesUrl}
        keyExtractor={key => key}
        renderItem={({ item }) => (
          <GirlImageWrapper>
            <GirlImage 
              source={{ uri: item }}
            />
          </GirlImageWrapper>
        )}
        onViewableItemsChanged={indexChanged.current}
      />

    </Container>
  );
}