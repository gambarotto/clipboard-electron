import React, { useCallback, useState } from "react";
import { HiOutlineAnnotation } from "react-icons/hi";
import { MdOutlineCategory } from "react-icons/md";
import ItemList from "../../components/ItemList";
import { Container, MenuButton } from "./styles";
import ModalCategory from "../../components/ModalCategory";
import ModalAnnotation from "../../components/ModalAnnotation";

interface PropsDataAnnotation {
  id?: number | null;
  name: string;
  content: string;
}
interface PropsDataCategory {
  id?: number | null;
  title: string;
  active: boolean;
  color: string;
}
const Home: React.FC = () => {
  const [isModalCategoryOpen, setIsModalCategoryOpen] = useState(false);
  const [isModalAnnotationOpen, setIsModalAnnotationOpen] = useState(false);
  const [dataAnnotation, setDataAnnotation] = useState<PropsDataAnnotation>(
    {} as PropsDataAnnotation
  );
  const [selectedAnnotation, setSelectedAnnotation] =
    useState<PropsDataAnnotation>({
      name: "",
      content: "",
    });
  const [dataCategory, setDataCategory] = useState<PropsDataCategory>(
    {} as PropsDataCategory
  );
  const saveDataAnnotation = useCallback((data: PropsDataAnnotation) => {
    console.log(data);
  }, []);
  const saveDataCategory = useCallback((data: PropsDataCategory) => {
    console.log(data);
  }, []);
  return (
    <Container>
      <ItemList />
      <ItemList />
      <ItemList />
      <ItemList />
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
          <button type="button" onClick={() => setIsModalAnnotationOpen(true)}>
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
        setIsOpen={setIsModalAnnotationOpen}
        name=""
        content=""
        setData={saveDataAnnotation}
      />
    </Container>
  );
};

export default Home;
