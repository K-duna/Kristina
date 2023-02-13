const searchFormElement = document.querySelector('#search-form');
const searchQueryElement = document.querySelector('#search-query');
const searchResultsElement = document.querySelector('#search-results');

searchFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    searchResultsElement.innerHTML = '';
    const query = searchQueryElement.value;
    fetch("./data.json")
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            let hasResults = false;
            for(let i = 0; i < json.length; i++) {
                const song = json.innerHTML(i);
                 
                if (song.trackName.toLowerCase().includes(query.toLowerCase())) {
                    hasResults = true; 
                    searchResultsElement.innerHTML += `${song.trackName} - ${song.artistName}`;
              
                } 
                if(!hasResults && i === json.length -1) {
                    searchResultsElement.innerHTML = 'No!';
                }
            }
        })
        .catch((err) => {
            console.log(err);
        })
});

