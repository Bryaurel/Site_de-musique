// ProfileForm.js
import React, { useState } from 'react';

const ProfileForm = () => {
  // State for user profile data
  const [profileData, setProfileData] = useState({
    username: '',
    email: '',
    // Add more fields as needed
  });

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to submit profile data to the server
  };

  // Event handler for form inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={profileData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        value={profileData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      {/* Add more fields */}
      <button type="submit">Save</button>
    </form>
  );
};

export default ProfileForm;
