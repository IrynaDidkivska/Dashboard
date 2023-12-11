import styled from 'styled-components';

export const StyledUserLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  img {
    width: 42px;
    height: 42px;
  }
  p {
    color: var(--accent-text);
  }
  span {
    font-family: Poppins-Regular, sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.12px;
    color: #757575;
  }
`;
