// App.js
import React from 'react';
import ProfileForm from './components/ProfileForm';
import BioSection from './components/BioSection';
import ProfilePhoto from './components/ProfilePhoto';
import MusicGenres from './components/MusicGenres';
import Publications from './components/Publications';
import ContentForm from './components/ContentForm';

const App = () => {
  return (
    <div>
      <h1>Mon Compte</h1>
      <ProfileForm />
      <BioSection />
      <ProfilePhoto />
      <MusicGenres />
      <Publications />
      <ContentForm />
    </div>
  );
};

export default App;
