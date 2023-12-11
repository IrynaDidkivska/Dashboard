import { Suspense } from 'react';
import { LayoutWrapper, StyledSection } from './Layout.styled';
import Loader from '../Loader/Loader';
import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';

const Layout = () => {
  return (
    <>
      <header />

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
