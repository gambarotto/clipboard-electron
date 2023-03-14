import { lighten, shade } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  position: absolute;
  bottom: 0;
  left: 0;

  height: 100%;
  width: 100%;
 

  background: rgba(0,0,0,0.7);

  .icon {
    position: absolute;
    right: 15px;
    top: 15px;

    width: 40px;
    height: 40px;
    border-radius: 20px;

    background: #333;

    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 2px 7px 17px -3px rgba(0,0,0,0.75);

    cursor: pointer;
    &:hover {
      background: ${shade(0.1, "#242424")};
      box-shadow: 2px 20px 36px -3px rgba(0,0,0,0.75);
    }
  }
  .modal {
    width: 300px;
    height: auto;

    background-color: #333;

    border-radius: 8px;

    margin-top: 100px;
    padding-bottom: 10px;

    z-index: 10;
    box-shadow: 2px 7px 17px -3px rgba(0,0,0,0.75);
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
      padding: 10px 5px;
      margin: 0 10px;
    }
    .containerInput input {
      flex: 1;
      width: 100%;
      height: 35px;

      padding: 0px 10px;

      background: ${lighten(0.1, "#333")};
      color: #f4ede8;
      font-size: 12px;
      border: 0;
      border-radius: 4px;
      &:focus {
        outline: solid 1.5px ${shade(0.5, "#333")};
      }
    }

    .containerColorPiker {
      display: flex;
      justify-content: center;
      align-items: center;

      margin-top: 15px;
    }
    .buttonn {
      display: flex;
      justify-content: center;
      align-items: center;

      margin: 5px 15px;
      margin-top: 50px;

      background-color: #e4ff1a;
      
      height: 40px;
      color: #242424;

      border-radius: 8px;

      cursor: pointer;
      box-shadow: 2px 7px 17px -3px rgba(0,0,0,0.75);

      &:hover {
        background: ${shade(0.1, "#e4ff1a")};
      }
    }
  }


`;
