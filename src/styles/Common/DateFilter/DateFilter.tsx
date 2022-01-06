import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.palette.primary.dark};

  > picture:last-child {
    margin-left: auto;
  }
`;
