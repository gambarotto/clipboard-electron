import React, { useCallback, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { IoCheckmarkOutline } from "react-icons/io5";
import { Container } from './styles';

interface Props {
  color: string;
  setColorCategory: (color: string) => void;
  setIsOpened: (state: boolean) => void;
}

const ModalColorPicker: React.FC<Props> = ({color, setColorCategory, setIsOpened}) => {
  const [selectedColor, setSelectedColor] = useState(color);

  const setColor = useCallback(() => {
    setColorCategory(selectedColor);
    setIsOpened(false);
  }, [selectedColor]);

  return (
    <Container>
      <HexColorPicker 
        color={selectedColor} 
        onChange={setSelectedColor} />
      <button onClick={setColor}>
        <IoCheckmarkOutline color="#c1c1c1" />
      </button>
    </Container>
  );
}

export default ModalColorPicker;