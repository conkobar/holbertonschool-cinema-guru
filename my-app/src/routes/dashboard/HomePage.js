import React, { useState, useEffect } from 'react';
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/general/Button';
import './dashboard.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState('');
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);

  const loadMovies = (page) => {
    fetch(
      `/api/titles/advancedsearch?minYear=${minYear}&maxYear=${maxYear}&genres=${genres}&title=${title}&sort=${sort}&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies([...movies, ...data]);
        setPage(page + 1);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadMovies(page);
  }, [minYear, maxYear, genres, sort, title]);

  const handleLoadMore = () => {
    loadMovies(page);
  };

  return (
    <div className='dashboard'>
      <Filter
        minYear={minYear}
        maxYear={maxYear}
        genres={genres}
        sort={sort}
        title={title}
        setMinYear={setMinYear}
        setMaxYear={setMaxYear}
        setGenres={setGenres}
        setSort={setSort}
        setTitle={setTitle}
      />
      <div className='movies'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Button text='Load More..' onClick={handleLoadMore} />
    </div>
  );
};

export default HomePage;
