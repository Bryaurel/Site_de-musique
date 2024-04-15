// BioSection.js
import React, { useState } from 'react';

const BioSection = () => {
  // State for user bio
  const [bio, setBio] = useState('');

  // Event handler for updating bio
  const handleChange = (event) => {
    setBio(event.target.value);
  };

  return (
    <div>
      <textarea
        value={bio}
        onChange={handleChange}
        placeholder="Write your bio..."
      />
    </div>
  );
};

export default BioSection;
