import styled from 'styled-components';
export const LayoutWrapper = styled.main`
  display: grid;
  gap: 30px;
  grid-template-columns: 306px 1127px;
  grid-template-areas: 'sidebar main';
  @media screen and (min-width: 768px) {
    grid-template-columns: 200px 568px;
    grid-template-areas: 'sidebar main';
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: 306px 1127px;
    grid-template-areas: 'sidebar main';
    gap: 71px;
  }
`;

export const StyledSection = styled.section`
  grid-area: main;
  width: 568px;
  margin: 0px;
  padding-top: 37px;
  padding-bottom: 158px;
  @media screen and (min-width: 1440px) {
    padding-top: 41px;
    width: 968px;
    padding-bottom: 258px;
  }
`;

export const StyledAside = styled.aside`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  grid-area: sidebar;
  padding: 37px 18px 58px 18px;
  color: var(--secondary-text);
  background-color: var(--bg-main);
  box-shadow: 0px 10px 60px 0px rgba(226, 236, 249, 0.5);
  transition: var(--transition);

  @media screen and (min-width: 768px) {
    padding: 37px 18px 58px 18px;
  }
  @media screen and (min-width: 1440px) {
    padding: 37px 28px 78px 28px;
  }
`;

export const StyledTitle = styled.h1`
  margin-bottom: 30px;
  font-size: 20px;
  line-height: normal;
  color: var(--accent-text);

  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
    font-size: 22px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 51px;
    font-size: 24px;
  }
`;
