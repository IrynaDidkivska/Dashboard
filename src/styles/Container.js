import { styled } from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (min-width: 375px) {
    width: 375px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-right: 40px;
    padding-left: 40px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-right: 100px;
    padding-left: 100px;
  }
`;
