import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;

  font-family: Poppins-Regular, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.12px;

  background-color: #f9fbff;
  outline: transparent;
  border-radius: 10px;
  border: none;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px 8px;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus {
      scale: 1.1;
    }
  }
  svg {
    width: 22px;
    height: 22px;
    stroke: #7e7e7e;
    fill: transparent;
  }
  input {
    background: transparent;
    outline: transparent;
    border: none;
    cursor: pointer;
    &::placeholder {
      color: #b5b7c0;
    }
  }

  @media screen and (min-width: 768px) {
    svg {
      width: 24px;
      height: 24px;
    }
  }
  @media screen and (min-width: 1440px) {
    max-width: 216px;
  }
`;
