import React, {CSSProperties} from 'react';
import Modal, {Props} from "react-modal";
import { Container } from './styles';

const customStyles: CSSProperties = {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "300px",
    background: "#242424",
    transform: "translate(-50%, -50%)",
};

interface PropsModal extends Props {

}

const ModalAnnotation: React.FC<PropsModal> = ({
  isOpen = false, 
  ...rest}) => {
  return (
    <Modal
      isOpen={isOpen}
      style={{
        content: customStyles
      }}

    >
      <h1>Nova Anotação</h1>
      <input placeholder='Nome'/>
      <textarea />
    </Modal>
  );
}

export default ModalAnnotation;