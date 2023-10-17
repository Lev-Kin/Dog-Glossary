document.getElementById('button-random-dog').addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');

            // Clear previous content
            contentDiv.innerHTML = '';

            // Add new image
            const dogImage = document.createElement('img');
            dogImage.src = data.message;
            dogImage.alt = "Random Dog";
            contentDiv.appendChild(dogImage);
        })
        .catch(error => {
            console.error("There was an error fetching the dog image:", error);
        });
});
