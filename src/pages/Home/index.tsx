import React from 'react';
import ItemList from '../../components/ItemList';

import { Container, MenuButton } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <ItemList />
      <ItemList />
      <ItemList />
      <ItemList />
      <MenuButton>
        <button className='main'>Nova</button>
        <div className="menuContent">
          <button>Categoria</button>
          <button>Anotação</button>
        </div>
      </MenuButton>
    </Container>
  );
}

export default Home;