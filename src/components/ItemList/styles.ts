import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: relative;
  width: 100%;

  background-color: #333;

  border-radius: 4px;

  div.hoverAnnotation {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 4px 5px;
  }
  div.containerName {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
  }
  div.dot {
    width: 3px;
    height: 3px;
    border-radius: 2px;
    background: #f80;
    margin-right: 10px;
  }
  div > p {
    font-size: 14px;

  }
  a {
    display: flex;
    width: 30px;
    cursor: pointer;
    border-width: 0px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
  }

  &:not(first-child) {
    margin-top: 5px;
  }
  & p.dropdown-content {
    display: none;
    min-width: 160px;
    padding: 0px 5px;
    font-size: 12px;
    letter-spacing: 1px;
    color: ${shade(0.5,'#fff')};
  }
    &:hover .dropdown-content {
      display: block;
    }
`
