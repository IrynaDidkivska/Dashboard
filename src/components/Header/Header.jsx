import { useState } from 'react';
import Logo from '../Logo/Logo';
import { SpriteSVG } from '@/assets/SpriteSVG';
import NavBar from '../NavBar/NavBar';
import styled from 'styled-components';

const Header = () => {
  const [open, setOpen] = useState(true);

  return (
    <StyledHeader>
      <Logo />
      <button onClick={() => setOpen(!open)}>
        <SpriteSVG name={'toggle'} />
      </button>
      {open && <NavBar open={open} setOpen={setOpen} />}
    </StyledHeader>
  );
};

export default Header;
export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 320px;
  width: 100%;
  margin-bottom: 40px;
  padding: 20px 20px 20px 20px;
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
    width: 32px;
    height: 32px;
    stroke: currentColor;

    &:hover,
    &:focus {
      stroke: currentColor;
    }
  }
`;
