import styled from 'styled-components';
import {shade} from 'polished';
export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 5px;

  .menu > button {
    
  }
`;
export const MenuButton = styled.div`
  .main {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background-color: #e4ff1a;
    color: #242424;
    border: 0px;
    border-radius: 4px;
  }

  .menuContent {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    bottom: 35px;
    left: 0;
    padding: 0px 10px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  .menuContent > button {
    border-radius: 15px;
    background-color: #e4ff1a;
    height: 30px;
    border: 0px;
    margin-bottom: 3px;

    &:hover {
      background: ${shade(0.4, '#e4ff1a')}
    }
  }
`;