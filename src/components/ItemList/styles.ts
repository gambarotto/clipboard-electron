import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: relative;
  width: 100%;

  background-color: #333;

  border-radius: 4px;
  height: 30px;
  transition: height 5s;
  
  div.hoverAnnotation {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 4px 5px;
    height: 30px;
    overflow: hidden;
    
    a {
      opacity: 0;
      transition: opacity 1s;
    }
    &:hover a{
      opacity: 1;
    }
  }

  div.containerName {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    height: 100%;
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
    opacity: 0;
    overflow: hidden;
    visibility: hidden;

    min-width: 160px;
    padding: 0px 15px;
    padding-bottom: 15px;
    font-size: 12px;
    letter-spacing: 1px;
    color: ${shade(0.3,'#fff')};
    transition: opacity 0.5s;
  }
  &:hover {
    height: auto;
  }
  &:hover p.dropdown-content {
    opacity: 1;
    visibility: visible;
  }
`
