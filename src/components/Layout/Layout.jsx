import { Container } from '@/styles/Container';
import { StyledSection } from './Layout.styled';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  // const navigate = useNavigate();
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.pathname === '/') {
  //     navigate('/home');
  //   }
  // }, [navigate, location]);

  return (
    <>
      <header />
      <main>
        <StyledSection>
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </StyledSection>
      </main>
      <footer />
    </>
  );
};

export default Layout;
