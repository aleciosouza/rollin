import styled from "styled-components";

export const Container = styled.select`
  border: none;
  color: white;
  background-color: transparent;
  font-family: Roboto, sans-serif;

  > option {
    color: white;
    background-color: ${({ theme }) => theme.palette.primary.regular};
  }
`;
