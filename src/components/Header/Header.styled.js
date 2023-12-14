import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 320px;
  width: 100%;
  margin-bottom: 40px;
  padding: 20px 20px 20px 20px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px 8px;
    color: inherit;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus {
      color: var(--accent-text);
    }
  }
  svg {
    display: inline-block;
    width: 32px;
    height: 32px;
    stroke: currentColor;

    &:hover,
    &:focus {
      stroke: currentColor;
    }
  }
`;
