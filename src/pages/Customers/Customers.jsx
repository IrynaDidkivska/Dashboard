import CustomersList from '@/components/CustomersList/CustomersList';
import SearchForm from '@/components/SearchForm/SearchForm';
import {
  CustomersWrapper,
  SlylesWrapper,
  StyledBottomWrapper,
} from './Customers.styled';
import Pagination from '@/components/Pagination/Pagination';
import { StyledTitle } from '@/components/Layout/Layout.styled';

const Customers = () => {
  return (
    <>
      <StyledTitle>Hello Evano 👋🏼,</StyledTitle>
      <CustomersWrapper>
        <SlylesWrapper>
          <h2>
            All Customers <span>Active Members</span>
          </h2>
          <SearchForm />
        </SlylesWrapper>

        <CustomersList />
        <StyledBottomWrapper>
          <p>Showing data 1 to 8 of 256K entries</p>
          <Pagination />
        </StyledBottomWrapper>
      </CustomersWrapper>
    </>
  );
};

export default Customers;
