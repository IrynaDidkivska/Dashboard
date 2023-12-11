import { Link, useNavigate } from 'react-router-dom';
import { SpriteSVG } from '@/assets/SpriteSVG';
import navLinksData from '@/data/navLinkData';
import {
  StyledArrowSVG,
  StyledNavbarMenu,
  StyledWrapper,
} from './NavBar.styled';
import Logo from '../Logo/Logo';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <StyledWrapper>
      <Logo />
      <StyledNavbarMenu>
        {/* <button onClick={() => setOpen(!open)}>
          <SpriteSVG name={'toggle'} />
        </button> */}
        <ul>
          {navLinksData.map((navItem, index) => (
            <li
              key={index}
              onClick={() => navigate({ pathname: navItem.path })}
            >
              <SpriteSVG name={navItem.svgIcon} />
              <Link to={{ pathname: navItem.path }} rel="prefetch">
                {navItem.label}
              </Link>
              <StyledArrowSVG>
                <SpriteSVG name={navItem.svgArrow} />
              </StyledArrowSVG>
            </li>
          ))}
        </ul>
      </StyledNavbarMenu>
    </StyledWrapper>
  );
};

export default NavBar;
