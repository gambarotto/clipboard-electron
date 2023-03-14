import styled, { css } from 'styled-components';

interface PropsContainer {
  color: string;
  selected: boolean;
}

export const Container = styled.div<PropsContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({selected}) =>  selected ? css`` : css``};
`;
