import { lighten } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: 100%;

  margin-top: 16px;
  margin-left: 4px;

  button {
    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 4px;

    background: #373737;

    border: none;

    &:hover {
      background: ${lighten(0.05, "#373737")};
      box-shadow: 1px 1px 5px -3px rgba(0, 0, 0, 0.75);
    }
  }
`;
