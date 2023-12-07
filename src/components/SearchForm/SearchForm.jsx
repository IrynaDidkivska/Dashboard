import { SpriteSVG } from '@/assets/SpriteSVG';
import { StyledForm } from './SearchForm.styled';
import { useState } from 'react';
import { toast } from 'react-toastify';

const SearchForm = () => {
  const [value, setValue] = useState('');

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
        value={value}
        onChange={e => setValue(e.target.value)}
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
