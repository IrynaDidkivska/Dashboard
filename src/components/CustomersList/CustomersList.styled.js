import { styled } from 'styled-components';

export const Table = styled.table`
  font-size: 14px;
  letter-spacing: -0.14px;
  text-align: left;
  color: var(--main-text);
`;

export const ColumnName = styled.tr`
  border: 1px solid green;
`;
export const ColumnText = styled.th`
  background-color: transparent;
  color: #b5b7c0;
  padding: 10px 0;
  width: 200px;
`;

export const TableCell = styled.td`
  &:not(:last-child) {
    padding: 24px 0;
  }

  &:last-child {
    border-radius: 4px;
    border: 1px solid #00b087;
    background: rgba(22, 192, 152, 0.38);
    color: #008767;
  }
`;
