import React from 'react';

import { Container } from './styles';

interface Props {
  colorData: {
    color: string;
    selected: boolean;
  }
}

const ColorButton: React.FC<Props> = ({ colorData: { color, selected } }) => {
  return (
    <Container color={color} selected={selected}>
      <div>

      </div>
    </Container>
  )
}

export default ColorButton;