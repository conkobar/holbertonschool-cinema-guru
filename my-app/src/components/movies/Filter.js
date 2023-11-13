import React from 'react';
import './movies.css';
import SearchBar from './SearchBar';
import Tag from './Tag';

const Filter = ({
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
  sort,
  setSort,
  genres,
  setGenres,
  title,
  setTitle,
}) => {
  const handleMinYearChange = (event) => {
    setMinYear(parseInt(event.target.value));
  };

  const handleMaxYearChange = (event) => {
    setMaxYear(parseInt(event.target.value));
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handleGenresChange = (event) => {
    setGenres(event.target.value);
  };

  return (
    <div className='filter'>
      <SearchBar title={title} setTitle={setTitle} />
      <div className='filter__year'>
        <label htmlFor='minYear'>Min Year:</label>
        <input
          type='number'
          id='minYear'
          name='minYear'
          value={minYear}
          onChange={handleMinYearChange}
        />
        <label htmlFor='maxYear'>Max Year:</label>
        <input
          type='number'
          id='maxYear'
          name='maxYear'
          value={maxYear}
          onChange={handleMaxYearChange}
        />
      </div>
      <div className='filter__sort'>
        <label htmlFor='sort'>Sort By:</label>
        <select id='sort' name='sort' value={sort} onChange={handleSortChange}>
          <option value='latest'>Latest</option>
          <option value='oldest'>Oldest</option>
          <option value='highestrated'>Highest Rated</option>
          <option value='lowestrated'>Lowest Rated</option>
        </select>
      </div>
      <div className='filter__genres'>
        <label htmlFor='genres'>Genres:</label>
        <select
          id='genres'
          name='genres'
          value={genres}
          onChange={handleGenresChange}
        >
          <option value=''>All</option>
          <option value='action'>Action</option>
          <option value='drama'>Drama</option>
          <option value='comedy'>Comedy</option>
          <option value='biography'>Biography</option>
          <option value='romance'>Romance</option>
          <option value='thriller'>Thriller</option>
          <option value='war'>War</option>
          <option value='history'>History</option>
          <option value='sport'>Sport</option>
          <option value='sci-fi'>Sci-Fi</option>
          <option value='documentary'>Documentary</option>
          <option value='crime'>Crime</option>
          <option value='fantasy'>Fantasy</option>
        </select>
      </div>
      <div className='filter__tags'>
        <Tag name='action' />
        <Tag name='drama' />
        <Tag name='comedy' />
        <Tag name='biography' />
        <Tag name='romance' />
        <Tag name='thriller' />
        <Tag name='war' />
        <Tag name='history' />
        <Tag name='sport' />
        <Tag name='sci-fi' />
        <Tag name='documentary' />
        <Tag name='crime' />
        <Tag name='fantasy' />
      </div>
    </div>
  );
};

export default Filter;
