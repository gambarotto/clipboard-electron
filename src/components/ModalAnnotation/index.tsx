import React, { useCallback, useState } from 'react';
import SelectElement from '../SelectElement';
import {IoCloseSharp} from 'react-icons/io5';
import { Container } from './styles';

interface PropsData {
  id?: number | null;
  name: string;
  content: string;
}

interface Props {
  id?: number;
  name?: string;
  content?: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setData: (data: PropsData) => void;
}

const ModalAnnotation: React.FC<Props> = ({ id, name, content, isOpen, setIsOpen, setData }) => {
  const [nameAnnotation,setNameAnnotation] = useState(name);
  const [contentAnnotation,setContentAnnotation] = useState(content);
  
  const handleName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNameAnnotation(event.target.value);
    },
    []
  );
  const handleContent = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContentAnnotation(event.target.value);
    },
    []
  );

  if(!isOpen) {
    return null;
  }
  return (
    <Container>
      <a className="icon" onClick={() => setIsOpen(false)}>
        <IoCloseSharp />
      </a>
      <div className="modal">
        <div className="containerTitle">Nova Anotação</div>
        <div className="containerContent">
          <div className="containerInput">
            <input
              type="text"
              name="name"
              placeholder="Nome da anotação"
              value={nameAnnotation}
              onChange={handleName}
            />
          </div>
          <div className="containerTextArea">
            <textarea
              name="content"
              spellCheck
              placeholder="Digite aqui..."
              value={contentAnnotation}
              onChange={handleContent}
            />
          </div>
          <div className="containerSelector">
            <SelectElement />
          </div>
        </div>
        <a
          className="buttonn"
          onClick={() =>
            setData({
              id: id,
              name: nameAnnotation || '',
              content: contentAnnotation || '',
            })
          }
        >
          Salvar
        </a>
      </div>
    </Container>
  );
}

export default ModalAnnotation;