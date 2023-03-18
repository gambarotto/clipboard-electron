import React from "react";

import { Container } from "./styles";

interface Props {
  colorData: {
    color: string;
    selected: boolean;
  };
}

const ColorButton: React.FC<Props> = ({ colorData: { color, selected } }) => (
  <Container color={color} selected={selected}>
    <div />
  </Container>
);

export default ColorButton;
