import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 2px;
  color: var(--accent-text);
  cursor: pointer;
  font-family: Poppins-SemiBold, sans-serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.18px;

  svg {
    margin-right: 4px;
    width: 22px;
    height: 22px;
    fill: var(--accent-text);
  }
  span {
    color: #838383;
    font-family: Poppins-Medium, sans-serif;
    font-size: 8px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.08px;
    transform: translateY(3px);
  }

  @media screen and (min-width: 768px) {
    gap: 4px;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.22px;

    svg {
      width: 28px;
      height: 28px;
    }
    span {
      font-size: 10px;
      letter-spacing: -0.1px;
    }
  }
  @media screen and (min-width: 1280px) {
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 0.26px;

    svg {
      width: 37px;
      height: 37px;
    }
    span {
      transform: translateY(6px);
    }
  }
`;
