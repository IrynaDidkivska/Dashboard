import { useMediaQuery } from 'react-responsive';
import NavBar from '../NavBar/NavBar';
import UserLogo from '../UserLogo/UserLogo';
import Logo from '../Logo/Logo';
import { StyledAside } from '../Layout/Layout.styled';

const SideBar = () => {
  const isSmallScreen = useMediaQuery({
    query: '(min-width: 320px) and (max-width: 767.98px)',
  });
  return (
    <>
      {!isSmallScreen && (
        <StyledAside>
          <div>
            <Logo />
            <NavBar />
          </div>

          <UserLogo />
        </StyledAside>
      )}
    </>
  );
};

export default SideBar;
