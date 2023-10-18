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

document.getElementById('button-show-breed').addEventListener('click', () => {
    const breed = document.getElementById('input-breed').value.toLowerCase();
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');

            // Clear previous content
            contentDiv.innerHTML = '';

            // Check if the breed exists
            if (data.status === "error") {
                contentDiv.innerHTML = '<p>Breed not found!</p>';
                return;
            }

            // Display the image of the specified breed
            const dogImage = document.createElement('img');
            dogImage.src = data.message;
            dogImage.alt = breed;
            contentDiv.appendChild(dogImage);
        })
        .catch(error => {
            console.error("There was an error fetching the dog image:", error);
        });
});

const breed = document.getElementById('input-breed').value.trim().toLowerCase();
