import { SpriteSVG } from '../../assets/SpriteSVG';
import { StyledLogo } from './Logo.styled';

const Logo = () => {
  return (
    <StyledLogo to={'/'}>
      <SpriteSVG name={'logo'} />
      Dashboard
      <span>v.01</span>
    </StyledLogo>
  );
};

export default Logo;
