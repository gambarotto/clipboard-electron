import React from 'react';

import { Container } from './styles';

const ModalCategory: React.FC = () => {
  return (
    <Container>
      <div className='modal'>
        <div className='containerTitle'>
          Nova Categoria
        </div>
        <div className='containerContent'>
          <div className='containerInput'>
            <input type='text' />
          </div>
          <div className='containerTextArea'>
            <textarea />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ModalCategory;