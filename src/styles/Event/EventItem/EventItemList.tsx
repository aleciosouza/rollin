import styled from "styled-components";

export const Container = styled.div`
  left: 0;
  width: calc(100vw - 48px);
  padding: 24px;
  position: absolute;
  top: calc(16vh + 68px);
  height: calc(84vh - 68px);
  padding-top: calc(4vh + 40px);
  background-color: ${({ theme }) => theme.palette.primary.regular};
`;
