import React, { useState } from 'react';

function MonCompte() {
  // Utilisez useState pour gérer les états locaux
  const [nom, setNom] = useState('');
  const [bio, setBio] = useState('');
  const [genresMusicaux, setGenresMusicaux] = useState([]);

  // Ajoutez d'autres états selon vos besoins

  // Définissez les gestionnaires d'événements pour mettre à jour les états
  const handleNomChange = (e) => {
    setNom(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
  };

  const handleGenreChange = (e) => {
    const selectedGenres = Array.from(e.target.selectedOptions, (option) => option.value);
    setGenresMusicaux(selectedGenres);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enregistrer les informations du profil, y compris la photo, dans la base de données ou effectuer d'autres actions nécessaires
  };
  // Ajoutez d'autres gestionnaires d'événements selon vos besoins

  return (
    <div>
      <h1>Mon Compte</h1>
      {/* Formulaire pour modifier le profil */}
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input type="text" value={nom} onChange={handleNomChange} />
        </label>
        <br />
        <label>
          Bio:
          <textarea value={bio} onChange={handleBioChange} />
        </label>
        <br />
        <label>
          Photo de profil:
          <input type="file" onChange={handlePhotoChange} />
        </label>
        <br />
        <label>
          Genres musicaux préférés:
          <select multiple value={genresMusicaux} onChange={handleGenreChange}>
            <option value="rock">Rock</option>
            <option value="pop">Pop</option>
            <option value="jazz">Jazz</option>
            {/* Ajoutez d'autres options selon vos besoins */}
          </select>
        </label>
        <br />
        {/* Ajoutez d'autres champs de formulaire selon vos besoins */}
        <button type="submit">Enregistrer</button>
      </form>
      {/* Affichez d'autres éléments de profil, comme la photo de profil, les genres musicaux, etc. */}
    </div>
  );
}

export default MonCompte;
