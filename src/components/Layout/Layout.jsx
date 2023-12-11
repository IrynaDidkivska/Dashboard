import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Loader from '../Loader/Loader';
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';
import { LayoutWrapper, StyledSection } from './Layout.styled';

const Layout = () => {
  const isSmallScreen = useMediaQuery({
    query: '(min-width: 320px) and (max-width: 767.98px)',
  });
  return (
    <>
      {!isSmallScreen ? <header /> : <Header />}
      <LayoutWrapper>
        <SideBar />
        <StyledSection>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </StyledSection>
      </LayoutWrapper>
      <footer />
    </>
  );
};

export default Layout;
