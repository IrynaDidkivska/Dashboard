import { SpriteSVG } from '@/assets/SpriteSVG';
import { StyledForm } from './SearchForm.styled';

import { toast } from 'react-toastify';

const SearchForm = () => {
  const onSubmit = e => {
    e.preventDefault();
    toast.info(`Your request has been sent`);
    return;
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <button type="submit">
        <SpriteSVG name={'search'} />
      </button>
      <input
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search"
      />
    </StyledForm>
  );
};

export default SearchForm;
