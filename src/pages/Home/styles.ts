import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  width: 100%;
  padding: 10px;
`;

export const MenuButton = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 150px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 35px;
  padding: 10px;
  .main {
    width: 100%;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.accent_color};
    color: ${({ theme }) => theme.colors.text_button};
    border: 0px;
    border-radius: 25px;

    font-weight: 700;
  }
  .menuContent {
    position: absolute;
    bottom: 55px;
    left: 0;

    pointer-events: none;

    flex-direction: column;

    padding: 0px 10px;
    z-index: -1;

    opacity: 0;
    transition: opacity 1s;
  }
  & .menuContent > button {
    position: relative;

    background-color: ${({ theme }) => theme.colors.accent_color};
    border: 0px;
    margin-bottom: 3px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    height: 40px;
    width: 40px;
    border-radius: 25px;

    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    .icon {
      position: absolute;

      height: 40px;
      width: 40px;
      border-radius: 25px;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    transition: width 1s;

    &:hover {
      width: 120px;
    }
    p {
      position: absolute;
      opacity: 0;
      color: ${({ theme }) => theme.colors.text_button};
      left: 40px;

      font-weight: 700;

      overflow: hidden;

      transition: opacity 0.3s;
      transition-delay: 0.3s;
    }
    &:hover p {
      opacity: 1;
    }
  }
  &:hover .menuContent {
    display: flex;
    pointer-events: visible;
    opacity: 1;
    z-index: 1;
  }
`;
