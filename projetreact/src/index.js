import React from 'react';
import ReactDOM from 'react-dom';
import MonCompte from './components/MonCompte'; // Assurez-vous que le chemin d'importation est correct
import './index.css'; // Si vous avez des styles globaux à appliquer
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <MonCompte />
  </React.StrictMode>,
  document.getElementById('root') // Assurez-vous que votre index.html a une balise <div id="root"></div>
);

reportWebVitals();
