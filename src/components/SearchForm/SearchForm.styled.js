import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 10px;
  width: 100%;
  max-width: 216px;

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
    gap: 4px;
    font-size: 18px;
    letter-spacing: 0.18px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
    letter-spacing: 0.2px;

    svg {
      width: 37px;
      height: 37px;
    }
  }
`;
