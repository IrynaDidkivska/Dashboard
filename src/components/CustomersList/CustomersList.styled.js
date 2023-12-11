import { styled } from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;

  overflow: hidden;
  max-width: 888px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  font-size: 14px;
  letter-spacing: -0.14px;
  text-align: left;
  color: var(--main-text);
`;

export const ColumnName = styled.tr`
  position: relative;
`;
export const ColumnText = styled.th`
  padding-bottom: 14px;
  width: 200px;
  font-size: 14px;
  letter-spacing: -0.14px;
  background-color: transparent;
  color: #b5b7c0;
`;

export const TableCell = styled.td`
  padding: 24px 0;

  border-bottom: 1px solid #eeeeee;
  &:last-child {
    position: relative;
    padding: 4px 12px;
    color: ${props =>
      props.$active === 'Active' ? 'var( --active)' : 'var(--inactive)'};
    &::after {
      position: absolute;
      left: 0;
      top: 20px;
      content: '';
      display: block;
      width: 80px;
      height: 29px;
      /* padding: 4px 12px; */
      border-radius: 4px;
      border: 1px solid
        ${props =>
          props.$active === 'Active' ? 'var( --active)' : 'var(--inactive)'};
      background-color: ${props =>
        props.$active === 'Active' ? 'var(--bg-active)' : 'var(--bg-inactive)'};
    }
  }
`;
