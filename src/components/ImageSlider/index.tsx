import React from 'react';

import {
  Container,
  ImageIndexes,
  ImageIndex,
  GirlImageWrapper,
  GirlImage
} from './styles';

interface Props {
  imagesUrl: string[];
}

export function ImageSlider({imagesUrl}: Props){
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <GirlImageWrapper>
        <GirlImage 
          source={{ uri: imagesUrl[0] }}
          
        />
      </GirlImageWrapper>

    </Container>
  );
}