import { SpriteSVG } from '@/assets/SpriteSVG';
import { StylesPaginationList } from './Pagination.styled';

const Pagination = () => {
  return (
    <StylesPaginationList>
      <li>
        <button>
          <SpriteSVG name={'left_arrow'} />
        </button>
      </li>
      <li>
        <span data-page-number="1">1</span>
      </li>
      <li>
        <span>2</span>
      </li>
      <li>
        <span>3</span>
      </li>
      <li>
        <span>5</span>
      </li>
      <li>
        <p>...</p>
      </li>
      <li>
        <span>40</span>
      </li>
      <li>
        <button>
          <SpriteSVG name={'rigth_arrow'} />
        </button>
      </li>
    </StylesPaginationList>
  );
};
export default Pagination;
