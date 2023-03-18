import React, { useCallback, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { IoCloseSharp, IoColorPaletteOutline } from "react-icons/io5";
import ColorButton from "../ColorButton";
import ModalColorPicker from "../ModalColorPicker";
import { Container } from "./styles";

interface PropsData {
  id?: number | null;
  title: string;
  active: boolean;
  color: string;
}
interface Props {
  id?: number;
  title?: string;
  active?: boolean;
  color: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setData: (data: PropsData) => void;
}
const colors = [
  {
    color: "#8ef9f3",
    selected: false,
  },
  {
    color: "#06ba63",
    selected: false,
  },
  {
    color: "#a50104",
    selected: false,
  },
  {
    color: "#fcba04",
    selected: false,
  },
  {
    color: "#e63946",
    selected: true,
  },
  {
    color: "#712f79",
    selected: false,
  },
];
const ModalCategory: React.FC<Props> = ({
  id,
  title,
  active = true,
  color = "#ffff",
  isOpen,
  setIsOpen,
  setData,
}) => {
  const [titleCategory, setTitleCategory] = useState(title);
  const [colorCategory, setColorCategory] = useState(color);
  const [isOpenColorPicker, setIsOpenColorPicker] = useState(false);
  const [isActive, setIsActive] = useState(active);

  const handleTitle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitleCategory(event.target.value);
    },
    []
  );
  const handleColor = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setColorCategory(event.target.value);
    },
    []
  );

  if (!isOpen) {
    return null;
  }
  return (
    <Container>
      <a className="icon" onClick={() => setIsOpen(false)}>
        <IoCloseSharp />
      </a>
      <div className="modal">
        <div className="containerTitle">Nova Categoria</div>
        <div className="containerContent">
          <div className="containerInput">
            <input
              type="text"
              name="name"
              placeholder="Nome da Categoria"
              value={titleCategory}
              onChange={handleTitle}
            />
          </div>
          <div className="containerColorPiker">
            Selecione uma cor
            <div className="containerColors">
              <div className="containerColorsButton">
                {colors.map((item) => (
                  <ColorButton key={item.color} colorData={item} />
                ))}
              </div>
              <button
                className="buttonMoreColor"
                type="button"
                onClick={() => setIsOpenColorPicker(!isOpenColorPicker)}
              >
                <IoColorPaletteOutline color="#c1c1c1" />
              </button>
            </div>
            {isOpenColorPicker && (
              <ModalColorPicker
                color={colorCategory}
                setColorCategory={setColorCategory}
                setIsOpened={setIsOpenColorPicker}
              />
            )}
          </div>
        </div>
        <a
          className="buttonn"
          onClick={() =>
            setData({
              id: id,
              title: titleCategory || "",
              active: isActive,
              color: colorCategory || "",
            })
          }
        >
          Salvar
        </a>
      </div>
    </Container>
  );
};

export default ModalCategory;
