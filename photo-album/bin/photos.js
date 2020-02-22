const fetch = require("node-fetch");

function getPhotos(albumId) {

	if (isNaN(albumId)) {
    throw new TypeError('getPhotos() expects only numbers')
  }

    fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId)
        .then(response => response.json())
        .then(data => {

            data.forEach(pics => {
                console.log("[" + pics.id + "] " + pics.title + '\n');
            });

        });
}

// Export functions
module.exports = {
    getPhotos
};