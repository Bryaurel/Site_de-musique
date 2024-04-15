// MusicGenres.js
import React, { useState } from 'react';

const MusicGenres = () => {
  // State for selected genres
  const [selectedGenres, setSelectedGenres] = useState([]);

  // Event handler for selecting genres
  const handleSelectGenre = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedGenres([...selectedGenres, value]);
    } else {
      setSelectedGenres(selectedGenres.filter((genre) => genre !== value));
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          value="Rock"
          checked={selectedGenres.includes('Rock')}
          onChange={handleSelectGenre}
        />
        Rock
      </label>
      <label>
        <input
          type="checkbox"
          value="Pop"
          checked={selectedGenres.includes('Pop')}
          onChange={handleSelectGenre}
        />
        Pop
      </label>
      {/* Add more genres */}
    </div>
  );
};

export default MusicGenres;
