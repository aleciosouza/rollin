import styled from "styled-components";

interface IEventItemContainer {
  down?: boolean;
}

export const Info = styled.div`
  display: flex;
  align-items: center;

  > picture {
    margin-right: 10px;
  }
`;

export const Value = styled.p`
  font-size: 1.2em;
  font-weight: bold;
`;

export const Container = styled.div<IEventItemContainer>`
  border: 1px solid;
  padding: 0.5em;
  border-radius: 6px;
  margin-bottom: 25px;

  background-color: ${({ theme }) => theme.palette.primary.dark50};

  border-color: ${({ down, theme }) =>
    (() => {
      const color = down ? theme.palette.red : theme.palette.green;

      return color.regular;
    })()};
`;
