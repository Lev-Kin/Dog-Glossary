document.getElementById('button-random-dog').addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = '';
            const dogImage = document.createElement('img');
            dogImage.src = data.message;
            dogImage.alt = "Random Dog";
            contentDiv.appendChild(dogImage);
        })
        .catch(error => {
            console.error("Error fetching the dog image:", error);
        });
});

document.getElementById('button-show-breed').addEventListener('click', () => {
    const breed = document.getElementById('input-breed').value.toLowerCase();
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = '';
            if (data.status === "error") {
                contentDiv.innerHTML = '<p>Breed not found!</p>';
                return;
            }
            const dogImage = document.createElement('img');
            dogImage.src = data.message;
            dogImage.alt = breed;
            contentDiv.appendChild(dogImage);
        })
        .catch(error => {
            console.error("Error fetching the dog image:", error);
        });
});

document.getElementById('button-show-sub-breed').addEventListener('click', () => {
    const breed = document.getElementById('input-breed').value.toLowerCase();
    fetch(`https://dog.ceo/api/breed/${breed}/list`)
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = '';
            if (data.status === "error") {
                contentDiv.innerHTML = '<p>Breed not found!</p>';
                return;
            }
            if (data.message.length === 0) {
                contentDiv.innerHTML = '<p>No sub-breeds found!</p>';
                return;
            }
            const ol = document.createElement('ol');
            data.message.forEach(subBreed => {
                const li = document.createElement('li');
                li.textContent = subBreed;
                ol.appendChild(li);
            });
            contentDiv.appendChild(ol);
        })
        .catch(error => {
            console.error("Error fetching the sub-breeds:", error);
        });
});
