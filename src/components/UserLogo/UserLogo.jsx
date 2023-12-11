import userLogo from '../../assets/img/UserLogo.jpeg';
import userLogoWebp from '../../assets/img/UserLogo.webp';
import userLogo2x from '../../assets/img/UserLogo@2x.jpeg';
import userLogo2xWebp from '../../assets/img/UserLogo@2x.webp';
import { StyledUserLogoWrapper } from './UserLogo.styled';

const UserLogo = () => {
  return (
    <StyledUserLogoWrapper>
      <picture>
        <source
          srcSet={`${userLogoWebp} 1x, ${userLogo2xWebp} 2x`}
          type="image/webp"
        />
        <source srcSet={`${userLogo} 1x, ${userLogo2x} 2x`} type="image/jpeg" />
        <img src={userLogo} alt="User Logo" width="42" height="42" />
      </picture>
      <div>
        <p>Evano</p>
        <span>Project Manager</span>
      </div>
    </StyledUserLogoWrapper>
  );
};

export default UserLogo;
