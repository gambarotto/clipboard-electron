import React from "react";
import { FiEdit } from "react-icons/fi";
import { useTheme } from "styled-components";

import { Container } from "./styles";

const ItemList: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <div className="hoverAnnotation">
        <div className="containerName">
          <div className="dot" />
          <p>Nome anotação</p>
        </div>

        <button type="button" onClick={() => {}}>
          <FiEdit color={theme.colors.accent_color} />
        </button>
      </div>
      <p className="dropdown-content">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        including versions of Lorem Ipsum. FIMM
      </p>
    </Container>
  );
};

export default ItemList;
