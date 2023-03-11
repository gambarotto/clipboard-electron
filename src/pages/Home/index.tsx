import React from 'react';
import ItemList from '../../components/ItemList';
import { HiOutlineAnnotation } from "react-icons/hi";
import { MdOutlineCategory } from "react-icons/md";
import { Container, MenuButton } from "./styles";
import ModalCategory from '../../components/ModalCategory';
import ModalAnnotation from '../../components/ModalAnnotation';

const Home: React.FC = () => {
  return (
    <Container>
      <ItemList />
      <ItemList />
      <ItemList />
      <ItemList />
      <MenuButton>
        <button className="main">Nova</button>
        <div className="menuContent">
          <button>
            <div className="icon">
              <MdOutlineCategory color="#242424" size={20} />
            </div>
            <p>Categoria</p>
          </button>
          <button>
            <div className="icon">
              <HiOutlineAnnotation color="#242424" size={20} />
            </div>
            <p>Anotação</p>
          </button>
        </div>
      </MenuButton>
      <ModalCategory />
      <ModalAnnotation isOpen={false}/>
    </Container>
  );
}

export default Home