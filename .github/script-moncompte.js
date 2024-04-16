document.addEventListener('DOMContentLoaded', function() {
    const selectNationalite = document.getElementById('nationality');
    
    // Fetch de la liste des pays depuis l'API
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            data.forEach(country => {
                const option = document.createElement('option');
                option.value = country.name.common;
                option.textContent = country.name.common;
                selectNationalite.appendChild(option);
            });
        })
        .catch(error => console.error('Erreur lors du chargement des pays : ', error));
});
