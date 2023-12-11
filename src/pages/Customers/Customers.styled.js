import styled from 'styled-components';

export const CustomersWrapper = styled.div`
  padding: 30px 40px 40px 40px;
  border-radius: 30px;
  background-color: var(--bg-main);
  width: 968px;
  &::after {
    position: absolute;
    left: 0;
    top: 166px;
    content: '';
    display: block;
    width: 968px;
    height: 1px;
    border-bottom: 1px solid #eeeeee;
  }

  filter: drop-shadow(0px 10px 60px rgba(226, 236, 249, 0.5));
  p {
    color: #b5b7c0;
  }
`;

export const SlylesWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 40px;

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
`;

export const StyledBottomWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 32px;
`;
