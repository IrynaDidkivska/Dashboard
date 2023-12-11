import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { Link, useNavigate } from 'react-router-dom';
import { SpriteSVG } from '@/assets/SpriteSVG';
import navLinksData from '@/data/navLinkData';
import UserLogo from '../UserLogo/UserLogo';
import { StyledArrowSVG, StyledNavbarMenu } from './NavBar.styled';

const NavBar = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery({
    query: '(min-width: 320px) and (max-width: 767.98px)',
  });

  return (
    <>
      <StyledNavbarMenu>
        <ul>
          {navLinksData.map((navItem, index) => (
            <li
              key={index}
              onClick={() => navigate({ pathname: navItem.path })}
            >
              <SpriteSVG name={navItem.svgIcon} />
              <Link
                to={{ pathname: navItem.path }}
                rel="prefetch"
                onClick={() => setOpen(!open)}
              >
                {navItem.label}
              </Link>
              <StyledArrowSVG>
                <SpriteSVG name={navItem.svgArrow} />
              </StyledArrowSVG>
            </li>
          ))}
        </ul>
        {isSmallScreen && <UserLogo />}
      </StyledNavbarMenu>
    </>
  );
};

export default NavBar;

NavBar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
