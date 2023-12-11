import styled from 'styled-components';

export const CustomersWrapper = styled.div`
  padding: 20px 20px 20px 20px;
  border-radius: 30px;
  background-color: var(--bg-main);
  width: 375px;
  &::after {
    position: absolute;
    left: 0;
    top: 166px;
    content: '';
    display: block;
    width: 375px;
    height: 1px;
    border-bottom: 1px solid #eeeeee;
  }

  filter: drop-shadow(0px 10px 60px rgba(226, 236, 249, 0.5));
  p {
    color: #b5b7c0;
  }

  @media screen and (min-width: 768px) {
    width: 568px;
    &::after {
      width: 568px;
    }
  }
  @media screen and (min-width: 1440px) {
    padding: 30px 40px 40px 40px;
    width: 968px;
    &::after {
      width: 968px;
    }
  }
`;

export const SlylesWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 40px;
  flex-direction: column;
  gap: 20px;

  h2 {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 7px;
    font-family: Poppins-SemiBold;
  }
  span {
    font-family: Poppins-Regular;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.14px;
    color: #16c098;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const StyledBottomWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 32px;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
`;
