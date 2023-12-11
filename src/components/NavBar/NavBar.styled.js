import styled from 'styled-components';
export const StyledWrapper = styled.div`
  width: 100%;
`;

export const StyledNavbarMenu = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  li {
    position: relative;
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 5px;
    width: 100%;
    height: auto;
    border-radius: 8px;
    background: transparent;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus {
      color: var(--hover-color);
      background-color: var(--bg-hover);
    }
  }
  a {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: currentColor;
    letter-spacing: -0.14px;
    &:hover,
    &:focus {
      color: var(--hover-color);
    }
  }

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
    width: 22px;
    height: 22px;
    fill: transparent;
    stroke: currentColor;

    &:hover,
    &:focus {
      stroke: currentColor;
    }
  }

  @media screen and (min-width: 768px) {
    ul {
      gap: 30px;
    }
    svg {
      width: 24px;
      height: 24px;
    }
  }
  @media screen and (min-width: 1440px) {
    ul {
      gap: 18px;
    }
    li {
      padding: 13px 0 12px 11px;
    }
  }
`;

export const StyledArrowSVG = styled.div`
  position: absolute;
  top: 10px;
  right: 8px;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  svg {
    width: 16px;
    height: 16px;
    fill: transparent;
    stroke: currentColor;

    &:hover,
    &:focus {
      stroke: currentColor;
    }
  }

  @media screen and (min-width: 1440px) {
    top: 15px;
  }
`;
