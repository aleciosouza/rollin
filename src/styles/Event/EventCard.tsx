import styled, { css } from "styled-components";

const redBg = css`
  background-color: ${({ theme }) => theme.palette.red.dark};
`;

const greenBg = css`
  background-color: ${({ theme }) => theme.palette.green.dark};
`;

interface IContainer {
  isDebt: boolean;
}

export const EventContainer = styled.div`
  flex: 1;
  padding: 10px;
  border-radius: 5px;
`;

export const Date = styled.div`
  width: 50px;
  height: 50px;
  display: grid;
  padding: 0.25rem;
  text-align: center;
  margin-right: 10px;
  border-radius: 50%;
  place-content: center;

  > p {
    font-weight: bold;
    margin-bottom: 2px;
    text-transform: uppercase;
  }
`;

export const Title = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;

  > h2 {
    margin: 0;
    font-size: 1rem;
  }

  > picture > img {
    margin-right: 10px;
  }
`;

export const Value = styled.p`
  font-size: 1.25rem;
`;

export const Container = styled.div<IContainer>`
  display: flex;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.palette.text.light};

  > ${Date}, > ${EventContainer} {
    ${({ isDebt }) => (isDebt ? redBg : greenBg)}
  }
`;
