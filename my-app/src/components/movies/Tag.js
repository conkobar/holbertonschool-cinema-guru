import React, { useState } from 'react';
import './movies.css';

const Tag = ({ genre, filter, genres, setGenres }) => {
  const [selected, setSelected] = useState(false);

  const handleTag = () => {
    if (selected) {
      const newGenres = genres.filter((g) => g !== genre);
      setGenres(newGenres);
      setSelected(false);
    } else {
      const newGenres = [...genres, genre];
      setGenres(newGenres);
      setSelected(true);
    }
  };

  return (
    <li className={filter ? 'tag-filter' : 'tag'} onClick={handleTag}>
      {genre}
    </li>
  );
};

export default Tag;
