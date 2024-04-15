// ProfilePhoto.js
import React from 'react';

const ProfilePhoto = () => {
  return (
    <div>
      <img src="path_to_profile_photo.jpg" alt="Profile" />
      <input type="file" accept="image/*" />
    </div>
  );
};

export default ProfilePhoto;
