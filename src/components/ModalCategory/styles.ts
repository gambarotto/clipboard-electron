import { lighten, shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  //opacity: 0.5;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  z-index: 20;
  background: #242424;

  .modal {
    width: 300px;
    height: 200px;

    background-color: #333;

    border-radius: 8px;

    .containerTitle {
      height: 50px;
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 14px;
      font-weight: bold;

      border-radius: 8px 8px 0px 0px;

      background: ${shade(0.5, "#333")};
    }
    .containerInput {
      padding: 5px;
      margin: 0 10px;
    }
    .containerInput input {
      flex: 1;
      width: 100%;
      height: 40px;

      padding: 0px 5px;

      background: ${lighten(0.1, "#333")};
      color: #f4ede8;
      font-size: 16px;
      border: 0;
      border-radius: 4px;
      &::placeholder {
        color: #666360;
      }
    }
  }


`;
