import styled from 'styled-components';

export const FinanceBarContainer = styled.div `
  width: 500%;
  height: 30px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
`;

export const Ticker = styled.div `
  margin: 0 25px;
  position: relative;
  &:before {
    content: '';
    width: 3px;
    height: 15px;
    position: absolute;
    top: 3px;
    left: -6px;
    background: var(--orange);
  }
  animation: slide 60s infinite alternate ease-in-out;
  animation-delay: 2s;
`;

export const TickerStyles = styled.span `
  font-family: var(--font-rest);
  font-size: 0.8rem;
  font-weight: ${(props) =>
    props.light ? 'var(--weight-regular)' : 'var(--weight-highlight)'};
  margin-right: 8px;
`;

export const TickerPercentage = styled.span `
  font-family: var(--font-rest);
  font-size: 0.8rem;
  color: var(--green);
  border-radius: 2px;
  padding: 2px 3px;
  font-weight: var(--weight-highlight);
`;