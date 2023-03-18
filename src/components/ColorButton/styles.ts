import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface PropsContainer {
  color: string;
  selected: boolean;
}

export const Container = styled.div<PropsContainer>`
  display: flex;
  justify-content: center;
  align-items: center;

  border: solid 1px #373737;
  ${({selected, color}) =>  selected && css`
    border: solid 1px ${color};
  `};

  border-radius: 4px;

  cursor: pointer;
  &:not(first-child){
    margin-left: 4px;
  }
  div {
    display: flex;
    width: 28px;
    height: 28px;
    border-radius: 4px;
    background: ${({color}) => color};
  }
`;
