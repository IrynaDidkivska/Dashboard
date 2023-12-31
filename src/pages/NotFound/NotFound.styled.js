import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
  color: var(--active);
  transition: var(--transition);

  &:hover {
    transform: scale(1.1);
  }
`;
