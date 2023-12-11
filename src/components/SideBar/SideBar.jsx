import { StyledAside } from '../Layout/Layout.styled';
import NavBar from '../NavBar/NavBar';
import UserLogo from '../UserLogo/UserLogo';

const SideBar = () => {
  return (
    <StyledAside>
      <NavBar />
      <UserLogo />
    </StyledAside>
  );
};

export default SideBar;
