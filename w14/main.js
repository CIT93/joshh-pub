async function fetchAlbums() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        if (!response.ok) {
            throw new Error('Server Error: Failed to fetch data');
        }

        const data = await response.json()
        if (!data || data.length === 0) {
            throw new Error('Data Error: No Albums Found');
        }
        renderData(data);
    } catch (error) {
        console.error('Error:', error.message);
        document.getElementById('album-container').innerHTML = '<p>Error: ${error.message}'
    }
}

function renderData(data) {
    const container = document.getElementById('album-container');
    container.innerHTML = ''; 
    data.forEach(album => {
        const albumDiv = document.createElement('div');
        albumDiv.innerHTML = `<h3>${album.title}</h3>`;
        container.appendChild(albumDiv);
    });
}

fetchAlbums();