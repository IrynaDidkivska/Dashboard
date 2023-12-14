import { useState } from 'react';
import Logo from '../Logo/Logo';
import { SpriteSVG } from '@/assets/SpriteSVG';
import NavBar from '../NavBar/NavBar';
import { StyledHeader } from './Header.styled';

const Header = () => {
  const [open, setOpen] = useState(false);

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
