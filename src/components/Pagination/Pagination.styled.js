import styled from 'styled-components';

export const StylesPaginationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;

  p {
    font-size: 12px;
    line-height: 0.12; /* 12px */
    letter-spacing: -0.12px;
    text-align: center;
    color: #404b52;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 10px;
    width: 26px;
    height: 24px;
    font-size: 12px;
    line-height: 0.12; /* 12px */
    letter-spacing: -0.12px;
    text-align: center;
    color: #404b52;
    border-radius: 4px;
    border: 1px solid #eee;
    background: #f5f5f5;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus {
      color: var(--hover-color);
      background-color: var(--bg-hover);
    }
  }
  span[data-page-number='1'] {
    color: var(--hover-color);
    background-color: var(--bg-hover);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 9px;
    width: 26px;
    height: 24px;
    color: #404b52;
    border-radius: 4px;
    border: 1px solid #eee;
    background: #f5f5f5;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus {
      color: var(--hover-color);
      background-color: var(--bg-hover);
    }
  }
  svg {
    width: 8px;
    height: 12px;
    stroke: currentColor;
    fill: currentColor;
  }
`;
