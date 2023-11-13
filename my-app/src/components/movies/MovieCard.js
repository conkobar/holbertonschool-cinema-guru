import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClock } from '@fortawesome/free-solid-svg-icons';
import './movies.css';

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    const fetchUserLists = async () => {
      const favoriteResponse = await fetch('/routes/api/titles/favorite/');
      const favoriteData = await favoriteResponse.json();
      setIsFavorite(favoriteData.includes(movie.imdbId));

      const watchLaterResponse = await fetch('/routes/api/titles/watchlater/');
      const watchLaterData = await watchLaterResponse.json();
      setIsWatchLater(watchLaterData.includes(movie.imdbId));
    };
    fetchUserLists();
  }, [movie.imdbId]);

  const handleClick = async (type) => {
    const url = `/api/titles/${type}/${movie.imdbId}`;
    const method = isFavorite || isWatchLater ? 'DELETE' : 'POST';
    const response = await fetch(url, { method });
    if (response.ok) {
      if (type === 'favorite') {
        setIsFavorite(!isFavorite);
      } else if (type === 'watchlater') {
        setIsWatchLater(!isWatchLater);
      }
    }
  };

  return (
    <li className="movie-card">
      <div className="movie-card__header">
        <h2 className="movie-card__title">{movie.title}</h2>
        <div className="movie-card__icons">
          <FontAwesomeIcon
            icon={faHeart}
            className={`movie-card__icon ${isFavorite ? 'movie-card__icon--active' : ''}`}
            onClick={() => handleClick('favorite')}
          />
          <FontAwesomeIcon
            icon={faClock}
            className={`movie-card__icon ${isWatchLater ? 'movie-card__icon--active' : ''}`}
            onClick={() => handleClick('watchlater')}
          />
        </div>
      </div>
      <p className="movie-card__synopsis">{movie.synopsis}</p>
      <ul className="movie-card__genres">
        {movie.genres.map((genre) => (
          <li key={genre} className="movie-card__genre">
            {genre}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default MovieCard;
