import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  position: absolute;
  bottom: 0;
  left: 0;

  height: 100%;
  width: 100%;

  background: rgba(0, 0, 0, 0.7);

  .icon {
    position: absolute;
    right: 15px;
    top: 15px;

    width: 40px;
    height: 40px;
    border-radius: 20px;

    background: ${({ theme }) => theme.colors.background};

    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 2px 7px 17px -3px rgba(0, 0, 0, 0.75);

    cursor: pointer;
    &:hover {
      background: ${shade(0.1, "#242424")};
      box-shadow: 2px 20px 36px -3px rgba(0, 0, 0, 0.75);
    }
  }
  .modal {
    max-width: 300px;
    min-width: 280px;
    height: auto;

    background-color: ${({ theme }) => theme.colors.background};

    border-radius: 8px;

    margin-top: 100px;
    padding-bottom: 10px;

    z-index: 10;
    box-shadow: 2px 7px 17px -3px rgba(0, 0, 0, 0.75);
    .containerTitle {
      height: 50px;
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 14px;
      font-weight: bold;

      border-radius: 8px 8px 0px 0px;

      background: ${({ theme }) => theme.colors.background_darker};
      color: ${({ theme }) => theme.colors.title};
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

      background: ${({ theme }) => theme.colors.input};
      color: ${({ theme }) => theme.colors.text};
      font-size: 12px;
      border: 0;
      border-radius: 4px;
      &:focus {
        outline: solid 1.5px ${shade(0.5, "#333")};
      }
    }

    .containerColorPiker {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: flex-start;

      margin-top: 15px;
      margin-left: 15px;
      margin-right: 15px;

      color: ${({ theme }) => theme.colors.text_information};
      font-size: 12px;

      .containerColors {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
      }
      .containerColorsButton {
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
      .buttonMoreColor {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 30px;

        border-radius: 4px;
        border-width: 0;

        margin-left: 4px;

        background-color: ${({ theme }) => theme.colors.background_lighter};
        cursor: pointer;

        box-shadow: 1px 1px 5px -3px rgba(0, 0, 0, 0.75);
      }
    }
    .button {
      display: flex;
      justify-content: center;
      align-items: center;

      margin: 5px 15px;
      margin-top: 50px;

      background-color: ${({ theme }) => theme.colors.accent_color};

      height: 40px;
      width: 250px;
      color: #242424;

      border-radius: 8px;

      cursor: pointer;
      box-shadow: 2px 7px 17px -3px rgba(0, 0, 0, 0.75);

      &:hover {
        background: ${({ theme }) => theme.colors.accent_color_hover};
      }
    }
  }
`;
