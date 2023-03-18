/* eslint-disable no-unused-vars */
import React from "react";
import { FiEdit } from "react-icons/fi";
import { useTheme } from "styled-components";
import { PropsDataAnnotation } from "../../pages/Home";

import { Container } from "./styles";

interface Props {
  item: PropsDataAnnotation;
  setDataModal: (data: PropsDataAnnotation) => void;
}

const ItemList: React.FC<Props> = ({ item, setDataModal }) => {
  const theme = useTheme();

  return (
    <Container>
      <div className="hoverAnnotation">
        <div className="containerName">
          <div className="dot" />
          <p>{item.name}</p>
        </div>

        <button type="button" onClick={() => setDataModal(item)}>
          <FiEdit color={theme.colors.accent_color} />
        </button>
      </div>
      <p className="dropdown-content">{item.content}</p>
    </Container>
  );
};

export default ItemList;
