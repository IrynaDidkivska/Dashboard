import { styled } from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  overflow: hidden;
  max-width: 568px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  font-size: 10px;
  letter-spacing: -0.1px;
  text-align: left;
  color: var(--main-text);

  @media screen and (min-width: 1440px) {
    max-width: 888px;
    font-size: 14px;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 767px) {
    display: block;
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    tr {
      border-bottom: 1px solid #eeeeee;
      text-wrap: nowrap;
    }
    td {
      border: none;
      position: relative;
      padding-left: 50%;
    }
    td:before {
      position: absolute;
      top: 14px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
      font-weight: bold;
    }
    td:nth-of-type(1):before {
      content: 'Customer Name';
      color: #b5b7c0;
    }
    td:nth-of-type(2):before {
      content: 'Company';
      color: #b5b7c0;
    }
    td:nth-of-type(3):before {
      content: 'Phone Number';
      color: #b5b7c0;
    }
    td:nth-of-type(4):before {
      content: 'Email';
      color: #b5b7c0;
    }
    td:nth-of-type(5):before {
      content: 'Country';
      color: #b5b7c0;
    }
    td:nth-of-type(6):before {
      content: 'Status';
      color: #b5b7c0;
      text-align: left;
    }
  }
`;

export const ColumnName = styled.tr`
  position: relative;
`;
export const ColumnText = styled.th`
  padding-bottom: 10px;
  font-size: 10px;
  letter-spacing: -0.1px;
  background-color: transparent;
  color: #b5b7c0;
  @media screen and (min-width: 1440px) {
    padding-bottom: 14px;
    font-size: 14px;
    letter-spacing: -0.14px;
  }
  @media screen and (max-width: 1439px) {
    &:nth-of-type(2) {
      display: none;
    }
  }
  @media screen and (max-width: 1439.98px) {
    &:last-child {
      text-align: center;
    }
  }
`;

export const TableCell = styled.td`
  padding: 14px 0;
  width: 150px;
  border-bottom: none;
  &:last-child {
    position: relative;
    text-align: center;
    color: ${props =>
      props.$active === 'Active' ? 'var( --active)' : 'var(--inactive)'};
    &::after {
      position: absolute;
      right: -44px;
      top: 13px;
      content: '';
      display: block;
      width: 50px;
      height: 19px;
      border-radius: 4px;
      border: 1px solid
        ${props =>
          props.$active === 'Active' ? 'var( --active)' : 'var(--inactive)'};
      background-color: ${props =>
        props.$active === 'Active' ? 'var(--bg-active)' : 'var(--bg-inactive)'};
    }
  }
  @media screen and (min-width: 768px) {
    border-bottom: 1px solid #eeeeee;

    &:last-child {
      text-align: center;
      padding-left: 8px;
      &::after {
        left: 23px;
        top: 13px;
        width: 60px;
        height: 20px;
      }
    }
  }
  @media screen and (min-width: 1440px) {
    padding: 24px 0;

    &:last-child {
      text-align: left;
      padding-left: 12px;
      &::after {
        left: 0;
        top: 20px;
        width: 80px;
        height: 29px;
      }
    }
  }
  @media screen and (max-width: 1439px) {
    &:nth-of-type(2) {
      display: none;
    }
  }
`;
