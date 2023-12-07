import { RevolvingDot } from 'react-loader-spinner';
import { StyledLoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoaderWrapper>
      <RevolvingDot
        radius="70"
        strokeWidth="10"
        color="#00B087"
        secondaryColor="#FFC5C5"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </StyledLoaderWrapper>
  );
};

export default Loader;
