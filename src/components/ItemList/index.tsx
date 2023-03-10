import React from 'react';
import { FiEdit } from "react-icons/fi";

import { Container } from "./styles";

const ItemList: React.FC = () => {
  return (
    <Container>
      <div className='hoverAnnotation'>
        <div className='containerName'>
          <div className='dot'/>
          <p>Nome anotação</p>
        </div>
  
        <a onClick={() => {}}>
          <FiEdit color="#e4ff1a" />
        </a>
      </div>
      <p className="dropdown-content">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        including versions of Lorem Ipsum. FIMM
      </p>
    </Container>
  );
}

export default ItemList;