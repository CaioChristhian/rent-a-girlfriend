import React from 'react';
import { useTheme } from 'styled-components';

import {
  Container,
  Title
} from './styles';

interface Props {
  title: string;
  color?: string;
  onPress?: () => void;
}

export function Button({
  title,
  color,
  ...rest
}: Props){
  const theme = useTheme()

  return (
     <Container {...rest} color={color ? color : theme.colors.main}>
      <Title>{title}</Title>
     </Container>
  );
}