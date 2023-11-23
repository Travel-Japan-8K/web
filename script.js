// Assuming videos.json is an array of objects with properties 'title' and 'url'
fetch('videos.json')
    .then(response => response.json())
    .then(videos => {
        const videoGallery = document.getElementById('video-gallery');

        videos.forEach(video => {
            const videoElement = document.createElement('div');
            videoElement.innerHTML = `
                <h2>${video.title}</h2>
                <iframe width="560" height="315" src="${video.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;
            videoGallery.appendChild(videoElement);
        });
    })
    .catch(error => console.error('Error:', error));
