import styled, { css } from "styled-components";

const redBg = css`
  background-color: ${({ theme }) => theme.palette.red.dark};
`;

const greenBg = css`
  background-color: ${({ theme }) => theme.palette.green.dark};
`;

interface IEventStatus {
  isDebt?: boolean;
}

export const HeaderStatus = styled.div`
  top: 8vh;
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: space-between;
`;

export const HeaderInfo = styled.div``;

export const EventStatus = styled.div<IEventStatus>`
  height: 8vh;
  display: flex;
  padding: 20px;
  max-width: 30vw;
  flex-wrap: wrap;
  border-radius: 6px;
  align-items: center;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);

  > picture {
    margin-right: 5px;
  }

  > p {
    font-size: 1.3em;
    font-weight: 700;
    flex-basis: 100%;
    margin-bottom: 0px;
  }

  ${({ isDebt }) => (isDebt ? redBg : greenBg)};
`;

export const Title = styled.div`
  font-size: 1.3em;
  font-weight: 700;
  margin-bottom: 0px;
`;

export const Value = styled.p`
  font-size: 1.25rem;
`;

export const Date = styled.span`
  font-size: 0.7em;
`;

export const Header = styled.div`
  width: 100%;
  z-index: 1;
  min-height: 12vh;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  padding: 24px;
  margin-bottom: 10px;
  flex-direction: column;
  color: ${({ theme }) => theme.palette.text.light};
`;
