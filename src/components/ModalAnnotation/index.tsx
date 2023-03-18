/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useTheme } from "styled-components";
import { AnnotationCategory, PropsDataAnnotation } from "../../pages/Home";
import SelectElement from "../SelectElement";
import { Container } from "./styles";

interface Props {
  data: PropsDataAnnotation;
  isOpen: boolean;
  setIsOpen: () => void;
  setData: (data: PropsDataAnnotation) => void;
}

const ModalAnnotation: React.FC<Props> = ({
  data: { id, name, content, category },
  isOpen,
  setIsOpen,
  setData,
}) => {
  const [nameAnnotation, setNameAnnotation] = useState(name);
  const [contentAnnotation, setContentAnnotation] = useState(content);
  const [categoryAnnotation, setCategoryAnnotation] = useState<
    AnnotationCategory[]
  >([]);
  const theme = useTheme();

  useEffect(() => {
    setNameAnnotation(name);
    setContentAnnotation(content);
  }, [category, content, id, name]);

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

  if (!isOpen) {
    return null;
  }
  return (
    <Container>
      <button type="button" className="icon" onClick={setIsOpen}>
        <IoCloseSharp color={theme.colors.text} />
      </button>
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
            <SelectElement setCategoryAnnotation={setCategoryAnnotation} />
          </div>
        </div>
        <button
          type="button"
          className="button"
          onClick={() =>
            setData({
              id,
              name: nameAnnotation || "",
              content: contentAnnotation || "",
              category: categoryAnnotation,
            })
          }
        >
          Salvar
        </button>
      </div>
    </Container>
  );
};

export default ModalAnnotation;
