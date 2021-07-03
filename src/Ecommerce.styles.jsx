import styled from "styled-components";

export const Table = styled.div``;

export const Row = styled.div`
  display: flex;
  justify-content: ${(props) => (props?.spaceAround ? "space-around" : "")};
  padding: 10px 0;
  height: 60px;
`;

export const Column = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 850px;
  margin-top: 0;
`;

export const StyledButton = styled.button`
  box-shadow: 0px 1px 0px 0px #f0f7fa;
  background: linear-gradient(to bottom, #33bdef 5%, #019ad2 100%);
  background-color: #33bdef;
  border-radius: 6px;
  border: 1px solid #057fd0;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 14px 52px;
  text-decoration: none;
  text-shadow: 0px -1px 0px #5b6178;

  &:hover {
    background: linear-gradient(to bottom, #019ad2 5%, #33bdef 100%);
    background-color: #019ad2;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
