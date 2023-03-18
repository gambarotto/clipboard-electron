import React, { useCallback, useState } from "react";
import { HiOutlineAnnotation } from "react-icons/hi";
import { MdOutlineCategory } from "react-icons/md";
import ItemList from "../../components/ItemList";
import { Container, MenuButton } from "./styles";
import ModalCategory from "../../components/ModalCategory";
import ModalAnnotation from "../../components/ModalAnnotation";

export interface AnnotationCategory {
  readonly color: string;
  readonly label: string;
  readonly value: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export interface PropsDataAnnotation {
  id?: number | null;
  name: string;
  content: string;
  category?: AnnotationCategory[] | null;
}
interface PropsDataCategory {
  id?: number | null;
  title: string;
  active: boolean;
  color: string;
}
const clearDataAnnotation = {
  id: null,
  name: "",
  content: "",
  category: [],
};
const data: PropsDataAnnotation[] = [
  {
    id: 1,
    name: "teste de anotação",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        including versions of Lorem Ipsum. FIMM`,
  },
  {
    id: 2,
    name: "anotação de nome muito grande",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        including versions of Lorem Ipsum. FIMM`,
  },
  {
    id: 3,
    name: "anotação",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        including versions of Lorem Ipsum. FIMM`,
  },
  {
    id: 4,
    name: "teste de anotação média",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        including versions of Lorem Ipsum. FIMM`,
  },
  {
    id: 5,
    name: "Senha poupatempo",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        including versions of Lorem Ipsum. FIMM`,
  },
  {
    id: 6,
    name: "reabrir teamviewer",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        including versions of Lorem Ipsum. FIMM`,
  },
];

const Home: React.FC = () => {
  const [isModalCategoryOpen, setIsModalCategoryOpen] = useState(false);
  const [isModalAnnotationOpen, setIsModalAnnotationOpen] = useState(false);
  const [dataAnnotation, setDataAnnotation] = useState<PropsDataAnnotation>({
    id: null,
    name: "",
    content: "",
    category: [],
  });
  const closeModalAnnotation = useCallback(() => {
    setDataAnnotation(clearDataAnnotation);
    setIsModalAnnotationOpen(false);
  }, []);
  const editDataModal = useCallback((item: PropsDataAnnotation) => {
    setDataAnnotation(item);
    setIsModalAnnotationOpen(true);
  }, []);

  const newAnnotation = useCallback(() => {
    if (dataAnnotation.id) setDataAnnotation(clearDataAnnotation);
    setIsModalAnnotationOpen(true);
  }, [dataAnnotation.id]);

  const saveDataAnnotation = useCallback((item: PropsDataAnnotation) => {
    console.log(item);
    setDataAnnotation(clearDataAnnotation);
  }, []);
  const saveDataCategory = useCallback((item: PropsDataCategory) => {
    console.log(item);
  }, []);

  return (
    <Container>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <ItemList item={item} setDataModal={editDataModal} />
          </li>
        ))}
      </ul>
      <MenuButton>
        <button className="main" type="button">
          Nova
        </button>
        <div className="menuContent">
          <button type="button" onClick={() => setIsModalCategoryOpen(true)}>
            <div className="icon">
              <MdOutlineCategory color="#242424" size={20} />
            </div>
            <p>Categoria</p>
          </button>
          <button type="button" onClick={newAnnotation}>
            <div className="icon">
              <HiOutlineAnnotation color="#242424" size={20} />
            </div>
            <p>Anotação</p>
          </button>
        </div>
      </MenuButton>
      <ModalCategory
        isOpen={isModalCategoryOpen}
        setIsOpen={setIsModalCategoryOpen}
        title=""
        color="#fff"
        setData={saveDataCategory}
      />
      <ModalAnnotation
        isOpen={isModalAnnotationOpen}
        setIsOpen={closeModalAnnotation}
        data={dataAnnotation}
        setData={saveDataAnnotation}
      />
    </Container>
  );
};

export default Home;
